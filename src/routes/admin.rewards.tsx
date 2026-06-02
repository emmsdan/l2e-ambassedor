import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, AdminCard } from "@/components/admin-shell";

export const Route = createFileRoute("/admin/rewards")({
  head: () => ({ meta: [{ title: "Rewards — Admin" }] }),
  component: () => (
    <AdminShell title="Reward Processing" subtitle="June batch · 218 ambassadors · ₦4.2M total">
      <div className="grid lg:grid-cols-4 gap-4 mb-6">
        {[{l:"Total batch",v:"₦4.2M"},{l:"Ambassadors",v:"218"},{l:"Exceptions",v:"7"},{l:"Status",v:"Awaiting approval"}].map(s=>(
          <AdminCard key={s.l} className="p-5"><div className="text-xs uppercase text-white/50 font-bold">{s.l}</div><div className="text-2xl font-bold text-white mt-2 num">{s.v}</div></AdminCard>
        ))}
      </div>
      <AdminCard className="p-6 flex items-center justify-between">
        <div><div className="font-bold text-white">June 2026 payout batch</div><div className="text-sm text-white/60 mt-1">Generated automatically. Review 7 exceptions before approving.</div></div>
        <div className="flex gap-2"><button className="h-10 px-4 rounded-xl border border-white/20 text-white text-sm font-semibold">Review exceptions (7)</button><button className="h-10 px-4 rounded-xl bg-success text-white text-sm font-bold">Approve batch</button></div>
      </AdminCard>
    </AdminShell>
  ),
});
