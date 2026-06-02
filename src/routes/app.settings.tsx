import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, Card } from "@/components/portal-shell";

export const Route = createFileRoute("/app/settings")({
  head: () => ({ meta: [{ title: "Settings — Learn2Earn" }] }),
  component: Settings,
});

const prefs = [
  { e: "Referral signed up", inApp: true, email: false, wa: false },
  { e: "Referral passed Selection Game", inApp: true, email: true, wa: true },
  { e: "Referral entered Trials", inApp: true, email: true, wa: false },
  { e: "Referral admitted", inApp: true, email: true, wa: true },
  { e: "Tier promotion", inApp: true, email: true, wa: true },
  { e: "Reward approved / paid", inApp: true, email: true, wa: true },
  { e: "Event invitation", inApp: true, email: true, wa: true },
  { e: "Community reply", inApp: true, email: false, wa: false },
  { e: "Weekly mission digest", inApp: true, email: true, wa: false },
];

function Settings() {
  return (
    <PortalShell title="Settings" subtitle="Tune your profile, payout, and how we reach you.">
      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="p-7">
          <h3 className="font-bold text-foreground">Account</h3>
          <div className="mt-4 space-y-4">
            <Field label="Display name" v="Amaka Okonkwo" />
            <Field label="Handle" v="amaka" />
            <Field label="Email" v="amaka@example.com" />
            <Field label="Phone" v="+234 803 123 4567" />
          </div>
        </Card>

        <Card className="p-7">
          <h3 className="font-bold text-foreground">Payout method</h3>
          <div className="mt-4 p-4 rounded-xl bg-secondary flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary text-white grid place-items-center font-bold">GT</div>
            <div className="flex-1"><div className="text-sm font-semibold text-foreground">GTBank ····6712</div><div className="text-xs text-muted-foreground">Default · NGN</div></div>
            <button className="text-xs font-semibold text-primary">Change</button>
          </div>
          <button className="mt-3 text-sm font-semibold text-primary">+ Add payout method</button>
        </Card>
      </div>

      <Card className="mt-6 p-7">
        <h3 className="font-bold text-foreground">Notification preferences</h3>
        <p className="text-sm text-muted-foreground mt-1">We respect quiet hours in your timezone (10pm – 7am).</p>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="text-left text-xs uppercase tracking-wider text-muted-foreground">
              <th className="py-3 font-semibold">Event</th><th className="font-semibold">In-app</th><th className="font-semibold">Email</th><th className="font-semibold">WhatsApp</th>
            </tr></thead>
            <tbody>
              {prefs.map((p) => (
                <tr key={p.e} className="border-t border-border">
                  <td className="py-3 text-foreground">{p.e}</td>
                  <td><Toggle on={p.inApp} /></td>
                  <td><Toggle on={p.email} /></td>
                  <td><Toggle on={p.wa} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </PortalShell>
  );
}

function Field({ label, v }: { label: string; v: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground font-bold">{label}</label>
      <input defaultValue={v} className="mt-1.5 w-full h-11 rounded-xl border border-border bg-white px-4 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10" />
    </div>
  );
}
function Toggle({ on }: { on: boolean }) {
  return <span className={`inline-flex h-6 w-11 rounded-full p-0.5 transition ${on ? "bg-primary" : "bg-secondary"}`}><span className={`h-5 w-5 rounded-full bg-white shadow transition ${on ? "translate-x-5" : ""}`} /></span>;
}
