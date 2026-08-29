import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { industryList } from "./Industries";
import { Reveal } from "./Reveal";

const content = {
  "Food & Beverages": {
    text: "Grease-resistant boards, food-grade liners and structures that keep flavour, freshness and shelf appeal intact — from bakery cartons to takeaway sleeves.",
    points: ["Food-grade, FDA-safe liners", "Leak & grease resistant coatings", "Freezer and hot-fill ready"],
  },
  "Cosmetics & Beauty": {
    text: "Rigid boxes, soft-touch laminates and foiling that make a serum or a lipstick feel like an object worth keeping on the shelf.",
    points: ["Rigid & magnetic closure boxes", "Foil stamping, emboss, soft-touch", "Custom foam and EVA inserts"],
  },
  "Textiles & Apparel": {
    text: "Mailers and drawer boxes engineered for folded garments — light, strong and printed inside so the unboxing reads as intentional.",
    points: ["Fold-friendly mailers", "Inside-print & tissue wrap", "Reusable, return-ready structures"],
  },
  "Exports & Logistics": {
    text: "Multi-wall corrugation, palletisation-tested strength and compliant labelling for cargo that travels long and rough.",
    points: ["5-ply & 7-ply corrugation", "Drop and stack tested", "Export-compliant marking"],
  },
  "Retail & E-Commerce": {
    text: "Shelf-ready cartons and shipper boxes that survive the courier network and still look like your brand when they arrive.",
    points: ["Shelf-ready display cartons", "Tear-strip shipper boxes", "Barcode & SKU-ready printing"],
  },
  "Corporate Gifting": {
    text: "Presentation-first hampers and kits with ribbon pulls, custom inserts and finishes tuned for occasions and bulk runs.",
    points: ["Custom hamper & kit builds", "Ribbon, foam and rigid inserts", "Bulk runs with fast turnaround"],
  },
  Startups: {
    text: "Low minimum orders and quick prototypes so an early brand can test packaging without locking up working capital.",
    points: ["Low MOQ pilot batches", "Fast sample turnaround", "Design support included"],
  },
  "D2C Brands": {
    text: "Unboxing-led packaging designed for social sharing — printed interiors, inserts and cards that make the first open memorable.",
    points: ["Unboxing-first structures", "Printed interiors & thank-you cards", "Subscription-friendly repeat runs"],
  },
};

export function IndustryDetails() {
  return (
    <section className="bg-cream py-14 md:py-16">
      <div className="container-page space-y-14 md:space-y-20">
        {industryList.map(({ title, icon: Icon, img }, i) => {
          const { text, points } = content[title];
          const flip = i % 2 === 1;
          return (
            <Reveal key={title}>
              <article className="grid items-center gap-7 md:grid-cols-2 md:gap-12">
                <div className={flip ? "md:order-2" : ""}>
                  <img
                    src={img}
                    alt={`${title} packaging by V'RAP`}
                    loading="lazy"
                    width={700}
                    height={512}
                    className="h-[220px] w-full rounded-2xl object-cover shadow-card md:h-[300px]"
                  />
                </div>

                <div className={flip ? "md:order-1" : ""}>
                  <span className="grid size-11 place-items-center rounded-full bg-primary">
                    <Icon className="size-5 text-primary-foreground" strokeWidth={1.6} />
                  </span>
                  <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-ink md:text-[30px]">
                    {title}
                  </h2>
                  <p className="mt-3 max-w-md text-[13px] leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-[13px] text-ink">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 text-[12.5px] font-semibold text-cream"
                  >
                    Discuss This Category
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
