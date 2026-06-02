import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, Card, TierChip } from "@/components/portal-shell";
import { community } from "@/lib/mock";

export const Route = createFileRoute("/app/community")({
  head: () => ({ meta: [{ title: "Community — Learn2Earn" }] }),
  component: Community,
});

function Community() {
  return (
    <PortalShell
      title="Community"
      subtitle="Wins, asks, and spotlights from across the continent."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <Card className="p-5">
            <div className="flex gap-3">
              <span className="h-10 w-10 rounded-full bg-plum-gradient text-white grid place-items-center font-bold text-sm">
                AO
              </span>
              <input
                placeholder="Share a win, ask a question, drop a tip…"
                className="flex-1 h-11 rounded-xl bg-secondary px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button className="h-11 px-4 rounded-xl bg-primary text-white text-sm font-semibold">
                Post
              </button>
            </div>
            <div className="mt-3 flex gap-2">
              {["Win ", "Ask ", "Spotlight "].map((t) => (
                <button
                  key={t}
                  className="text-xs px-3 h-7 rounded-full bg-secondary text-le-text font-semibold"
                >
                  {t}
                </button>
              ))}
            </div>
          </Card>

          {community.map((p) => (
            <Card key={p.author} className="p-5">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-plum-gradient text-white grid place-items-center font-bold text-sm">
                  {p.author[0]}
                </span>
                <div>
                  <div className="font-bold text-foreground text-sm">
                    {p.author}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {p.time} ago
                  </div>
                </div>
                <div className="ml-auto">
                  <TierChip tier={p.tier} size="sm" />
                </div>
              </div>
              <p className="mt-3 text-sm text-le-text leading-relaxed">
                {p.text}
              </p>
              <div className="mt-4 pt-3 border-t border-border flex gap-5 text-xs text-muted-foreground">
                <button className="hover:text-primary">{p.likes} Likes</button>
                <button className="hover:text-primary">
                  {p.replies} Replies
                </button>
                <button className="hover:text-primary ml-auto">Share</button>
              </div>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <Card className="p-5">
            <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
              Spotlight
            </div>
            <div className="mt-2 font-bold text-foreground">
              Tunde got admitted!
            </div>
            <p className="mt-1 text-sm text-le-text">
              Amaka's referral Tunde just got admitted to Learn2Earn. That's
              lives changed.
            </p>
          </Card>
          <Card className="p-5">
            <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
              Trending topics
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-foreground">#whatsapp-scripts</span>
                <span className="text-muted-foreground">42</span>
              </li>
              <li className="flex justify-between">
                <span className="text-foreground">#campus-clubs</span>
                <span className="text-muted-foreground">28</span>
              </li>
              <li className="flex justify-between">
                <span className="text-foreground">#objection-handling</span>
                <span className="text-muted-foreground">19</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </PortalShell>
  );
}
