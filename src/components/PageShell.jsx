import { CTA } from "./CTA";
import { PageBanner } from "./PageBanner";

export function PageShell({ label, title, intro, image, children }) {
  return (
    <>
      <PageBanner label={label} title={title} intro={intro} image={image} />
      <div className="pt-12 md:pt-20">{children}</div>
      <CTA />
    </>
  );
}
