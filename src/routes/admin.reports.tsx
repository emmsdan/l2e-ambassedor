import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, AdminCard } from "@/components/admin-shell";

export const Route = createFileRoute("/admin/reports")({
  head: () => ({ meta: [{ title: "Reports — Admin" }] }),
  component: () => (
    <AdminShell title="Reports" subtitle="Cohorts, retention, geography, ROI.">
      <div className="grid md:grid-cols-2 gap-4">
        {["Cohort retention","Channel ROI","Country heatmap","Top ambassadors"].map(t=>(
          <AdminCard key={t} className="p-6 h-48 flex flex-col justify-between">
            <div className="text-xs uppercase tracking-wider text-white/50 font-bold">{t}</div>
            <svg viewBox="0 0 300 80" className="w-full h-20"><path d="M0,70 L40,55 L80,60 L120,40 L160,45 L200,30 L240,20 L300,10" fill="none" stroke="#f5ae2e" strokeWidth="2"/></svg>
            <button className="text-xs text-amber font-semibold text-left">Export CSV →</button>
          </AdminCard>
        ))}
      </div>
    </AdminShell>
  ),
});
