import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { Portfolio } from "@/components/Portfolio";

export const Route = createFileRoute("/our-work")({
  head: () => ({
    meta: [
      { title: "Our Work — V'RAP Custom Packaging" },
      {
        name: "description",
        content:
          "A portfolio of custom boxes: eco packaging, luxury rigid boxes, cosmetic cartons and food packaging.",
      },
      { property: "og:title", content: "Our Work — V'RAP Custom Packaging" },
      { property: "og:description", content: "Packaging projects people remember." },
    ],
  }),
  component: OurWork,
});

function OurWork() {
  return (
    <PageShell
      label="Our Work"
      title="Packaging People Remember"
      intro="Selected packaging projects across food, beauty, retail and gifting."
    >
      <Portfolio />
    </PageShell>
  );
}
