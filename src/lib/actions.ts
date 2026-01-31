"use server";

import { generateNotificationSuggestions, type NotificationInput } from "@/ai/flows/ai-powered-notifications";
import { z } from "zod";

interface FormState {
  suggestedTopics: string[];
  error: string | null;
}

const formSchema = z.object({
  memberRoles: z.string().min(1, "Member roles are required."),
  projectInvolvement: z.string().min(1, "Project involvement is required."),
  platformUpdates: z.string().min(1, "Platform updates are required."),
  knowledgeBase: z.string().min(1, "Knowledge base is required."),
});

export async function getNotificationSuggestions(prevState: FormState, formData: FormData): Promise<FormState> {
  try {
    const rawFormData = {
      memberRoles: formData.get("memberRoles"),
      projectInvolvement: formData.get("projectInvolvement"),
      platformUpdates: formData.get("platformUpdates"),
      knowledgeBase: formData.get("knowledgeBase"),
    };

    const parsed = formSchema.safeParse(rawFormData);
    if (!parsed.success) {
      return {
        suggestedTopics: [],
        error: parsed.error.errors.map((e) => e.message).join(", "),
      };
    }

    const input: NotificationInput = {
      memberRoles: parsed.data.memberRoles.split(',').map(role => role.trim()),
      projectInvolvement: parsed.data.projectInvolvement.split(',').map(project => project.trim()),
      platformUpdates: parsed.data.platformUpdates,
      knowledgeBase: parsed.data.knowledgeBase,
    };
    
    const result = await generateNotificationSuggestions(input);

    if (!result || !result.suggestedTopics) {
      return {
        suggestedTopics: [],
        error: "Failed to generate suggestions. The AI returned an empty response.",
      };
    }
    
    return {
      suggestedTopics: result.suggestedTopics,
      error: null,
    };

  } catch (error) {
    console.error("Error generating notification suggestions:", error);
    if (error instanceof Error) {
        return {
          suggestedTopics: [],
          error: `An unexpected error occurred: ${error.message}`,
        };
    }
    return {
      suggestedTopics: [],
      error: "An unexpected error occurred. Please check the server logs.",
    };
  }
}
