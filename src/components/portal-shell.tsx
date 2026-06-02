import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { LogoArea } from "./logo";

const nav = [
  { to: "/app", label: "Dashboard", icon: "▦" },
  { to: "/app/referrals", label: "Referrals", icon: "⇄" },
  { to: "/app/tier", label: "Tier", icon: "◈" },
  { to: "/app/rewards", label: "Rewards", icon: "₦" },
  { to: "/app/leaderboard", label: "Leaderboard", icon: "↑" },
  { to: "/app/learn", label: "Learn", icon: "◉" },
  { to: "/app/community", label: "Community", icon: "◐" },
  { to: "/app/events", label: "Events", icon: "◊" },
  { to: "/app/notifications", label: "Inbox", icon: "✦" },
  { to: "/app/settings", label: "Settings", icon: "⚙" },
];

export function PortalShell({ children, title, subtitle, right }: { children: ReactNode; title?: string; subtitle?: string; right?: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen flex bg-surface">
      <aside className="hidden lg:flex w-[240px] shrink-0 flex-col border-r border-border bg-white">
        <div className="h-16 px-6 flex items-center">
          <LogoArea />
        </div>
        <nav className="flex-1 p-3 space-y-0.5">
          {nav.map((n) => {
            const active = n.to === "/app" ? path === "/app" : path.startsWith(n.to);
            return (
              <Link key={n.to} to={n.to} className={`relative flex items-center gap-3 px-3 h-10 rounded-lg text-sm transition ${active ? "bg-accent text-primary font-semibold" : "text-le-text hover:bg-secondary"}`}>
                {active && <span className="absolute left-0 top-2 bottom-2 w-[3px] rounded-r bg-primary" />}
                <span className={`w-5 text-center ${active ? "text-primary" : "text-muted-foreground"}`}>{n.icon}</span>
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-3 border-t border-border">
          <Link to="/admin" className="flex items-center gap-3 px-3 h-10 rounded-lg text-sm text-muted-foreground hover:bg-secondary">
            <span className="w-5 text-center">⌘</span> Admin
          </Link>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="h-16 border-b border-border bg-white/80 backdrop-blur sticky top-0 z-30 flex items-center px-6 gap-4">
          <div className="flex-1 max-w-md">
            <div className="h-9 rounded-lg bg-secondary px-3 flex items-center gap-2 text-sm text-muted-foreground">
              <span>⌕</span> Search referrals, missions…
              <kbd className="ml-auto text-[10px] bg-white border border-border px-1.5 py-0.5 rounded">⌘K</kbd>
            </div>
          </div>
          <button className="relative h-9 w-9 grid place-items-center rounded-lg hover:bg-secondary">
            <span>✦</span>
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-amber" />
          </button>
          <Link to="/app/profile" className="h-9 pl-1 pr-3 rounded-full bg-secondary hover:bg-accent flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-plum-gradient text-white grid place-items-center text-xs font-bold">AO</span>
            <span className="text-sm font-medium text-foreground hidden sm:inline">Amaka</span>
          </Link>
        </header>

        {(title || right) && (
          <div className="px-6 lg:px-10 pt-8 pb-2 flex items-end justify-between gap-4">
            <div>
              {title && <h1 className="text-[28px] leading-9 font-bold text-foreground">{title}</h1>}
              {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
            </div>
            {right}
          </div>
        )}

        <main className="px-6 lg:px-10 pb-16 pt-6 flex-1">{children}</main>
      </div>
    </div>
  );
}

export function StatCard({ label, value, delta, tone = "muted" }: { label: string; value: string | number; delta?: string; tone?: string }) {
  const toneClass: Record<string, string> = {
    muted: "text-muted-foreground",
    primary: "text-primary",
    plum: "text-plum",
    amber: "text-amber",
  };
  return (
    <div className="rounded-2xl bg-white border border-border p-5 shadow-card hover:shadow-lift transition">
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{label}</div>
      <div className="mt-2 text-[32px] leading-10 font-bold text-foreground num">{value}</div>
      {delta && <div className={`text-xs mt-1 num ${toneClass[tone]}`}>{delta}</div>}
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl bg-white border border-border shadow-card ${className}`}>{children}</div>;
}

export function TierChip({ tier, size = "md" }: { tier: string; size?: "sm" | "md" }) {
  const map: Record<string, string> = {
    Advocate: "bg-[color:var(--tier-advocate)]/10 text-[color:var(--tier-advocate)] border-[color:var(--tier-advocate)]/20",
    Champion: "bg-[color:var(--tier-champion)]/10 text-[color:var(--tier-champion)] border-[color:var(--tier-champion)]/20",
    Ambassador: "bg-plum/10 text-plum border-plum/20",
  };
  const s = size === "sm" ? "text-[10px] px-2 h-5" : "text-[11px] px-2.5 h-6";
  return <span className={`inline-flex items-center gap-1 font-semibold uppercase tracking-wider rounded-full border ${s} ${map[tier] || ""}`}>● {tier}</span>;
}

export function Button({ children, variant = "primary", className = "", as: As = "button", ...rest }: any) {
  const v: Record<string, string> = {
    primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-card",
    secondary: "bg-white text-plum border border-border hover:bg-secondary",
    ghost: "text-primary hover:bg-accent",
    plum: "bg-plum text-white hover:bg-deep-plum",
    amber: "bg-amber text-plum hover:brightness-105 font-semibold",
  };
  return (
    <As className={`inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl text-sm font-semibold transition ${v[variant]} ${className}`} {...rest}>
      {children}
    </As>
  );
}
