export function SectionHeading({
  label,
  title,
  underline = false,
  align = "center",
}: {
  label: string;
  title?: string;
  underline?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">{label}</p>
      {title ? (
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl md:text-[34px]">
          {title}
        </h2>
      ) : null}
      {underline ? (
        <span
          className={`mt-3 block h-[2px] w-14 rounded-full bg-primary ${align === "center" ? "mx-auto" : ""}`}
        />
      ) : null}
    </div>
  );
}
