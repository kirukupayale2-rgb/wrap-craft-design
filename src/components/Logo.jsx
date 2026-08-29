import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/vrap-logo.png.asset.json";

export function Logo({ dark = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img
        src={logoAsset.url}
        alt="V'RAP custom packaging logo"
        width={64}
        height={64}
        className="size-10 shrink-0 object-contain mix-blend-multiply"
        style={dark ? { mixBlendMode: "normal" } : undefined}
      />
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
