import { Award, PenTool, Recycle, Truck } from "lucide-react";

const items = [
  { icon: Award, title: "Premium Quality", text: "Built to impress" },
  { icon: PenTool, title: "Custom Designs", text: "Tailored for your brand" },
  { icon: Recycle, title: "Sustainable", text: "Better for the planet" },
  { icon: Truck, title: "On-Time Delivery", text: "Every time, always" },
];

export function Benefits() {
  return (
    <div className="grid grid-cols-1 gap-4 border-t border-border/70 pt-5 min-[360px]:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="flex min-w-0 items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-card/60">
            <Icon className="size-4 text-primary" strokeWidth={1.6} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[12.5px] font-bold text-ink">{title}</span>
            <span className="block truncate text-[11px] text-muted-foreground">{text}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
