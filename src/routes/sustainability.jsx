import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Recycle, Sprout } from "lucide-react";

import { PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — V'RAP Custom Packaging" },
      {
        name: "description",
        content:
          "Recyclable materials, soy-based inks and low-waste production for packaging that cares for the planet.",
      },
      { property: "og:title", content: "Sustainability — V'RAP Custom Packaging" },
      { property: "og:description", content: "Better packaging for your brand and the planet." },
    ],
  }),
  component: Sustainability,
});

const pillars = [
  { icon: Recycle, title: "Recyclable Materials", text: "FSC-certified board and fully recyclable structures as the default." },
  { icon: Leaf, title: "Cleaner Printing", text: "Soy and water-based inks with low-VOC coatings on every run." },
  { icon: Sprout, title: "Low-Waste Production", text: "Nested die-lines and optimised runs that cut material waste." },
];

function Sustainability() {
  return (
    <PageShell
      label="Sustainability"
      title="Better For The Planet"
      intro="Responsible packaging is not a premium add-on — it is how we build every box."
    >
      <section className="bg-cream pb-16">
        <div className="container-page grid gap-5 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                <span className="grid size-12 place-items-center rounded-full bg-primary">
                  <Icon className="size-5 text-primary-foreground" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
