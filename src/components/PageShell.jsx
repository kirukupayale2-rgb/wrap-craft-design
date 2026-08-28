import { CTA } from "./CTA";
import { SectionHeading } from "./SectionHeading";

export function PageShell({ label, title, intro, children }) {
  return (
    <>
      <section className="bg-cream py-14 md:py-16">
        <div className="container-page max-w-3xl text-center">
          <SectionHeading label={label} title={title} underline />
          {intro ? (
            <p className="mx-auto mt-5 max-w-xl text-[13px] leading-relaxed text-muted-foreground">
              {intro}
            </p>
          ) : null}
        </div>
      </section>
      {children}
      <CTA />
    </>
  );
}
