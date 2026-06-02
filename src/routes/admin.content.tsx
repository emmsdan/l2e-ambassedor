import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, AdminCard } from "@/components/admin-shell";

export const Route = createFileRoute("/admin/content")({
  head: () => ({ meta: [{ title: "Content — Admin" }] }),
  component: () => (
    <AdminShell title="Content Library" subtitle="Playbooks, scripts, and assets ambassadors use.">
      <AdminCard className="p-10 text-center text-white/60">
        <div className="text-4xl">📚</div>
        <div className="mt-3 font-bold text-white text-lg">Content CMS</div>
        <div className="mt-1 text-sm">Coming in Phase 2.</div>
      </AdminCard>
    </AdminShell>
  ),
});
