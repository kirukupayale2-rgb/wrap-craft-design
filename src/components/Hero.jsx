import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroBox from "@/assets/hero-box.jpg";
import { Benefits } from "./Benefits";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-cream">
      {/* Integrated hero visual: fills the right half on desktop */}
      <div className="pointer-events-none absolute top-0 right-0 bottom-[104px] hidden w-[52%] lg:block">
        <img
          src={heroBox}
          alt="Premium V'RAP kraft cardboard box on a marble platform with green leaves"
          width={1200}
          height={1008}
          className="h-full w-full object-cover object-[center_top]"
        />
        <span className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-cream to-transparent" />
      </div>

      <div className="container-page relative z-10 flex min-h-[420px] flex-col justify-center py-10 lg:min-h-[476px] lg:py-12">
        <div className="lg:w-[50%]">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
            Custom boxes. Unforgettable impressions.
          </p>
          <h1 className="mt-4 text-[32px] leading-[1.02] font-extrabold tracking-tight text-ink sm:text-[42px] lg:text-[50px] xl:text-[56px]">

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

        {/* Mobile / tablet visual */}
        <div className="-mx-5 mt-8 lg:hidden">
          <img
            src={heroBox}
            alt="Premium V'RAP kraft cardboard box on a marble platform with green leaves"
            width={1200}
            height={1008}
            className="h-[240px] w-full object-cover sm:h-[320px]"
          />
        </div>

      </div>

      <div className="relative z-10 bg-cream">
        <div className="container-page py-6">
          <Benefits />
        </div>
      </div>


    </section>
  );
}
