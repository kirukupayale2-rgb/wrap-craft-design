import { Link } from "@tanstack/react-router";
import { ArrowRight, Box } from "lucide-react";

import ctaBg from "@/assets/cta-bg.jpg";

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 md:py-24">
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={640}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute inset-0 bg-ink/80" />

      <div className="relative container-page flex flex-col items-center text-center">
        <span className="grid size-14 place-items-center rounded-full border border-primary/50 bg-primary/15">
          <Box className="size-7 text-primary" strokeWidth={1.3} />
        </span>
        <h2 className="mt-6 max-w-2xl text-2xl leading-tight font-extrabold text-cream md:text-4xl">
          Let&rsquo;s Create Something Worth Unboxing.
        </h2>
        <span className="mt-5 block h-[2px] w-14 rounded-full bg-primary" />
        <p className="mt-5 max-w-md text-[13px] leading-relaxed text-cream/70">
          Your product deserves packaging that speaks before it&rsquo;s opened.
        </p>
        <Link
          to="/contact"
          className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[13px] font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
        >
          Get Started
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
