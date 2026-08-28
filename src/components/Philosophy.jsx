import philosophy from "@/assets/philosophy.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Philosophy() {
  return (
    <section className="wave-bg pb-16">
      <div className="container-page grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeading label="Our Philosophy" align="left" />
          <h2 className="mt-2 text-3xl leading-tight font-extrabold tracking-tight text-ink md:text-[38px]">
            Stories Worth
            <br />
            Unboxing
          </h2>
          <p className="mt-5 max-w-md text-[13px] leading-relaxed text-muted-foreground">
            We believe packaging is more than protection — it&rsquo;s the first touchpoint of your
            brand story.
          </p>
          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-muted-foreground">
            We blend creativity, quality and responsibility to craft packaging that leaves a lasting
            impression.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <img
            src={philosophy}
            alt="Luxury black V'RAP box with thank you card, rope and leaves"
            loading="lazy"
            width={1200}
            height={800}
            className="h-[260px] w-full rounded-2xl object-cover md:h-[330px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
