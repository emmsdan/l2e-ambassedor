import { createFileRoute, Link } from "@tanstack/react-router";
import { MarketingShell } from "@/components/marketing-shell";

export const Route = createFileRoute("/apply/status/$id")({
  head: () => ({ meta: [{ title: "Application status — Learn2Earn" }] }),
  component: Status,
});

const stages = [
  { name: "Received", done: true, time: "Today, 09:14" },
  { name: "Under review", done: true, time: "Today, 11:02" },
  { name: "Decision", done: false, time: "Within 5 working days" },
  { name: "Onboarding", done: false, time: "" },
];

function Status() {
  const { id } = Route.useParams();
  return (
    <MarketingShell>
      <section className="bg-surface min-h-[70vh] py-16 px-6">
        <div className="max-w-[640px] mx-auto">
          <Link to="/" className="text-sm text-muted-foreground">← Home</Link>
          <h1 className="mt-2 text-3xl font-bold text-foreground">Application status</h1>
          <div className="mt-2 text-sm text-muted-foreground">Tracking ID: <span className="font-mono text-foreground">{id}</span></div>

          <div className="mt-8 rounded-2xl bg-white border border-border p-7 shadow-card">
            <div className="space-y-5">
              {stages.map((s, i) => (
                <div key={s.name} className="flex gap-4">
                  <div className="relative">
                    <div className={`h-9 w-9 rounded-full grid place-items-center text-sm font-bold ${s.done ? "bg-primary text-white" : "bg-secondary text-muted-foreground"}`}>{s.done ? "✓" : i + 1}</div>
                    {i < stages.length - 1 && <div className={`absolute left-1/2 top-9 -translate-x-1/2 w-[2px] h-10 ${s.done ? "bg-primary" : "bg-border"}`} />}
                  </div>
                  <div className="pb-8">
                    <div className={`font-semibold ${s.done ? "text-foreground" : "text-muted-foreground"}`}>{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-plum-gradient text-white p-6 noise relative overflow-hidden">
            <div className="relative">
              <div className="text-xs uppercase tracking-wider text-amber font-bold">While you wait</div>
              <div className="mt-2 font-bold">Follow @learn2earn on X and join the public WhatsApp announcement channel.</div>
              <a href="#" className="mt-3 inline-flex h-10 px-4 rounded-xl bg-white text-plum text-sm font-semibold items-center">Join channel →</a>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
