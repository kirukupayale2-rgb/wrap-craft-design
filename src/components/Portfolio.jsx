import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const shots = [
  { src: work1, alt: "Green eco packaging box" },
  { src: work2, alt: "Black luxury packaging box" },
  { src: work3, alt: "Beige floral packaging box" },
  { src: work4, alt: "Dark premium packaging box" },
  { src: work5, alt: "Kraft food packaging box" },
];

const loop = [...shots, ...shots];

export function Portfolio() {
  const trackRef = useRef(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf;
    let paused = false;

    const tick = () => {
      const half = el.scrollWidth / 2;
      if (!paused && half > 4) {
        el.scrollLeft += 0.5;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };
    el.addEventListener("pointerdown", pause);
    el.addEventListener("pointerup", resume);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("pointerup", resume);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
    };
  }, []);

  return (
    <section className="bg-card py-14 md:py-16">
      <div className="container-page">
        <SectionHeading label="Our Work" title="Packaging People Remember" underline />
      </div>

      <Reveal className="relative mt-10">
        <div ref={trackRef} className="no-scrollbar flex gap-0 overflow-x-auto">
          {loop.map((shot, i) => (
            <div
              key={`${shot.alt}-${i}`}
              className="group relative h-[340px] w-[82%] shrink-0 overflow-hidden sm:h-[360px] sm:w-[46%] md:h-[380px] md:w-[26%] xl:w-[20%]"
              style={{
                clipPath: "polygon(26px 0, 100% 0, calc(100% - 26px) 100%, 0 100%)",
                marginLeft: i === 0 ? 0 : "-13px",
              }}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                width={700}
                height={900}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="relative z-10 mt-6 flex justify-center md:-mt-7">
          <Link
            to="/our-work"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-[13px] font-semibold text-ink shadow-card transition-colors hover:border-primary"
          >
            View All Projects
            <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
