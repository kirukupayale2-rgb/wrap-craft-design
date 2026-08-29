import { Link } from "@tanstack/react-router";
import { ArrowRight, Box } from "lucide-react";

import ctaBg from "@/assets/cta-bg.jpg";

export function CTA() {
  return (
    <section className="relative z-10 -mb-20 bg-transparent pt-8">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-2xl shadow-lift">
          <img
            src={ctaBg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1920}
            height={640}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute inset-0 bg-primary/85" />

          <div className="relative grid items-center gap-6 px-6 py-10 md:grid-cols-[auto_1fr_auto] md:px-10 md:py-12">
            <div className="flex items-center gap-4">
              <Box className="size-11 shrink-0 text-primary-foreground" strokeWidth={1.2} />
              <h2 className="text-xl leading-snug font-extrabold text-primary-foreground md:text-2xl">
                Let&rsquo;s Create Something
                <br className="hidden sm:block" /> Worth Unboxing.
              </h2>
            </div>
            <p className="max-w-xs text-[12.5px] leading-relaxed text-primary-foreground/90">
              Your product deserves packaging that speaks before it&rsquo;s opened.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-ink px-6 py-3 text-[13px] font-semibold text-cream transition-colors hover:bg-ink/90"
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
