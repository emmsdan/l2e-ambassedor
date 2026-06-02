import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, Card, TierChip } from "@/components/portal-shell";
import { leaderboard } from "@/lib/mock";
import { useState } from "react";

export const Route = createFileRoute("/app/leaderboard")({
  head: () => ({ meta: [{ title: "Leaderboard — Learn2Earn" }] }),
  component: Leaderboard,
});

function Leaderboard() {
  const [scope, setScope] = useState("month");
  const [region, setRegion] = useState("global");
  return (
    <PortalShell title="Leaderboard" subtitle="Recognition for impact. Not a competition for cash." right={
      <div className="flex gap-2">
        <div className="bg-white rounded-xl border border-border p-1 flex">
          {["week","month","all"].map((s) => <button key={s} onClick={() => setScope(s)} className={`px-3 h-9 rounded-lg text-xs font-semibold capitalize ${scope===s?"bg-primary text-white":"text-muted-foreground"}`}>{s === "all" ? "All time" : `This ${s}`}</button>)}
        </div>
        <div className="bg-white rounded-xl border border-border p-1 flex">
          {["global","country"].map((s) => <button key={s} onClick={() => setRegion(s)} className={`px-3 h-9 rounded-lg text-xs font-semibold capitalize ${region===s?"bg-plum text-white":"text-muted-foreground"}`}>{s}</button>)}
        </div>
      </div>
    }>
      {/* Top 3 podium */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[1,0,2].map((i) => {
          const a = leaderboard[i];
          const h = i === 0 ? "h-44" : i === 1 ? "h-36" : "h-32";
          return (
            <div key={a.rank} className={`rounded-2xl ${i===0?"bg-plum-gradient text-white":"bg-white border border-border"} p-5 ${h} flex flex-col justify-end relative overflow-hidden`}>
              {i===0 && <span className="absolute top-4 right-4 text-amber text-2xl">★</span>}
              <div className={`text-[10px] uppercase tracking-wider font-bold ${i===0?"text-amber":"text-muted-foreground"}`}>Rank #{a.rank}</div>
              <div className={`text-lg font-bold ${i===0?"text-white":"text-foreground"}`}>{a.name}</div>
              <div className={`text-xs ${i===0?"text-white/60":"text-muted-foreground"}`}>{a.city}</div>
              <div className={`mt-2 text-2xl font-bold num ${i===0?"text-gradient-amber":"text-foreground"}`}>{a.score}</div>
            </div>
          );
        })}
      </div>

      <Card>
        <table className="w-full text-sm">
          <thead><tr className="text-left text-muted-foreground text-xs uppercase tracking-wider">
            <th className="px-6 py-4 font-semibold w-16">Rank</th>
            <th className="font-semibold">Ambassador</th>
            <th className="font-semibold">Tier</th>
            <th className="font-semibold">City</th>
            <th className="font-semibold text-right pr-6">Impact</th>
          </tr></thead>
          <tbody>
            {leaderboard.map((a) => (
              <tr key={a.rank} className="border-t border-border hover:bg-secondary/50">
                <td className="px-6 py-4 font-bold text-foreground num">#{a.rank}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <span className="h-9 w-9 rounded-full bg-plum-gradient text-white text-xs font-bold grid place-items-center">{a.name[0]}</span>
                    <span className="font-semibold text-foreground">{a.name}</span>
                  </div>
                </td>
                <td><TierChip tier={a.tier} size="sm" /></td>
                <td className="text-muted-foreground">{a.city}</td>
                <td className="text-right pr-6 font-bold text-foreground num">{a.score}</td>
              </tr>
            ))}
            <tr className="border-t-2 border-primary bg-accent">
              <td className="px-6 py-4 font-bold text-primary num">#24</td>
              <td><div className="flex items-center gap-3"><span className="h-9 w-9 rounded-full bg-plum-gradient text-white text-xs font-bold grid place-items-center">AO</span><span className="font-semibold text-foreground">You (Amaka)</span></div></td>
              <td><TierChip tier="Advocate" size="sm" /></td>
              <td className="text-muted-foreground">Lagos</td>
              <td className="text-right pr-6 font-bold text-primary num">86 <span className="text-xs text-success">↑6</span></td>
            </tr>
          </tbody>
        </table>
      </Card>

      <div className="mt-4 text-xs text-muted-foreground italic">Impact score = admitted × 5 + trials × 2 + qualified × 1. Resets monthly. No cash prize is tied to ranking — only spotlight features and invitations.</div>
    </PortalShell>
  );
}
