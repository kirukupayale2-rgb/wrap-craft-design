import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — V'RAP Custom Packaging" },
      {
        name: "description",
        content:
          "Request a quote for custom packaging. Call +91 98765 43210 or email hello@vrap.com.",
      },
      { property: "og:title", content: "Contact — V'RAP Custom Packaging" },
      { property: "og:description", content: "Get a quote for your custom packaging project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-cream py-14 md:py-16">
      <div className="container-page">
        <SectionHeading label="Contact" title="Get A Quote" underline />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <ul className="space-y-5 text-[13px] text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="size-4 shrink-0 text-primary" />
              <span>
                123, Packaging Street,
                <br />
                Creativity City, 600001
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href="tel:+919876543210" className="hover:text-ink">
                +91 98765 43210
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href="mailto:hello@vrap.com" className="hover:text-ink">
                hello@vrap.com
              </a>
            </li>
          </ul>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Your name"
                className="rounded-lg border border-border bg-cream px-4 py-3 text-[13px] outline-none focus:border-primary"
              />
              <input
                required
                type="email"
                placeholder="Email address"
                className="rounded-lg border border-border bg-cream px-4 py-3 text-[13px] outline-none focus:border-primary"
              />
            </div>
            <textarea
              required
              rows={5}
              placeholder="Tell us about your packaging project"
              className="mt-4 w-full rounded-lg border border-border bg-cream px-4 py-3 text-[13px] outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="group mt-4 inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-[13px] font-semibold text-cream"
            >
              {sent ? "Thanks — we'll be in touch" : "Send Request"}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
