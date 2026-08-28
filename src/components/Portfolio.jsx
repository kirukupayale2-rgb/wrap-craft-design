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

export function Portfolio() {
  return (
    <section className="bg-card py-14 md:py-16">
      <div className="container-page">
        <SectionHeading label="Our Work" title="Packaging People Remember" underline />
      </div>

      <Reveal className="relative mt-10">
        <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto md:overflow-visible">
          {shots.map((shot, i) => (
            <div
              key={shot.alt}
              className="group relative h-[230px] w-[70%] shrink-0 snap-center overflow-hidden sm:h-[260px] md:h-[300px] md:w-auto md:flex-1"
              style={{
                clipPath:
                  i === 0
                    ? "polygon(0 0, 100% 0, calc(100% - 26px) 100%, 0 100%)"
                    : i === shots.length - 1
                      ? "polygon(26px 0, 100% 0, 100% 100%, 0 100%)"
                      : "polygon(26px 0, 100% 0, calc(100% - 26px) 100%, 0 100%)",
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

        <div className="-mt-6 flex justify-center md:-mt-7">
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
