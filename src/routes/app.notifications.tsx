import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, Card } from "@/components/portal-shell";
import { notifications } from "@/lib/mock";

export const Route = createFileRoute("/app/notifications")({
  head: () => ({ meta: [{ title: "Inbox — Learn2Earn" }] }),
  component: Notifications,
});

const icon: Record<string, string> = {
  celebration: "",
  progress: "",
  system: "",
  event: "",
  community: "",
};

function Notifications() {
  return (
    <PortalShell title="Inbox" subtitle="Everything that mattered this week.">
      <Card>
        <ul>
          {notifications.map((n, i) => (
            <li
              key={i}
              className={`flex gap-4 p-5 border-b border-border last:border-b-0 ${n.unread ? "bg-accent/40" : ""}`}
            >
              <span className="h-10 w-10 rounded-xl bg-secondary grid place-items-center text-lg">
                {icon[n.type]}
              </span>
              <div className="flex-1">
                <div className="text-sm text-foreground font-medium">
                  {n.text}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {n.time}
                </div>
              </div>
              {n.unread && (
                <span className="h-2 w-2 rounded-full bg-primary self-center" />
              )}
            </li>
          ))}
        </ul>
      </Card>
    </PortalShell>
  );
}
