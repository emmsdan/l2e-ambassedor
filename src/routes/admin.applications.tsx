import { createFileRoute } from "@tanstack/react-router";
import { AdminShell, AdminCard } from "@/components/admin-shell";
import { applications } from "@/lib/mock";
import { useState } from "react";

export const Route = createFileRoute("/admin/applications")({
  head: () => ({ meta: [{ title: "Applications — Admin" }] }),
  component: Apps,
});

function Apps() {
  const [sel, setSel] = useState(applications[0]);
  return (
    <AdminShell title="Applications" subtitle="147 pending · review within 5 working days.">
      <div className="grid lg:grid-cols-[360px_1fr] gap-4">
        <AdminCard className="overflow-hidden">
          {applications.map((a) => (
            <button key={a.id} onClick={() => setSel(a)} className={`w-full text-left p-4 flex items-center gap-3 border-b border-white/5 hover:bg-white/5 ${sel.id===a.id?"bg-white/5":""}`}>
              <span className="h-9 w-9 rounded-lg bg-amber/20 text-amber grid place-items-center font-bold text-xs">{a.name[0]}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white">{a.name}</div>
                <div className="text-xs text-white/50">{a.city} · {a.reach}</div>
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${a.score>=85?"bg-success/20 text-success":a.score>=75?"bg-amber/20 text-amber":"bg-danger/20 text-danger"}`}>{a.score}</span>
            </button>
          ))}
        </AdminCard>

        <AdminCard className="p-7">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">{sel.name}</h2>
              <div className="text-sm text-white/60 mt-1">{sel.city} · Reach {sel.reach}</div>
            </div>
            <span className={`text-sm font-bold px-3 py-1 rounded-full ${sel.score>=85?"bg-success/20 text-success":sel.score>=75?"bg-amber/20 text-amber":"bg-danger/20 text-danger"}`}>Score {sel.score}</span>
          </div>
          <div className="mt-6">
            <div className="text-xs uppercase tracking-wider text-white/40 font-bold">Why they want to join</div>
            <blockquote className="mt-2 text-lg text-white/90 leading-relaxed border-l-4 border-amber pl-5">"{sel.story}"</blockquote>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-white/5"><div className="text-xs text-white/50 uppercase">Channels</div><div className="text-white font-semibold mt-1">WhatsApp, X</div></div>
            <div className="p-4 rounded-xl bg-white/5"><div className="text-xs text-white/50 uppercase">Hrs/week</div><div className="text-white font-semibold mt-1">8</div></div>
            <div className="p-4 rounded-xl bg-white/5"><div className="text-xs text-white/50 uppercase">Communities</div><div className="text-white font-semibold mt-1">4 active</div></div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 flex gap-3">
            <button className="h-11 px-5 rounded-xl bg-success text-white font-bold">✓ Approve</button>
            <button className="h-11 px-5 rounded-xl bg-amber text-plum font-bold">⏸ Waitlist</button>
            <button className="h-11 px-5 rounded-xl border border-white/20 text-white hover:bg-white/5 font-semibold ml-auto">Decline politely</button>
          </div>
        </AdminCard>
      </div>
    </AdminShell>
  );
}
