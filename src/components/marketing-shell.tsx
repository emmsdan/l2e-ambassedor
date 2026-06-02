import { Link, useRouterState } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { LogoArea } from "./logo";

export function MarketingShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const navItems = [
    { to: "/program", label: "Program" },
    { to: "/ambassadors", label: "Ambassadors" },
    { to: "/faq", label: "FAQ" },
  ];
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-border">
        <div className="max-w-[1240px] mx-auto px-6 h-16 flex items-center gap-6">
          <LogoArea />
          <nav className="hidden md:flex items-center gap-1 ml-4">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 h-9 rounded-lg text-sm flex items-center ${path.startsWith(n.to) ? "text-plum font-semibold" : "text-muted-foreground hover:text-foreground"}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Link
              to="/app"
              className="hidden sm:inline-flex h-9 px-3 rounded-lg text-sm font-medium text-plum hover:bg-secondary items-center"
            >
              Sign in
            </Link>
            <Link
              to="/apply"
              className="inline-flex h-10 px-4 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-hover items-center shadow-card"
            >
              Apply now →
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-border bg-surface">
        <div className="max-w-[1240px] mx-auto px-6 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-2">
            <LogoArea />
            <p className="mt-3 text-muted-foreground max-w-md">
              Helping build Africa's AI workforce — one referral, one learner,
              one ambassador at a time.
            </p>
          </div>
          <div>
            <div className="text-foreground font-semibold mb-2">Program</div>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <Link to="/program">How it works</Link>
              </li>
              <li>
                <Link to="/ambassadors">Ambassadors</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-foreground font-semibold mb-2">
              Get involved
            </div>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <Link to="/apply">Apply</Link>
              </li>
              <li>
                <Link to="/app">Ambassador portal</Link>
              </li>
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="max-w-[1240px] mx-auto px-6 py-5 text-xs text-muted-foreground flex justify-between">
            <span>© 2026 Learn2Earn. Built across Africa.</span>
            <span>Lagos · Accra · Nairobi · Kigali · Cape Town</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
