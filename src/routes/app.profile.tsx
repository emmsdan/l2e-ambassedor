import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, Card, TierChip } from "@/components/portal-shell";
import { user, badges, pipelineStats } from "@/lib/mock";

export const Route = createFileRoute("/app/profile")({
  head: () => ({ meta: [{ title: "Profile — Learn2Earn" }] }),
  component: Profile,
});

function Profile() {
  return (
    <PortalShell>
      <Card className="overflow-hidden">
        <div className="bg-plum-gradient noise h-40 relative" />
        <div className="px-7 pb-7 -mt-12">
          <div className="flex items-end gap-5 flex-wrap">
            <div className="h-24 w-24 rounded-2xl bg-amber text-plum grid place-items-center text-3xl font-bold ring-4 ring-white">{user.avatar}</div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold text-foreground">{user.name}</h1>
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                <TierChip tier={user.tier} />
                <span className="text-sm text-muted-foreground">{user.city} · Joined {user.joined}</span>
              </div>
            </div>
            <button className="h-10 px-4 rounded-xl border border-border bg-white text-sm font-semibold">Edit profile</button>
          </div>
          <p className="mt-5 max-w-2xl text-le-text">Building Africa's AI workforce, one referral at a time. Story-led, community-rooted, here for the long game.</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {pipelineStats.map((s) => (
              <div key={s.label} className="rounded-xl bg-secondary p-4">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">{s.label}</div>
                <div className="text-xl font-bold text-foreground num mt-1">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="mt-6 p-7">
        <h3 className="font-bold text-foreground">Badges earned</h3>
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-3">
          {badges.filter(b=>b.earned).map((b) => (
            <div key={b.name} className="rounded-xl bg-amber/10 border border-amber/30 p-4 text-center">
              <div className="text-3xl">{b.icon}</div>
              <div className="mt-2 text-xs font-bold text-foreground">{b.name}</div>
            </div>
          ))}
        </div>
      </Card>
    </PortalShell>
  );
}
