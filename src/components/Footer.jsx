import { Link } from "@tanstack/react-router";
import { Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone, Dribbble } from "lucide-react";

import { Logo } from "./Logo";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Work", to: "/our-work" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Contact Us", to: "/contact" },
];

const services = [
  "Packaging Design",
  "Manufacturing",
  "Prototype",
  "Sustainable Solutions",
  "Custom Boxes",
  "Branding & Printing",
];

const industries = [
  "Food & Beverages",
  "Cosmetics & Beauty",
  "Textiles & Apparel",
  "Retail & E-Commerce",
  "Corporate Gifting",
  "Startups & D2C Brands",
];

export function Footer() {
  return (
    <footer className="bg-ink pt-32 pb-6 text-cream/70">
      <div className="container-page grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Logo dark />
          <p className="mt-4 text-[12px] leading-relaxed">
            We create custom packaging that protects your product, tells your story and builds
            stronger connections.
          </p>
          <div className="mt-5 flex gap-2.5">
            {[Facebook, Instagram, Linkedin, Dribbble].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="grid size-9 place-items-center rounded-full border border-cream/20 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[13px] font-bold text-cream">Quick Links</h3>
          <ul className="mt-4 space-y-2.5 text-[12px]">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.to} className="transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-bold text-cream">Services</h3>
          <ul className="mt-4 space-y-2.5 text-[12px]">
            {services.map((item) => (
              <li key={item}>
                <Link to="/services" className="transition-colors hover:text-primary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-bold text-cream">Industries</h3>
          <ul className="mt-4 space-y-2.5 text-[12px]">
            {industries.map((item) => (
              <li key={item}>
                <Link to="/industries" className="transition-colors hover:text-primary">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[13px] font-bold text-cream">Contact Us</h3>
          <ul className="mt-4 space-y-3 text-[12px]">
            <li className="flex gap-2.5">
              <MapPin className="size-4 shrink-0 text-primary" />
              <span>
                123, Packaging Street,
                <br />
                Creativity City, 600001
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-primary" />
              <a href="tel:+919876543210" className="hover:text-primary">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-primary" />
              <a href="mailto:hello@vrap.com" className="hover:text-primary">
                hello@vrap.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Globe className="size-4 shrink-0 text-primary" />
              <span>www.vrap.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-cream/10 pt-5">
        <div className="flex flex-col gap-3 text-[11.5px] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 V&rsquo;RAP Custom Packaging. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
