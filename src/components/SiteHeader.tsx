import { useEffect, useId, useState } from "react";

export type NavItem = {
  label: string;
  href: string;
};

type Props = {
  lang: "es" | "en";
  logoAlt: string;
  navAria: string;
  navAriaMobile: string;
  openLabel: string;
  closeLabel: string;
  menuLabel: string;
  langSwitchLabel: string;
  labelEs: string;
  labelEn: string;
  hrefEs: string;
  hrefEn: string;
  items: NavItem[];
};

export default function SiteHeader({
  lang,
  logoAlt,
  navAria,
  navAriaMobile,
  openLabel,
  closeLabel,
  menuLabel,
  langSwitchLabel,
  labelEs,
  labelEn,
  hrefEs,
  hrefEn,
  items,
}: Props) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 md:gap-6 md:py-6">
        <a href="#top" className="relative z-[60] shrink-0" onClick={close}>
          <img
            src="/images/logo-laboratoria.png"
            alt={logoAlt}
            className="h-7 w-auto md:h-8 mix-blend-screen"
            width={400}
            height={49}
          />
        </a>

        <div className="relative z-[60] flex items-center gap-3 md:gap-5">
          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label={navAria}
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/95 transition-opacity hover:opacity-80"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Language toggle */}
          <div
            className="lang-toggle inline-flex items-center rounded-full border border-white/25 bg-white/5 p-0.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm"
            role="group"
            aria-label={langSwitchLabel}
          >
            <a
              href={hrefEs}
              hrefLang="es"
              className={`rounded-full px-2.5 py-1.5 transition ${
                lang === "es"
                  ? "bg-brand-yellow text-brand-ink"
                  : "text-white/80 hover:text-white"
              }`}
              aria-current={lang === "es" ? "page" : undefined}
            >
              {labelEs}
            </a>
            <a
              href={hrefEn}
              hrefLang="en"
              className={`rounded-full px-2.5 py-1.5 transition ${
                lang === "en"
                  ? "bg-brand-yellow text-brand-ink"
                  : "text-white/80 hover:text-white"
              }`}
              aria-current={lang === "en" ? "page" : undefined}
            >
              {labelEn}
            </a>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white backdrop-blur-sm lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? closeLabel : openLabel}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? closeLabel : menuLabel}</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-full bg-white transition-transform duration-300 ease-out ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] block h-0.5 w-full bg-white transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] block h-0.5 w-full bg-white transition-transform duration-300 ease-out ${
                  open ? "translate-y-[-6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile panel — clip-path circle expand */}
      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={`header-mobile-panel fixed inset-0 z-50 bg-brand-ink lg:hidden ${
          open ? "is-open pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <nav
          className="flex h-full flex-col justify-center gap-2 px-8 pb-16 pt-24"
          aria-label={navAriaMobile}
        >
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={close}
              className="header-mobile-link border-b border-white/10 py-4 text-2xl font-semibold text-white transition-opacity hover:opacity-80"
              style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
            >
              {item.label}
            </a>
          ))}

          <div
            className="header-mobile-link mt-8 inline-flex w-fit items-center rounded-full border border-white/20 p-0.5 text-sm font-semibold"
            style={{ transitionDelay: open ? `${120 + items.length * 50}ms` : "0ms" }}
          >
            <a
              href={hrefEs}
              hrefLang="es"
              className={`rounded-full px-4 py-2 ${
                lang === "es"
                  ? "bg-brand-yellow text-brand-ink"
                  : "text-white/80"
              }`}
            >
              {labelEs}
            </a>
            <a
              href={hrefEn}
              hrefLang="en"
              className={`rounded-full px-4 py-2 ${
                lang === "en"
                  ? "bg-brand-yellow text-brand-ink"
                  : "text-white/80"
              }`}
            >
              {labelEn}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}