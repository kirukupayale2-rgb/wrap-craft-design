import { Link } from "@tanstack/react-router";
import { ArrowRight, Gift, Globe, Rocket, Shirt, ShoppingBag, Sparkles, UtensilsCrossed, Package } from "lucide-react";

import food from "@/assets/ind-food.jpg";
import cosmetics from "@/assets/ind-cosmetics.jpg";
import textiles from "@/assets/ind-textiles.jpg";
import exports from "@/assets/ind-exports.jpg";
import retail from "@/assets/ind-retail.jpg";
import gifting from "@/assets/ind-gifting.jpg";
import startups from "@/assets/ind-startups.jpg";
import d2c from "@/assets/ind-d2c.jpg";
import { Reveal } from "./Reveal";

const industries = [
  { title: "Food & Beverages", icon: UtensilsCrossed, img: food },
  { title: "Cosmetics & Beauty", icon: Sparkles, img: cosmetics },
  { title: "Textiles & Apparel", icon: Shirt, img: textiles },
  { title: "Exports & Logistics", icon: Globe, img: exports },
  { title: "Retail & E-Commerce", icon: ShoppingBag, img: retail },
  { title: "Corporate Gifting", icon: Gift, img: gifting },
  { title: "Startups", icon: Rocket, img: startups },
  { title: "D2C Brands", icon: Package, img: d2c },
];

export function Industries() {
  return (
    <section className="wave-bg py-14 md:py-16">
      <div className="container-page">
        <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
          Designed For Every Industry
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ title, icon: Icon, img }, i) => (
            <Reveal key={title} delay={i * 60}>
              <Link
                to="/industries"
                className="group relative block h-[130px] overflow-hidden rounded-xl"
              >
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  width={700}
                  height={512}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-ink/55" />
                <span className="relative flex h-full flex-col justify-between p-4">
                  <Icon className="size-6 text-cream" strokeWidth={1.4} />
                  <span className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-2">
                    <span className="truncate text-[12.5px] font-semibold text-cream">{title}</span>
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary">
                      <ArrowRight className="size-3.5 text-primary-foreground" />
                    </span>
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
