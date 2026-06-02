import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, AdminCard } from "@/components/admin-shell";

const make = (title: string, subtitle: string) => () => (
  <AdminShell title={title} subtitle={subtitle}>
    <AdminCard className="p-10 text-center text-white/60">
      <div className="text-4xl">⚙</div>
      <div className="mt-3 font-bold text-white text-lg">{title}</div>
      <div className="mt-1 text-sm">Coming in Phase 2 of the MVP.</div>
    </AdminCard>
  </AdminShell>
);

export const Route = createFileRoute("/admin/referrals")({
  head: () => ({ meta: [{ title: "Referrals — Admin" }] }),
  component: make("Referrals Monitor", "Funnel health and per-ambassador pipelines."),
});
