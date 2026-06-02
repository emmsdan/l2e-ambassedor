import { createFileRoute } from "@tanstack/react-router";
import { MarketingShell } from "@/components/marketing-shell";

export const Route = createFileRoute("/faq")({
  head: () => ({ meta: [{ title: "FAQ — Learn2Earn Ambassadors" }] }),
  component: FAQ,
});

const qa = [
  { q: "Is this an MLM or affiliate scheme?", a: "No. Ambassadors are vetted, paid stipends, and recognized as leaders. There are no recruit-to-recruit chains — every reward is tied to real learners advancing in Learn2Earn." },
  { q: "How much can I earn?", a: "Tier 1 unlocks a ₦5,000 bonus. Tier 2 unlocks a ₦10,000/month stipend. Tier 3 unlocks a ₦25,000/month retainer. Earnings are tied to real outcomes — not link clicks." },
  { q: "Who can apply?", a: "Anyone 18+ living in or from Africa who genuinely wants to help others build AI careers. We prioritize fit and story over follower counts." },
  { q: "How long does review take?", a: "Most applications get a decision within 5 working days. You can track yours from the application status page." },
  { q: "How do I get paid?", a: "Stipends and bonuses are paid monthly via bank transfer or mobile money, in your local currency where possible." },
  { q: "What if my referral drops out?", a: "Rewards are tied to milestones, not just signups. Your referral's progress is what counts — and we track it transparently in your dashboard." },
];

function FAQ() {
  return (
    <MarketingShell>
      <section className="bg-surface py-20 min-h-[70vh]">
        <div className="max-w-[760px] mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-primary">FAQ</div>
          <h1 className="mt-3 text-[40px] font-bold text-foreground">Straight answers.</h1>
          <div className="mt-8 space-y-3">
            {qa.map((x) => (
              <details key={x.q} className="group rounded-2xl bg-white border border-border p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-foreground">
                  {x.q}
                  <span className="text-primary text-xl group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-sm text-le-text leading-relaxed">{x.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
