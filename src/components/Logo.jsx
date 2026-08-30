import { Link } from "@tanstack/react-router";

import logoDark from "@/assets/vrap-logo-full.png.asset.json";
import logoLight from "@/assets/vrap-logo-light.png.asset.json";

export function Logo({ dark = false, className = "" }) {
  return (
    <Link to="/" className={`inline-flex items-center ${className}`} aria-label="V'RAP home">
      <img
        src={dark ? logoLight.url : logoDark.url}
        alt="V'RAP — Stories Worth Unboxing"
        width={495}
        height={478}
        className="h-14 w-auto object-contain md:h-16"
      />
    </Link>
  );
}
