import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, Card } from "@/components/portal-shell";
import { earnings, badges } from "@/lib/mock";

export const Route = createFileRoute("/app/rewards")({
  head: () => ({ meta: [{ title: "Rewards — Learn2Earn" }] }),
  component: Rewards,
});

function Rewards() {
  return (
    <PortalShell title="Rewards" subtitle="Bonuses, stipends, merch, and the badges you've earned.">
      <div className="grid lg:grid-cols-3 gap-5">
        <Card className="p-7 lg:col-span-2 bg-plum-gradient text-white relative overflow-hidden noise">
          <div className="absolute -top-10 -right-10 h-[200px] w-[200px] rounded-full bg-amber/20 blur-3xl" />
          <div className="relative">
            <div className="text-xs uppercase tracking-wider text-amber font-bold">Total earned</div>
            <div className="mt-2 text-5xl font-bold num">₦{earnings.total.toLocaleString()}</div>
            <div className="mt-1 text-white/70 text-sm">Next payout: <span className="text-amber font-semibold">{earnings.nextPayout}</span> · ₦{earnings.pending.toLocaleString()} pending</div>
            <div className="mt-6 flex gap-2">
              <button className="h-10 px-4 rounded-xl bg-amber text-plum text-sm font-bold">Manage payout method</button>
              <button className="h-10 px-4 rounded-xl border border-white/20 hover:bg-white/5 text-sm font-semibold">Tax info</button>
            </div>
          </div>
        </Card>
        <Card className="p-7">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Merch kit</div>
          <div className="mt-3 aspect-square rounded-xl bg-gradient-to-br from-amber to-plum grid place-items-center text-white">
            <div className="text-center"><div className="text-5xl">🧥</div><div className="text-xs mt-2 uppercase tracking-wider font-bold">Champion Kit</div></div>
          </div>
          <button className="mt-4 w-full h-10 rounded-xl bg-secondary text-muted-foreground text-sm font-semibold cursor-not-allowed">Unlock at Champion</button>
        </Card>
      </div>

      <Card className="mt-6">
        <div className="p-6 border-b border-border"><h3 className="font-bold text-foreground">Payout history</h3></div>
        <table className="w-full text-sm">
          <thead><tr className="text-left text-muted-foreground text-xs uppercase tracking-wider">
            <th className="px-6 py-3 font-semibold">Date</th><th className="font-semibold">Type</th><th className="font-semibold">Amount</th><th className="font-semibold">Status</th><th></th>
          </tr></thead>
          <tbody>
            {earnings.history.map((h, i) => (
              <tr key={i} className="border-t border-border hover:bg-secondary/50">
                <td className="px-6 py-4 text-foreground">{h.date}</td>
                <td className="text-le-text">{h.type}</td>
                <td className="text-foreground font-semibold num">₦{h.amount.toLocaleString()}</td>
                <td><span className="inline-flex items-center gap-1 text-xs font-bold text-success bg-success/10 px-2 py-1 rounded-full">● {h.status}</span></td>
                <td className="px-6 text-right"><button className="text-primary text-xs font-semibold">Receipt</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      <Card className="mt-6 p-7">
        <h3 className="font-bold text-foreground">Badges</h3>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((b) => (
            <div key={b.name} className={`rounded-2xl p-5 text-center border ${b.earned ? "bg-amber/10 border-amber/30" : "bg-secondary border-border opacity-60"}`}>
              <div className={`text-4xl ${b.earned ? "" : "grayscale opacity-60"}`}>{b.icon}</div>
              <div className="mt-3 text-sm font-bold text-foreground">{b.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{b.desc}</div>
            </div>
          ))}
        </div>
      </Card>
    </PortalShell>
  );
}
