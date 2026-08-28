import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroBox from "@/assets/hero-box.jpg";
import { Benefits } from "./Benefits";

export function Hero() {
  return (
    <section className="border-b border-border bg-cream">
      <div className="container-page grid items-center gap-10 pt-12 pb-8 lg:grid-cols-[1fr_1.05fr] lg:gap-6 lg:pt-16">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
            Custom boxes. Unforgettable impressions.
          </p>
          <h1 className="mt-4 text-[34px] leading-[1.08] font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[54px]">
            Packaging That
            <br />
            Makes People
            <br />
            <span className="text-primary">Stop. Look. Remember.</span>
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            We design and craft premium packaging that protects your product and elevates your
            brand.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/our-work"
              className="group inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-[13px] font-semibold text-cream transition-colors hover:bg-ink/90"
            >
              Explore Our Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-[13px] font-semibold text-ink transition-colors hover:border-primary"
            >
              Get A Quote
              <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="-mx-5 lg:mx-0">
          <img
            src={heroBox}
            alt="Premium V'RAP kraft cardboard box on a marble platform with green leaves"
            width={1200}
            height={1008}
            className="h-full w-full object-cover lg:rounded-l-3xl"
          />
        </div>
      </div>

      <Benefits />
    </section>
  );
}
