import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MarketingShell } from "@/components/marketing-shell";

export const Route = createFileRoute("/apply")({
  head: () => ({ meta: [{ title: "Apply — Learn2Earn Ambassadors" }] }),
  component: Apply,
});

const steps = ["Identity", "Story", "Reach", "Commitment"];

function Apply() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <MarketingShell>
        <section className="min-h-[70vh] grid place-items-center px-6 py-20 bg-surface">
          <div className="max-w-md text-center">
            <div className="text-5xl"></div>
            <h1 className="mt-6 text-3xl font-bold text-foreground">Application received</h1>
            <p className="mt-3 text-muted-foreground">We review every application within 5 working days. You'll hear from us at the email you provided.</p>
            <div className="mt-8 rounded-2xl bg-white border border-border p-5 text-left">
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Tracking ID</div>
              <div className="text-foreground font-mono text-lg mt-1">L2E-2026-08F2A</div>
            </div>
            <Link to="/apply/status/$id" params={{ id: "L2E-2026-08F2A" }} className="inline-flex mt-6 h-11 px-5 rounded-xl bg-primary text-white font-semibold items-center">Track status →</Link>
          </div>
        </section>
      </MarketingShell>
    );
  }

  return (
    <MarketingShell>
      <section className="bg-surface min-h-[80vh] py-16">
        <div className="max-w-[640px] mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-primary">2026 Cohort Application</div>
          <h1 className="mt-2 text-3xl font-bold text-foreground">Join the Ambassadors</h1>

          <div className="mt-8 flex items-center gap-2">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`h-8 w-8 rounded-full grid place-items-center text-xs font-bold ${i < step ? "bg-primary text-white" : i === step ? "bg-amber text-plum" : "bg-secondary text-muted-foreground"}`}>{i+1}</div>
                <div className={`text-xs font-semibold ${i === step ? "text-foreground" : "text-muted-foreground"}`}>{s}</div>
                {i < steps.length - 1 && <div className={`flex-1 h-[2px] ${i < step ? "bg-primary" : "bg-border"}`} />}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-white border border-border p-7 shadow-card">
            {step === 0 && (
              <div className="space-y-5">
                <Field label="Full name" placeholder="Amaka Okonkwo" />
                <Field label="Email" placeholder="you@email.com" type="email" />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Country" placeholder="Nigeria" />
                  <Field label="City" placeholder="Lagos" />
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-5">
                <Field label="Why do you want to be a Learn2Earn Ambassador?" placeholder="Tell us your story in 280 characters…" textarea />
                <Field label="What does building Africa's AI workforce mean to you?" placeholder="One sentence…" />
              </div>
            )}
            {step === 2 && (
              <div className="space-y-5">
                <Field label="Primary channels" placeholder="WhatsApp groups, X/Twitter, LinkedIn, campus club…" />
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Combined audience" placeholder="e.g. 2,500" />
                  <Field label="Active communities" placeholder="e.g. 4" />
                </div>
                <Field label="Link to your most active profile" placeholder="https://" />
              </div>
            )}
            {step === 3 && (
              <div className="space-y-5">
                <Field label="Hours per week you can commit" placeholder="e.g. 5" />
                <label className="flex items-start gap-3 text-sm text-le-text">
                  <input type="checkbox" className="mt-1 accent-[color:var(--primary)]" defaultChecked />
                  <span>I commit to representing Learn2Earn with integrity, only referring people I genuinely believe will benefit, and following community guidelines.</span>
                </label>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between">
              <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="text-sm text-muted-foreground hover:text-foreground disabled:opacity-30">← Back</button>
              {step < steps.length - 1 ? (
                <button onClick={() => setStep(step + 1)} className="h-11 px-5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover">Continue →</button>
              ) : (
                <button onClick={() => setSubmitted(true)} className="h-11 px-5 rounded-xl bg-amber text-plum font-bold hover:brightness-105">Submit application</button>
              )}
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

function Field({ label, placeholder, type = "text", textarea = false }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-foreground mb-1.5">{label}</label>
      {textarea ? (
        <textarea rows={4} placeholder={placeholder} className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none" />
      ) : (
        <input type={type} placeholder={placeholder} className="w-full h-12 rounded-xl border border-border bg-white px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10" />
      )}
    </div>
  );
}
