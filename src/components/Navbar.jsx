import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Menu, X } from "lucide-react";

import { Logo } from "./Logo";

const links = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Work", to: "/our-work" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-cream/95 backdrop-blur">
      <div className="container-page flex h-[76px] flex-nowrap items-center justify-between gap-6">
        <div className="min-w-0 shrink-0">
          <Logo />
        </div>

        <nav className="hidden min-w-0 flex-nowrap items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="relative pb-1 text-[13px] font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-ink data-[status=active]:text-ink data-[status=active]:after:absolute data-[status=active]:after:inset-x-0 data-[status=active]:after:-bottom-0.5 data-[status=active]:after:h-[2px] data-[status=active]:after:rounded-full data-[status=active]:after:bg-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/contact"
            className="group hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap text-primary-foreground transition-colors hover:bg-primary-dark lg:inline-flex"
          >
            Get A Quote
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-ink lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-cream lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-ink last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get A Quote <ArrowRight className="size-4" />
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
