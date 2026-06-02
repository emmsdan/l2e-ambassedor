import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, Card } from "@/components/portal-shell";
import { events } from "@/lib/mock";

export const Route = createFileRoute("/app/events")({
  head: () => ({ meta: [{ title: "Events — Learn2Earn" }] }),
  component: Events,
});

function Events() {
  return (
    <PortalShell
      title="Events"
      subtitle="Town halls, clinics, and meetups with the community."
    >
      <div className="grid lg:grid-cols-2 gap-5">
        {events.map((e, i) => (
          <Card
            key={e.title}
            className={`p-7 ${i === 0 ? "bg-plum-gradient text-white noise relative overflow-hidden" : ""}`}
          >
            <div className="relative">
              {i === 0 && (
                <span className="text-[10px] uppercase tracking-wider font-bold text-amber">
                  {" "}
                  Featured
                </span>
              )}
              <div
                className={`mt-2 text-xs uppercase tracking-wider font-bold ${i === 0 ? "text-amber" : "text-primary"}`}
              >
                {e.when}
              </div>
              <h3
                className={`mt-2 text-2xl font-bold ${i === 0 ? "text-white" : "text-foreground"}`}
              >
                {e.title}
              </h3>
              <div
                className={`mt-2 text-sm ${i === 0 ? "text-white/70" : "text-muted-foreground"}`}
              >
                Hosted by {e.host} · {e.rsvps} ambassadors going
              </div>
              <div className="mt-5 flex gap-2">
                <button
                  className={`h-10 px-4 rounded-xl font-semibold text-sm ${i === 0 ? "bg-amber text-plum" : "bg-primary text-white"}`}
                >
                  RSVP
                </button>
                <button
                  className={`h-10 px-4 rounded-xl font-semibold text-sm border ${i === 0 ? "border-white/20 text-white hover:bg-white/5" : "border-border text-le-text hover:bg-secondary"}`}
                >
                  Add to calendar
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </PortalShell>
  );
}
