export function PageBanner({ label, title, intro, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {image ? (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          width={1920}
          height={640}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <span className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/45" />

      <div className="relative container-page py-16 text-center md:py-20">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">{label}</p>
        <h1 className="mx-auto mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-cream sm:text-4xl md:text-[42px]">
          {title}
        </h1>
        <span className="mx-auto mt-4 block h-[2px] w-14 rounded-full bg-primary" />
        {intro ? (
          <p className="mx-auto mt-5 max-w-xl text-[13px] leading-relaxed text-cream/75">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
