import { createFileRoute, Link } from "@tanstack/react-router";
import {
  PortalShell,
  Card,
  StatCard,
  TierChip,
  Button,
} from "@/components/portal-shell";
import {
  user,
  pipelineStats,
  activity,
  missions,
  tierRequirements,
  earnings,
} from "@/lib/mock";

export const Route = createFileRoute("/app/")({
  head: () => ({ meta: [{ title: "Dashboard — Learn2Earn Ambassadors" }] }),
  component: Dashboard,
});

function Dashboard() {
  const req = tierRequirements.Champion[0];
  const pct = Math.round((req.current / req.target) * 100);
  return (
    <PortalShell>
      {/* Hero strip */}
      <div className="rounded-3xl bg-primary noise relative overflow-hidden p-7 lg:p-9 text-white">
        <div className="absolute -top-20 -right-10 h-[280px] w-[280px] rounded-full bg-primary/30 blur-3xl" />
        <div className="relative flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex-1 text-white">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold text-white">
                Good morning, {user.name.split(" ")[0]}
              </h2>
              <TierChip tier={user.tier} />
            </div>
            <p className="mt-2 text-white/70">
              You're{" "}
              <span className="text-amber font-semibold">
                {req.target - req.current} referrals
              </span>{" "}
              from Champion. One conversation away from a stipend.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/15 rounded-2xl p-2 pl-4">
            <span className="text-xs uppercase tracking-wider text-white/60">
              Your link
            </span>
            <code className="text-sm text-amber font-mono">
              {user.referralCode}
            </code>
            <button className="h-9 px-3 rounded-xl bg-white text-plum text-xs font-bold hover:brightness-105">
              Copy
            </button>
            <button className="h-9 px-3 rounded-xl bg-amber text-plum text-xs font-bold hover:brightness-105">
              Share →
            </button>
          </div>
        </div>
      </div>

      {/* Pipeline */}
      <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {pipelineStats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-6">
        {/* Tier progress */}
        <Card className="p-7 lg:col-span-2">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                Tier progress
              </div>
              <h3 className="mt-1 text-xl font-bold text-foreground">
                Road to Champion
              </h3>
            </div>
            <Link to="/app/tier" className="text-sm text-primary font-semibold">
              See details →
            </Link>
          </div>
          <div className="mt-6 flex items-center gap-8">
            <div className="relative h-[160px] w-[160px] shrink-0">
              <svg viewBox="0 0 100 100" className="rotate-[-90deg]">
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#EEF1F4"
                  strokeWidth="9"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="url(#g)"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeDasharray={`${(pct / 100) * 276} 276`}
                />
                <defs>
                  <linearGradient id="g" x1="0" x2="1">
                    <stop offset="0" stopColor="#1491ff" />
                    <stop offset="1" stopColor="#5cb6ff" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="text-3xl font-bold text-foreground num">
                    {req.current}
                    <span className="text-muted-foreground text-lg">
                      /{req.target}
                    </span>
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">
                    to Champion
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-foreground">
                Requirement
              </div>
              <div className="text-sm text-le-text mt-1">{req.label}</div>
              <div className="mt-4 grid grid-cols-10 gap-1">
                {Array.from({ length: req.target }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full ${i < req.current ? "bg-primary" : "bg-secondary"}`}
                  />
                ))}
              </div>
              <div className="mt-6 p-4 rounded-xl bg-amber/10 border border-amber/30">
                <div className="text-xs uppercase tracking-wider font-bold text-plum">
                  Next reward
                </div>
                <div className="text-sm text-foreground font-semibold mt-1">
                  ₦10,000 monthly stipend + branded merch kit
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* This week's mission */}
        <Card className="p-7 !bg-primary text-white noise relative overflow-hidden">
          <div className="relative">
            <div className="text-xs uppercase tracking-wider text-amber font-bold ">
              This week's mission
            </div>
            <h3 className="mt-2 text-xl font-bold text-white">{missions[1].title}</h3>
            <p className="mt-2 text-sm text-white/70">{missions[1].desc}</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-amber-300 text-sm font-bold">
                {missions[1].reward}
              </span>
              <button className="h-10 px-4 rounded-xl bg-amber text-plum font-bold text-sm">
                Accept →
              </button>
            </div>
            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="text-xs text-white/60 mb-2">Other missions</div>
              {missions
                .filter((_, i) => i !== 1)
                .map((m) => (
                  <div
                    key={m.title}
                    className="flex items-center justify-between py-1.5"
                  >
                    <span className="text-sm">{m.title}</span>
                    <span className="text-xs text-amber font-bold">
                      {m.reward}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-6 grid lg:grid-cols-2 gap-6">
        {/* Earnings */}
        <Card className="p-7">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">
                Earnings
              </div>
              <div className="mt-1 text-3xl font-bold text-foreground num">
                ₦{earnings.total.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                Next payout · {earnings.nextPayout}
              </div>
            </div>
            <Link
              to="/app/rewards"
              className="text-sm text-primary font-semibold"
            >
              View →
            </Link>
          </div>
          <svg viewBox="0 0 300 80" className="mt-5 w-full h-20">
            <defs>
              <linearGradient id="ge" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#1491ff" stopOpacity="0.3" />
                <stop offset="1" stopColor="#1491ff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,70 L30,60 L60,55 L90,45 L120,48 L150,35 L180,30 L210,25 L240,18 L270,15 L300,10 L300,80 L0,80 Z"
              fill="url(#ge)"
            />
            <path
              d="M0,70 L30,60 L60,55 L90,45 L120,48 L150,35 L180,30 L210,25 L240,18 L270,15 L300,10"
              fill="none"
              stroke="#1491ff"
              strokeWidth="2"
            />
          </svg>
        </Card>

        {/* Recent activity */}
        <Card className="p-7">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-foreground">
              Recent activity
            </h3>
            <Link
              to="/app/notifications"
              className="text-sm text-primary font-semibold"
            >
              All →
            </Link>
          </div>
          <ul className="mt-4 space-y-3">
            {activity.map((a, i) => (
              <li key={i} className="flex gap-3">
                <span className="h-9 w-9 rounded-xl bg-secondary grid place-items-center text-base">
                  {a.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-foreground">{a.text}</div>
                  <div className="text-xs text-muted-foreground">{a.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Community pulse */}
      <Card className="mt-6 p-7">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-foreground">
            Community pulse
          </h3>
          <Link
            to="/app/community"
            className="text-sm text-primary font-semibold"
          >
            Open community →
          </Link>
        </div>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {[
            {
              who: "Adaeze N.",
              t: "Sharing the WhatsApp script that converts.",
              tier: "Ambassador",
            },
            {
              who: "Kofi A.",
              t: "Hosting an Accra Q&A tomorrow — RSVP inside.",
              tier: "Ambassador",
            },
            {
              who: "Sade O.",
              t: "How do you answer 'is this legit?'",
              tier: "Champion",
            },
          ].map((p) => (
            <div
              key={p.who}
              className="rounded-xl border border-border p-4 hover:bg-secondary transition"
            >
              <div className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-plum-gradient text-white text-[10px] grid place-items-center font-bold">
                  {p.who[0]}
                </span>
                <span className="text-xs font-semibold text-foreground">
                  {p.who}
                </span>
                <TierChip tier={p.tier} size="sm" />
              </div>
              <p className="mt-2 text-sm text-le-text">{p.t}</p>
            </div>
          ))}
        </div>
      </Card>
    </PortalShell>
  );
}
