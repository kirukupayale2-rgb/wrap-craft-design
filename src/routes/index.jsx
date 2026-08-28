import { createFileRoute } from "@tanstack/react-router";

import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Industries } from "@/components/Industries";
import { Philosophy } from "@/components/Philosophy";
import { CTA } from "@/components/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "V'RAP Custom Packaging — Premium Custom Boxes" },
      {
        name: "description",
        content:
          "V'RAP designs and manufactures premium custom packaging that protects your product and elevates your brand.",
      },
      { property: "og:title", content: "V'RAP Custom Packaging — Premium Custom Boxes" },
      {
        property: "og:description",
        content: "Custom boxes, sustainable materials and packaging people remember.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Portfolio />
      <Services />
      <Process />
      <Industries />
      <Philosophy />
      <CTA />
    </>
  );
}
