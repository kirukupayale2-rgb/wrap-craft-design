import { Award, PenTool, Recycle, Truck } from "lucide-react";

const items = [
  { icon: Award, title: "Premium Quality", text: "Built to impress" },
  { icon: PenTool, title: "Custom Designs", text: "Tailored for your brand" },
  { icon: Recycle, title: "Sustainable", text: "Better for the planet" },
  { icon: Truck, title: "On-Time Delivery", text: "Every time, always" },
];

export function Benefits() {
  return (
    <div className="container-page grid grid-cols-2 gap-4 pt-6 pb-10 sm:gap-6 lg:grid-cols-4">
      {items.map(({ icon: Icon, title, text }) => (
        <div key={title} className="flex min-w-0 items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border">
            <Icon className="size-4 text-ink" strokeWidth={1.6} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[12px] font-bold text-ink">{title}</span>
            <span className="block truncate text-[11px] text-muted-foreground">{text}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
