import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, AdminCard } from "@/components/admin-shell";
import { leaderboard } from "@/lib/mock";

export const Route = createFileRoute("/admin/ambassadors")({
  head: () => ({ meta: [{ title: "Ambassadors — Admin" }] }),
  component: () => (
    <AdminShell title="Ambassadors" subtitle="1,240 active across 47 cities.">
      <AdminCard className="overflow-hidden">
        <div className="p-4 border-b border-white/10 flex gap-2">
          <input
            placeholder="Search ambassadors…"
            className="flex-1 h-10 rounded-lg bg-white/5 border border-white/10 px-4 text-sm text-black placeholder:text-black/40"
          />
          <select className="h-10 rounded-lg bg-white/5 border border-white/10 px-3 text-sm text-black">
            <option>All tiers</option>
          </select>
          <select className="h-10 rounded-lg bg-white/5 border border-white/10 px-3 text-sm text-black">
            <option>All countries</option>
          </select>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-black/50 text-xs uppercase tracking-wider">
              <th className="px-6 py-4">Ambassador</th>
              <th>Tier</th>
              <th>City</th>
              <th>Admitted</th>
              <th>Score</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((a) => (
              <tr
                key={a.rank}
                className="border-t border-white/5 hover:bg-white/5"
              >
                <td className="px-6 py-3">
                  <div className="flex items-center gap-3">
                    <span className="h-8 w-8 rounded-full bg-amber/20 text-amber grid place-items-center text-xs font-bold">
                      {a.name[0]}
                    </span>
                    <span className="text-black font-semibold">{a.name}</span>
                  </div>
                </td>
                <td className="text-black/70">{a.tier}</td>
                <td className="text-black/70">{a.city}</td>
                <td className="text-black num">{Math.floor(a.score / 15)}</td>
                <td className="text-black num font-bold">{a.score}</td>
                <td className="text-right pr-6">
                  <button className="text-amber text-xs font-semibold">
                    Manage →
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </AdminCard>
    </AdminShell>
  ),
});
