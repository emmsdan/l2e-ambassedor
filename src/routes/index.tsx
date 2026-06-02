import { createFileRoute, Link } from "@tanstack/react-router";
import { MarketingShell } from "@/components/marketing-shell";
import { tiers } from "@/lib/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learn2Earn Ambassadors — Build Africa's AI workforce" },
      {
        name: "description",
        content:
          "Get paid and recognized for growing Africa's most ambitious AI workforce community. Apply to become a Learn2Earn Ambassador.",
      },
      { property: "og:title", content: "Learn2Earn Ambassadors" },
      {
        property: "og:description",
        content:
          "Get paid and recognized for growing Africa's most ambitious AI workforce community.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <MarketingShell>
      {/* Hero */}
      <section className="relative aow-hidden bg-hero-gradient noise text-white">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-amber/10 blur-3xl" />
        <div className="relative max-w-[1240px] mx-auto px-6 pt-20 pb-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-amber bg-amber/10 border border-amber/20 px-3 py-1.5 rounded-full">
              ● 2026 Cohort · Applications open
            </span>
            <h1 className="mt-6 text-[44px] sm:text-[58px] leading-[1.05] font-bold text-white tracking-tight">
              Build Africa's{" "}
              <span className="text-gradient-amber">AI workforce.</span>
              <br />
              Get paid to lead the movement.
            </h1>
            <p className="mt-6 text-lg text-white/70 max-w-xl">
              Become a Learn2Earn Ambassador. Refer ambitious learners, earn
              monthly stipends, unlock leadership access — and put your name on
              Africa's tech future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/apply"
                className="inline-flex h-12 px-6 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold items-center shadow-lift"
              >
                Apply for the 2026 cohort →
              </Link>
              <Link
                to="/program"
                className="inline-flex h-12 px-6 rounded-xl border border-white/20 hover:bg-white/5 text-white font-semibold items-center"
              >
                How it works
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["AO", "TB", "SO", "KA", "WM"].map((i, idx) => (
                  <span
                    key={i}
                    className="h-8 w-8 rounded-full bg-white/10 border-2 border-[#1d0b21] grid place-items-center text-[10px] font-bold text-white"
                    style={{
                      background: [
                        "#1491ff",
                        "#28112b",
                        "#f5ae2e",
                        "#3a1740",
                        "#5cb6ff",
                      ][idx],
                    }}
                  >
                    {i}
                  </span>
                ))}
              </div>
              <div className="text-sm text-white/70">
                <span className="text-white font-semibold">
                  1,240 ambassadors
                </span>{" "}
                in <span className="text-white font-semibold">47 cities</span> —
                and growing weekly.
              </div>
            </div>
          </div>

          {/* Right: stacked ambassador cards */}
          <div className="lg:col-span-5 relative h-[440px]">
            {[
              {
                name: "Adaeze N.",
                city: "Lagos",
                tier: "Ambassador",
                color: "#28112b",
                offset: "top-0 right-0 rotate-[3deg]",
              },
              {
                name: "Kofi A.",
                city: "Accra",
                tier: "Champion",
                color: "#1491ff",
                offset: "top-32 right-16 -rotate-[2deg]",
              },
              {
                name: "Wanjiku M.",
                city: "Nairobi",
                tier: "Advocate",
                color: "#f5ae2e",
                offset: "top-64 right-0 rotate-[1.5deg]",
              },
            ].map((c) => (
              <div
                key={c.name}
                className={`absolute ${c.offset} w-[280px] rounded-2xl bg-white p-5 shadow-2xl`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-12 w-12 rounded-xl grid place-items-center text-white font-bold"
                    style={{ background: c.color }}
                  >
                    {c.name[0]}
                  </div>
                  <div className="leading-tight">
                    <div className="text-foreground font-bold text-sm">
                      {c.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {c.city}
                    </div>
                  </div>
                  <div className="ml-auto text-[10px] uppercase tracking-wider font-bold text-plum bg-amber/20 px-2 py-1 rounded-full">
                    {c.tier}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-foreground font-bold num">12</div>
                    <div className="text-[10px] text-muted-foreground uppercase">
                      Admitted
                    </div>
                  </div>
                  <div>
                    <div className="text-foreground font-bold num">34</div>
                    <div className="text-[10px] text-muted-foreground uppercase">
                      Trials
                    </div>
                  </div>
                  <div>
                    <div className="text-foreground font-bold num">68</div>
                    <div className="text-[10px] text-muted-foreground uppercase">
                      Invited
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* stat strip */}
        <div className="absolute -bottom-0 w-full flex items-center max-w-[1240px] mx-auto px-6 -mb-12 justify-center">
          <div className="bg-white rounded-2xl shadow-2xl border border-border p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "₦18M", l: "Paid to ambassadors" },
              { v: "12,400", l: "Learners referred" },
              { v: "47", l: "Cities active" },
              { v: "94%", l: "Would refer again" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-[28px] font-bold text-foreground num">
                  {s.v}
                </div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface pt-28 pb-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.18em] font-bold text-primary">
              The loop
            </div>
            <h2 className="mt-3 text-[38px] leading-tight font-bold text-foreground">
              A simple loop. Outsized impact.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Every referral is a young African getting closer to a real AI
              career — and every action you take advances your tier.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                t: "Refer",
                d: "Share your unique link with friends, networks, and communities. We give you templates and assets.",
              },
              {
                n: "02",
                t: "Track",
                d: "Watch your pipeline move from Invited → Qualified → Trials → Admitted in your mission control.",
              },
              {
                n: "03",
                t: "Earn",
                d: "Unlock bonuses, monthly stipends, merch, leadership access — and a public ambassador profile.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl bg-white border border-border p-7 shadow-card hover:shadow-lift transition"
              >
                <div className="text-[11px] font-bold text-primary">{s.n}</div>
                <div className="mt-2 text-xl font-bold text-foreground">
                  {s.t}
                </div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier ladder */}
      <section className="bg-white py-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.18em] font-bold text-primary">
                The ladder
              </div>
              <h2 className="mt-3 text-[38px] leading-tight font-bold text-foreground">
                Three tiers. Real recognition.
              </h2>
            </div>
            <Link to="/program" className="text-primary font-semibold text-sm">
              See full program details →
            </Link>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {tiers.map((t, idx) => (
              <div
                key={t.key}
                className={`relative rounded-2xl p-7 border ${idx === 2 ? "bg-plum-gradient text-white border-plum" : "bg-white border-border"} shadow-card`}
              >
                <div
                  className={`text-[11px] uppercase tracking-[0.18em] font-bold ${idx === 2 ? "text-amber" : "text-primary"}`}
                >
                  Tier {t.n}
                </div>
                <div
                  className={`mt-2 text-2xl font-bold ${idx === 2 ? "text-white" : "text-foreground"}`}
                >
                  {t.key}
                </div>
                <div
                  className={`mt-1 text-sm ${idx === 2 ? "text-white/70" : "text-muted-foreground"}`}
                >
                  {t.req}
                </div>
                <div
                  className={`mt-5 text-lg font-bold ${idx === 2 ? "text-gradient-amber" : "text-foreground"}`}
                >
                  {t.reward}
                </div>
                <ul className="mt-5 space-y-2 text-sm">
                  {t.perks.map((p) => (
                    <li
                      key={p}
                      className={`flex items-center gap-2 ${idx === 2 ? "text-white/80" : "text-le-text"}`}
                    >
                      <span
                        className={idx === 2 ? "text-amber" : "text-primary"}
                      >
                        ✓
                      </span>{" "}
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlights */}
      <section className="bg-surface py-20">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-primary">
            Ambassador spotlights
          </div>
          <h2 className="mt-3 text-[38px] font-bold text-foreground">
            Voices from the movement
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                q: "Three months in, I've helped 14 friends start their AI journey. The stipend pays my data — but the impact pays my soul.",
                n: "Adaeze N.",
                r: "Ambassador · Lagos",
              },
              {
                q: "Learn2Earn gave me a community of high-agency peers across the continent. It's the LinkedIn line I'm proudest of.",
                n: "Kofi A.",
                r: "Champion · Accra",
              },
              {
                q: "I used to share opportunities for free. Now I'm recognized, mentored, and earning while doing what I already did.",
                n: "Wanjiku M.",
                r: "Advocate · Nairobi",
              },
            ].map((s) => (
              <figure
                key={s.n}
                className="rounded-2xl bg-white border border-border p-7 shadow-card"
              >
                <div className="text-amber text-2xl">"</div>
                <blockquote className="mt-2 text-[15px] leading-relaxed text-foreground">
                  {s.q}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-plum-gradient text-white grid place-items-center text-xs font-bold">
                    {s.n[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      {s.n}
                    </div>
                    <div className="text-xs text-muted-foreground">{s.r}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary text-white py-20 relative overflow-hidden noise">
        <div className="absolute -top-20 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl" />
        <div className="relative max-w-[900px] mx-auto px-6 text-center">
          <h2 className="text-[44px] leading-tight font-bold text-white">
            Africa's next decade will be built by Africans.
            <br />
            Will you be one of them?
          </h2>
          <p className="mt-5 text-white/70 max-w-2xl mx-auto">
            The 2026 cohort closes when we hit 2,000 ambassadors. Applications
            take 4 minutes.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link
              to="/apply"
              className="inline-flex h-12 px-7 rounded-xl bg-amber text-plum font-bold items-center hover:brightness-105 shadow-lift"
            >
              Apply now
            </Link>
            <Link
              to="/faq"
              className="inline-flex h-12 px-7 rounded-xl border border-white/20 hover:bg-white/5 font-semibold items-center"
            >
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
