import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { LogoArea } from "./logo";

const nav = [
  { to: "/admin", label: "Overview" },
  { to: "/admin/applications", label: "Applications" },
  { to: "/admin/ambassadors", label: "Ambassadors" },
  { to: "/admin/referrals", label: "Referrals" },
  { to: "/admin/rewards", label: "Rewards" },
  { to: "/admin/content", label: "Content" },
  { to: "/admin/reports", label: "Reports" },
];

export function AdminShell({
  children,
  title,
  subtitle,
  right,
}: {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  right?: ReactNode;
}) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen !text-black">
      <header className="border-b border-white/10 bg-primary text-white backdrop-blur sticky top-0 z-30">
        <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center gap-8">
          <LogoArea variant="white" />
          <nav className="flex items-center gap-1">
            {nav.map((n) => {
              const active =
                n.to === "/admin" ? path === "/admin" : path.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`px-3 h-9 text-sm rounded-lg flex items-center transition ${active ? "bg-white/10 text-white font-semibold" : "text-white/90 hover:text-white hover:bg-white/5"}`}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <Link to="/app" className="text-xs text-white/60 hover:text-white">
              ← Ambassador view
            </Link>
            <span className="h-8 w-8 rounded-full bg-amber/20 text-amber grid place-items-center text-xs font-bold">
              SO
            </span>
          </div>
        </div>
      </header>

      {(title || right) && (
        <div className="max-w-[1400px] mx-auto px-8 pt-10 pb-4 flex items-end justify-between gap-4">
          <div>
            {title && (
              <h1 className="text-[28px] font-bold text-white">{title}</h1>
            )}
            {subtitle && (
              <p className="text-sm text-white/60 mt-1">{subtitle}</p>
            )}
          </div>
          {right}
        </div>
      )}

      <main className="max-w-[1400px] mx-auto px-8 pb-20 pt-4">{children}</main>
    </div>
  );
}

export function AdminCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 ${className} text-black`}
    >
      {children}
    </div>
  );
}
