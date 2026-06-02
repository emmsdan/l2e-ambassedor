import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, Card, TierChip } from "@/components/portal-shell";
import { referrals, user } from "@/lib/mock";

export const Route = createFileRoute("/app/referrals")({
  head: () => ({ meta: [{ title: "Referrals — Learn2Earn" }] }),
  component: Referrals,
});

const stages = [
  { key: "Invited", color: "bg-muted-foreground" },
  { key: "Qualified", color: "bg-primary" },
  { key: "In Trials", color: "bg-plum" },
  { key: "Admitted", color: "bg-amber" },
];

function Referrals() {
  return (
    <PortalShell title="Referrals" subtitle="Your pipeline. Your impact, made visible.">
      <Card className="p-5 flex flex-col lg:flex-row gap-3 items-stretch lg:items-center">
        <div className="flex-1 flex items-center gap-3 bg-secondary rounded-xl px-4 h-12">
          <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Link</span>
          <code className="text-sm text-foreground truncate">{user.referralUrl}</code>
        </div>
        <div className="flex gap-2">
          <button className="h-12 px-4 rounded-xl bg-white border border-border text-sm font-semibold text-foreground hover:bg-secondary">Copy</button>
          <button className="h-12 px-4 rounded-xl bg-white border border-border text-sm font-semibold text-foreground hover:bg-secondary">QR</button>
          <button className="h-12 px-4 rounded-xl bg-[#25D366] text-white text-sm font-semibold">WhatsApp</button>
          <button className="h-12 px-4 rounded-xl bg-foreground text-white text-sm font-semibold">X / Twitter</button>
          <button className="h-12 px-4 rounded-xl bg-primary text-white text-sm font-semibold">Share →</button>
        </div>
      </Card>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stages.map((s) => {
          const items = referrals.filter((r) => r.stage === s.key);
          return (
            <div key={s.key} className="rounded-2xl bg-white border border-border p-4 min-h-[400px]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${s.color}`} />
                  <span className="text-sm font-bold text-foreground">{s.key}</span>
                </div>
                <span className="text-xs text-muted-foreground font-semibold num">{items.length}</span>
              </div>
              <div className="space-y-2">
                {items.map((r) => (
                  <div key={r.id} className="rounded-xl border border-border p-3 hover:border-primary hover:shadow-card transition cursor-pointer">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-secondary grid place-items-center text-xs font-bold text-plum">{r.name[0]}</div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-foreground truncate">{r.name}</div>
                        <div className="text-[11px] text-muted-foreground">{r.city} · {r.days}d</div>
                      </div>
                      <div className={`h-6 w-1 rounded-full ${s.color}`} />
                    </div>
                  </div>
                ))}
                {items.length === 0 && <div className="text-xs text-muted-foreground p-3 italic">No referrals here yet</div>}
              </div>
            </div>
          );
        })}
      </div>
    </PortalShell>
  );
}
