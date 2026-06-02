import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminShell, AdminCard } from "@/components/admin-shell";
import { adminStats, applications } from "@/lib/mock";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin — Learn2Earn" }] }),
  component: AdminHome,
});

function AdminHome() {
  return (
    <AdminShell title="Operations" subtitle="Movement health at a glance.">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {adminStats.map((s) => (
          <AdminCard key={s.label} className="p-5">
            <div className="text-[11px] uppercase tracking-wider text-black/50 font-bold">
              {s.label}
            </div>
            <div className="mt-2 text-3xl font-bold text-black num">
              {s.value}
            </div>
            <div className="text-xs text-amber mt-1">{s.delta}</div>
          </AdminCard>
        ))}
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-4">
        <AdminCard className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-black">Funnel — last 30 days</h3>
            <span className="text-xs text-black/50">Updated 2 min ago</span>
          </div>
          <div className="mt-6 space-y-3">
            {[
              { l: "Invited", v: 4820, w: 100 },
              { l: "Qualified", v: 2110, w: 44 },
              { l: "In Trials", v: 942, w: 19 },
              { l: "Admitted", v: 318, w: 6.6 },
            ].map((s) => (
              <div key={s.l}>
                <div className="flex justify-between text-xs text-black/70 mb-1.5">
                  <span>{s.l}</span>
                  <span className="num">
                    {s.v.toLocaleString()} · {s.w}%
                  </span>
                </div>
                <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-amber"
                    style={{ width: `${s.w}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </AdminCard>

        <AdminCard className="p-6">
          <h3 className="font-bold text-black">Risk signals</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-danger" />
              <span className="text-black/80">
                3 ambassadors flagged · same IP
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber" />
              <span className="text-black/80">
                12 referrals · low completion rate
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-amber" />
              <span className="text-black/80">
                5 applications · disposable email
              </span>
            </li>
          </ul>
          <Link
            to="/admin/referrals"
            className="mt-4 inline-block text-xs font-semibold text-amber"
          >
            Open queue →
          </Link>
        </AdminCard>
      </div>

      <AdminCard className="mt-6 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-black">Application queue</h3>
          <Link
            to="/admin/applications"
            className="text-xs font-semibold text-amber"
          >
            See all →
          </Link>
        </div>
        <div className="space-y-2">
          {applications.slice(0, 3).map((a) => (
            <div
              key={a.id}
              className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5"
            >
              <span className="h-9 w-9 rounded-lg bg-amber/20 text-amber grid place-items-center font-bold text-xs">
                {a.name[0]}
              </span>
              <div className="flex-1">
                <div className="text-sm font-semibold text-black">{a.name}</div>
                <div className="text-xs text-black/50">
                  {a.city} · {a.reach} reach
                </div>
              </div>
              <span
                className={`text-xs font-bold px-2 py-1 rounded-full ${a.score >= 85 ? "bg-success/20 text-success" : a.score >= 75 ? "bg-amber/20 text-amber" : "bg-danger/20 text-danger"}`}
              >
                {a.score}
              </span>
              <button className="h-8 px-3 rounded-lg bg-amber text-plum text-xs font-bold">
                Review
              </button>
            </div>
          ))}
        </div>
      </AdminCard>
    </AdminShell>
  );
}
