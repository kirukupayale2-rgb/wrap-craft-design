import { Link } from "@tanstack/react-router";
import { ArrowRight, Box } from "lucide-react";

export function CTA() {
  return (
    <section className="relative z-10 -mb-16 bg-transparent">
      <div className="container-page">
        <div className="grid items-center gap-6 rounded-2xl bg-primary px-6 py-8 shadow-lift md:grid-cols-[auto_1fr_auto] md:px-10">
          <div className="flex items-center gap-4">
            <Box className="size-11 shrink-0 text-primary-foreground" strokeWidth={1.2} />
            <h2 className="text-xl leading-snug font-extrabold text-primary-foreground md:text-2xl">
              Let&rsquo;s Create Something
              <br className="hidden sm:block" /> Worth Unboxing.
            </h2>
          </div>
          <p className="max-w-xs text-[12.5px] leading-relaxed text-primary-foreground/85">
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
    </section>
  );
}
