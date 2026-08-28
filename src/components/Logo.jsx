import { Link } from "@tanstack/react-router";
import { Box } from "lucide-react";

export function Logo({ dark = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <Box className="size-8 shrink-0 text-primary" strokeWidth={1.4} />
      <span className="leading-none">
        <span
          className={`block text-xl font-extrabold tracking-tight ${dark ? "text-cream" : "text-ink"}`}
        >
          V&rsquo;RAP
        </span>
        <span className="mt-1 block text-[9px] font-medium tracking-[0.22em] text-primary">
          CUSTOM PACKAGING
        </span>
      </span>
    </Link>
  );
}
