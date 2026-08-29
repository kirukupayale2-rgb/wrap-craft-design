import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { IndustryDetails } from "@/components/IndustryDetails";
import banner from "@/assets/banner-industries.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — V'RAP Custom Packaging" },
      {
        name: "description",
        content:
          "Packaging built for food, cosmetics, apparel, exports, retail, gifting, startups and D2C brands.",
      },
      { property: "og:title", content: "Industries — V'RAP Custom Packaging" },
      { property: "og:description", content: "Designed for every industry." },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <PageShell
      label="Designed For Every Industry"
      title="Packaging For Your Category"
      intro="Material, structure and finish tuned to how your product ships, sits and sells."
      image={banner}
    >
      <IndustryDetails />
    </PageShell>
  );
}
