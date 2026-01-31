import NotificationGenerator from "./notification-generator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotificationsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI-Powered Notifications</h1>
        <p className="text-muted-foreground mt-2">
          Generate personalized notification suggestions for GaiaLabs members.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Notification Suggestion Tool</CardTitle>
          <CardDescription>
            Fill in the details below to receive AI-tailored notification topics. This ensures members stay informed without being overwhelmed.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <NotificationGenerator />
        </CardContent>
      </Card>
    </div>
  );
}
