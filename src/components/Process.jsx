import { Box, PenTool, Search, Settings, Truck } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", icon: Search, title: "Discover", text: "We understand your brand, product and goals." },
  { n: "02", icon: PenTool, title: "Design", text: "Creative concepts crafted to bring your vision to life." },
  { n: "03", icon: Box, title: "Prototype", text: "Samples that help you see, feel and perfect it." },
  { n: "04", icon: Settings, title: "Manufacture", text: "Precision production with strict quality control." },
  { n: "05", icon: Truck, title: "Deliver", text: "Safe, on-time delivery to your doorstep." },
];

export function Process() {
  return (
    <section className="bg-cream pb-16">
      <div className="container-page">
        <SectionHeading label="Our Process" title="From Idea To Shelf" />

        {/* Mobile: compact left-aligned timeline cards */}
        <div className="relative mt-8 md:hidden">
          <span className="absolute top-4 bottom-4 left-[19px] w-px bg-border" />
          <div className="space-y-3">
            {steps.map(({ n, icon: Icon, title, text }, i) => (
              <Reveal key={n} delay={i * 60}>
                <div className="relative flex gap-4">
                  <span className="relative z-10 mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-border bg-card shadow-card">
                    <Icon className="size-4 text-primary" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0 flex-1 rounded-xl border border-border bg-card px-4 py-3 shadow-card">
                    <p className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-widest text-primary">{n}</span>
                      <span className="text-[13px] font-bold text-ink">{title}</span>
                    </p>
                    <p className="mt-1 text-[12px] leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-10 hidden md:block">
          <span className="absolute top-[70px] right-[10%] left-[10%] h-px bg-border" />
          <div className="grid grid-cols-5 gap-4">
            {steps.map(({ n, icon: Icon, title, text }, i) => (
              <Reveal key={n} delay={i * 80}>
                <div className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 grid size-7 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {n}
                  </span>
                  <span className="-mt-3.5 grid size-[54px] place-items-center rounded-full border border-border bg-card shadow-card">
                    <Icon className="size-5 text-ink" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-3 text-[13px] font-bold text-ink">{title}</h3>
                  <p className="mt-1.5 max-w-[180px] text-[11.5px] leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
