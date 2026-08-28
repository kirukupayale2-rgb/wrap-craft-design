import { Link } from "@tanstack/react-router";
import { ArrowRight, Box, Leaf, PenTool } from "lucide-react";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: PenTool,
    title: "Packaging Design",
    text: "Strategic, brand-focused designs that make your packaging stand out on any shelf.",
  },
  {
    icon: Box,
    title: "Manufacturing",
    text: "Advanced machinery and skilled craftsmanship to deliver premium quality packaging.",
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    text: "Eco-friendly materials and processes that care for your brand and our planet.",
  },
];

export function Services() {
  return (
    <section className="bg-cream py-14 md:py-16">
      <div className="container-page">
        <SectionHeading label="More Than Just A Box" title="We Create Experiences" />

        <div className="mt-9 grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-lift">
                <span className="grid size-12 place-items-center rounded-full bg-primary">
                  <Icon className="size-5 text-primary-foreground" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{text}</p>
                <Link
                  to="/services"
                  className="group mt-5 inline-flex items-center gap-2 text-[12px] font-semibold text-ink"
                >
                  Learn More
                  <ArrowRight className="size-3.5 text-primary transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
