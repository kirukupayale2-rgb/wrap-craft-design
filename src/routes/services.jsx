import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/PageShell";
import { Services as ServicesSection } from "@/components/Services";
import { Process } from "@/components/Process";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — V'RAP Custom Packaging" },
      {
        name: "description",
        content:
          "Packaging design, manufacturing and sustainable solutions delivered end to end by V'RAP.",
      },
      { property: "og:title", content: "Services — V'RAP Custom Packaging" },
      { property: "og:description", content: "Design, manufacturing and sustainable packaging." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell
      label="More Than Just A Box"
      title="We Create Experiences"
      intro="From concept to shelf, every service is built around your product and your brand."
    >
      <ServicesSection />
      <Process />
    </PageShell>
  );
}
