import { createFileRoute } from "@tanstack/react-router";
import { MarketingShell } from "@/components/marketing-shell";

export const Route = createFileRoute("/ambassadors")({
  head: () => ({ meta: [{ title: "Ambassadors — Learn2Earn" }] }),
  component: Ambassadors,
});

const featured = [
  {
    n: "Adaeze N.",
    c: "Lagos, NG",
    t: "Ambassador",
    impact: 248,
    story: "Built a 14-person AI study group in Yaba.",
  },
  {
    n: "Kofi A.",
    c: "Accra, GH",
    t: "Ambassador",
    impact: 221,
    story: "Runs weekly YouTube live for the Accra tech crowd.",
  },
  {
    n: "Wanjiku M.",
    c: "Nairobi, KE",
    t: "Champion",
    impact: 198,
    story: "Took 7 friends from intro to admitted.",
  },
  {
    n: "Tobi A.",
    c: "Ibadan, NG",
    t: "Champion",
    impact: 184,
    story: "Founded campus club at UI.",
  },
  {
    n: "Sade O.",
    c: "Lagos, NG",
    t: "Champion",
    impact: 171,
    story: "WhatsApp templates that convert.",
  },
  {
    n: "Emeka U.",
    c: "Enugu, NG",
    t: "Advocate",
    impact: 152,
    story: "Storyteller-in-residence.",
  },
];

function Ambassadors() {
  return (
    <MarketingShell>
      <section className="bg-hero-gradient text-white py-20">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.18em] text-amber font-bold">
            Ambassadors
          </div>
          <h1 className="mt-3 text-[52px] leading-tight font-bold text-white">
            The faces of the movement.
          </h1>
          <p className="mt-5 text-white/80 max-w-2xl">
            Featured ambassadors leading their cities, their campuses, and their
            communities into Africa's AI future.
          </p>
        </div>
      </section>
      <section className="bg-surface py-16">
        <div className="max-w-[1100px] mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((a) => (
            <div
              key={a.n}
              className="rounded-2xl bg-white border border-border p-6 shadow-card hover:shadow-lift transition"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-plum-gradient text-white grid place-items-center font-bold">
                  {a.n[0]}
                </div>
                <div>
                  <div className="font-bold text-foreground">{a.n}</div>
                  <div className="text-xs text-muted-foreground">{a.c}</div>
                </div>
                <span className="ml-auto text-[10px] uppercase tracking-wider font-bold text-plum bg-amber/20 px-2 py-1 rounded-full">
                  {a.t}
                </span>
              </div>
              <p className="mt-4 text-sm text-le-text">"{a.story}"</p>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Impact score</span>
                <span className="font-bold text-foreground num">
                  {a.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MarketingShell>
  );
}
