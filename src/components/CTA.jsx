import { Link } from "@tanstack/react-router";
import { ArrowRight, Box } from "lucide-react";

import ctaBg from "@/assets/cta-bg.jpg";

export function CTA() {
  return (
    <section className="bg-cream py-14 md:py-20">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-2xl">
          <img
            src={ctaBg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1920}
            height={480}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-primary/80" />

          <div className="relative flex flex-col items-center gap-6 px-6 py-10 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:px-10 md:py-8 md:text-left">
            <div className="flex items-center gap-4 md:gap-5">
              <Box className="size-10 shrink-0 text-ink md:size-12" strokeWidth={1.2} />
              <h2 className="max-w-sm text-2xl leading-tight font-extrabold text-ink md:text-[30px]">
                Let&rsquo;s Create Something Worth Unboxing.
              </h2>
            </div>

            <p className="max-w-xs text-[13px] leading-relaxed text-ink/80">
              Your product deserves packaging that speaks before it&rsquo;s opened.
            </p>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-[13px] font-semibold text-cream transition-colors hover:bg-ink/90"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
