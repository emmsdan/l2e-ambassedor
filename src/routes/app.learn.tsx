import { createFileRoute } from "@tanstack/react-router";
import { PortalShell, Card } from "@/components/portal-shell";

export const Route = createFileRoute("/app/learn")({
  head: () => ({ meta: [{ title: "Content Hub — Learn2Earn" }] }),
  component: Learn,
});

const items = [
  { type: "Playbook", t: "How to write a referral message that converts", time: "6 min", new: true },
  { type: "Script", t: "WhatsApp template — first outreach", time: "1 min" },
  { type: "Graphic", t: "Story-ready brand pack (Instagram, X)", time: "Download" },
  { type: "Video", t: "Tunde's story — from Advocate to Ambassador in 90 days", time: "12 min" },
  { type: "Playbook", t: "Running your first community Q&A", time: "9 min" },
  { type: "Script", t: "LinkedIn post — announce your ambassadorship", time: "1 min" },
];

const colors: Record<string, string> = { Playbook: "bg-primary/10 text-primary", Script: "bg-amber/15 text-plum", Graphic: "bg-plum/10 text-plum", Video: "bg-success/10 text-success" };

function Learn() {
  return (
    <PortalShell title="Content Hub" subtitle="Playbooks, scripts, and assets to help you do this well.">
      <div className="flex gap-2 mb-6">
        {["All","Playbooks","Scripts","Graphics","Videos"].map((f, i) => (
          <button key={f} className={`h-9 px-4 rounded-xl text-sm font-semibold ${i===0?"bg-foreground text-white":"bg-white border border-border text-le-text hover:bg-secondary"}`}>{f}</button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((i) => (
          <Card key={i.t} className="p-6 hover:shadow-lift transition cursor-pointer relative">
            {i.new && <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-amber">● New</span>}
            <span className={`inline-block text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${colors[i.type]}`}>{i.type}</span>
            <h3 className="mt-3 font-bold text-foreground leading-snug">{i.t}</h3>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span>{i.time}</span>
              <span className="text-primary font-semibold">Open →</span>
            </div>
          </Card>
        ))}
      </div>
    </PortalShell>
  );
}
