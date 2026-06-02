import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, Card } from "@/components/portal-shell";
import { tiers, tierRequirements, user } from "@/lib/mock";

export const Route = createFileRoute("/app/tier")({
  head: () => ({ meta: [{ title: "Tier Progress — Learn2Earn" }] }),
  component: Tier,
});

function Tier() {
  const currentIdx = tiers.findIndex((t) => t.key === user.tier);
  return (
    <PortalShell title="Tier Progress" subtitle="Every tier opens a new chapter of recognition and reward.">
      <div className="grid md:grid-cols-3 gap-5">
        {tiers.map((t, i) => {
          const isCurrent = i === currentIdx;
          const isLocked = i > currentIdx;
          const reqs = tierRequirements[t.key as keyof typeof tierRequirements];
          return (
            <Card key={t.key} className={`p-7 relative overflow-hidden ${isCurrent ? "ring-2 ring-amber shadow-lift" : ""} ${isLocked ? "opacity-70" : ""}`}>
              {isCurrent && <div className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-bold text-plum bg-amber px-2 py-1 rounded-full">Current</div>}
              <div className={`text-[11px] uppercase tracking-[0.18em] font-bold ${isLocked ? "text-muted-foreground" : "text-primary"}`}>Tier {t.n}</div>
              <div className={`mt-2 text-2xl font-bold ${isLocked ? "text-muted-foreground" : "text-foreground"}`}>{t.key}</div>

              <div className="mt-5 space-y-3">
                {reqs.map((r) => (
                  <div key={r.label}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-le-text">{r.label}</span>
                      <span className="font-bold text-foreground num">{r.current}/{r.target}</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-secondary overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: `${(r.current / r.target) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-secondary">
                <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Reward</div>
                <div className="mt-1 font-bold text-foreground">{t.reward}</div>
                <ul className="mt-3 space-y-1 text-sm text-le-text">
                  {t.perks.map((p) => <li key={p} className="flex gap-2"><span className="text-primary">✓</span>{p}</li>)}
                </ul>
              </div>
            </Card>
          );
        })}
      </div>

      <Card className="mt-6 p-7">
        <h3 className="font-bold text-foreground">Your tier journey</h3>
        <ol className="mt-4 relative border-l-2 border-border ml-3 space-y-6">
          <li className="pl-6 relative"><span className="absolute -left-[9px] h-4 w-4 rounded-full bg-primary" /><div className="font-semibold text-foreground">Joined Learn2Earn Ambassadors</div><div className="text-xs text-muted-foreground">Mar 14, 2026</div></li>
          <li className="pl-6 relative"><span className="absolute -left-[9px] h-4 w-4 rounded-full bg-amber" /><div className="font-semibold text-foreground">Promoted to Advocate</div><div className="text-xs text-muted-foreground">Apr 02, 2026 · ₦5,000 bonus paid</div></li>
          <li className="pl-6 relative"><span className="absolute -left-[9px] h-4 w-4 rounded-full bg-secondary border-2 border-border" /><div className="font-semibold text-muted-foreground">Champion — 3 referrals away</div><div className="text-xs text-muted-foreground">In progress</div></li>
        </ol>
      </Card>
    </PortalShell>
  );
}
