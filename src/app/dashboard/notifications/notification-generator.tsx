"use client";

import { useFormState, useFormStatus } from "react-dom";
import { getNotificationSuggestions } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Bot, Check, Loader2, Sparkles } from "lucide-react";

const initialState = {
  suggestedTopics: [],
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Suggestions
        </>
      )}
    </Button>
  );
}

export default function NotificationGenerator() {
  const [state, formAction] = useFormState(getNotificationSuggestions, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.error,
      });
    }
  }, [state.error, toast]);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <form action={formAction} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="memberRoles">Member Roles</Label>
          <Input id="memberRoles" name="memberRoles" placeholder="e.g., Developer, Designer, Project Manager" required />
          <p className="text-xs text-muted-foreground">Separate roles with commas.</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectInvolvement">Project Involvement</Label>
          <Input id="projectInvolvement" name="projectInvolvement" placeholder="e.g., Gaia Sense, Project Alpha" required />
          <p className="text-xs text-muted-foreground">Separate project names with commas.</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="platformUpdates">Platform Updates</Label>
          <Textarea
            id="platformUpdates"
            name="platformUpdates"
            placeholder="Describe recent updates, e.g., 'New workshop on AI agents available for booking.'"
            rows={4}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="knowledgeBase">Knowledge Base</Label>
          <Textarea
            id="knowledgeBase"
            name="knowledgeBase"
            placeholder="Provide context about GaiaLabs offerings, e.g., 'GaiaLabs provides B2B services...'"
            rows={6}
            required
          />
        </div>
        <SubmitButton />
      </form>
      
      <div className="mt-8 md:mt-0">
        <Card className="bg-secondary/50 h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-primary" />
              Suggested Topics
            </CardTitle>
            <CardDescription>
              The AI will generate relevant notification topics here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {state.suggestedTopics.length > 0 ? (
              <ul className="space-y-3">
                {state.suggestedTopics.map((topic, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-background rounded-md shadow-sm">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center text-center text-muted-foreground h-64 border-2 border-dashed rounded-lg">
                <p>Your suggestions will appear here.</p>
                <p className="text-sm">Fill out the form to get started.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
