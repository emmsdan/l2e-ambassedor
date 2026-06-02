import { createFileRoute, Link } from "@tanstack/react-router";
import { MarketingShell } from "@/components/marketing-shell";
import { tiers } from "@/lib/mock";
import { clsx } from "clsx";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "How the Ambassador Program works — Learn2Earn" },
      {
        name: "description",
        content:
          "Three tiers. Real stipends. Real recognition. Here's how the Learn2Earn Ambassador program works.",
      },
    ],
  }),
  component: Program,
});

function Program() {
  return (
    <MarketingShell>
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.18em] text-amber font-bold">
            The program
          </div>
          <h1 className="mt-3 text-[52px] leading-tight font-bold text-white">
            A leadership pipeline,
            <br />
            not a referral program.
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            Ambassadors aren't affiliates. They're early architects of Africa's
            AI workforce — with status, stipend, and access to prove it.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((t, idx) => (
              <div
                key={t.key}
                className={clsx(
                  `rounded-2xl p-7 border shadow-card bg-white border-border`,
                  {
                    "bg-plum-gradient text-white border-plum": idx === 2,
                    "!bg-tier-champion/10 border-border": idx == 1,
                  },
                )}
              >
                <div
                  className={`text-[11px] uppercase tracking-[0.18em] font-bold ${idx === 2 ? "text-amber" : "text-primary"}`}
                >
                  Tier {t.n}
                </div>
                <div
                  className={`mt-2 text-3xl font-bold ${idx === 2 ? "text-white" : "text-foreground"}`}
                >
                  {t.key}
                </div>
                <div
                  className={`mt-5 text-xs uppercase tracking-wider ${idx === 2 ? "text-white/60" : "text-muted-foreground"}`}
                >
                  Requirements
                </div>
                <div
                  className={`mt-1 text-sm ${idx === 2 ? "text-white/90" : "text-foreground"}`}
                >
                  {t.req}
                </div>
                <div
                  className={`mt-5 text-xs uppercase tracking-wider ${idx === 2 ? "text-white/60" : "text-muted-foreground"}`}
                >
                  Reward
                </div>
                <div
                  className={`mt-1 text-lg font-bold ${idx === 2 ? "text-gradient-amber" : "text-foreground"}`}
                >
                  {t.reward}
                </div>
                <ul className="mt-5 space-y-2 text-sm">
                  {t.perks.map((p) => (
                    <li
                      key={p}
                      className={`flex gap-2 ${idx === 2 ? "text-white/80" : "text-le-text"}`}
                    >
                      <span
                        className={idx === 2 ? "text-amber" : "text-primary"}
                      >
                        ✓
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground">
            The 6-step loop
          </h2>
          <div className="mt-8 space-y-3">
            {[
              "Apply & get approved",
              "Generate your unique referral link",
              "Refer ambitious learners",
              "Track their journey in your dashboard",
              "Earn bonuses, stipends, recognition",
              "Advance to the next tier",
            ].map((s, i) => (
              <div
                key={s}
                className="flex items-center gap-4 p-5 rounded-xl bg-white border border-border"
              >
                <div className="h-10 w-10 rounded-xl bg-primary text-white grid place-items-center font-bold">
                  {i + 1}
                </div>
                <div className="font-semibold text-foreground">{s}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/apply"
              className="inline-flex h-12 px-7 rounded-xl bg-primary text-white font-semibold items-center shadow-lift hover:bg-primary-hover"
            >
              Apply for the 2026 cohort →
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
