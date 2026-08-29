import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import banner from "@/assets/banner-about.jpg";
import { Philosophy } from "@/components/Philosophy";
import { Process } from "@/components/Process";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — V'RAP Custom Packaging" },
      {
        name: "description",
        content:
          "Learn how V'RAP blends design, craftsmanship and responsibility to build packaging brands remember.",
      },
      { property: "og:title", content: "About Us — V'RAP Custom Packaging" },
      {
        property: "og:description",
        content: "Design, craftsmanship and responsibility behind every V'RAP box.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell
      label="About Us"
      title="Crafted With Intent"
      intro="V'RAP is a custom packaging studio and manufacturer. From the first sketch to the final delivery, we build boxes that carry your brand story."
      image={banner}
    >
      <Philosophy />
      <Process />
    </PageShell>
  );
}
