'use server';

/**
 * @fileOverview This file defines the AI-powered notification flow for GaiaLabs, providing personalized updates to platform members.
 *
 * - `generateNotificationSuggestions`: A function that takes member roles, project involvement, and platform updates as input and suggests relevant notification topics.
 * - `NotificationInput`: The input type for the `generateNotificationSuggestions` function.
 * - `NotificationOutput`: The return type for the `generateNotificationSuggestions` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const NotificationInputSchema = z.object({
  memberRoles: z.array(z.string()).describe('The roles of the member within GaiaLabs.'),
  projectInvolvement: z.array(z.string()).describe('The projects the member is involved in.'),
  platformUpdates: z.string().describe('Recent updates and developments on the GaiaLabs platform.'),
  knowledgeBase: z.string().describe('A comprehensive knowledge base of GaiaLabs offerings.'),
});
export type NotificationInput = z.infer<typeof NotificationInputSchema>;

const NotificationOutputSchema = z.object({
  suggestedTopics: z.array(z.string()).describe('A list of suggested notification topics tailored to the member.'),
});
export type NotificationOutput = z.infer<typeof NotificationOutputSchema>;

export async function generateNotificationSuggestions(
  input: NotificationInput
): Promise<NotificationOutput> {
  return notificationSuggestionFlow(input);
}

const notificationPrompt = ai.definePrompt({
  name: 'notificationPrompt',
  input: {schema: NotificationInputSchema},
  output: {schema: NotificationOutputSchema},
  prompt: `You are an AI assistant designed to suggest relevant notification topics for GaiaLabs members, 
  ensuring they stay informed without being overwhelmed with irrelevant information. Consider their roles, 
  project involvement, and recent platform updates to tailor the suggestions. Use the knowledge base to add
  relevant notification topics.

  Member Roles: {{#each memberRoles}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Project Involvement: {{#each projectInvolvement}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  Platform Updates: {{{platformUpdates}}}
  Knowledge Base: {{{knowledgeBase}}}

  Based on this information, suggest a list of notification topics that would be most relevant to the member.
  Format the topics into an array of strings.
  `,
});

const notificationSuggestionFlow = ai.defineFlow(
  {
    name: 'notificationSuggestionFlow',
    inputSchema: NotificationInputSchema,
    outputSchema: NotificationOutputSchema,
  },
  async input => {
    const {output} = await notificationPrompt(input);
    return output!;
  }
);
