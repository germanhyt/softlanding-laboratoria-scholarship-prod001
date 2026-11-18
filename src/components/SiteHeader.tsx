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
  donateLabel: string;
  donateHref: string;
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
  donateLabel,
  donateHref,
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
    <header className="sticky top-0 z-50">
      <div className="border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 xl:px-6">
        <a href="#top" className="relative z-[60] shrink-0" onClick={close}>
          <img
            src="/images/logo-laboratoria-black.png"
            alt={logoAlt}
            className="h-7 w-auto md:h-8"
            width={1223}
            height={148}
          />
        </a>

        <div className="relative z-[60] flex items-center gap-3 md:gap-5">
          <nav className="hidden items-center gap-4 xl:gap-5 lg:flex" aria-label={navAria}>
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-story-ink transition-colors hover:text-lila-oscuro"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={donateHref}
            className="btn-cta hidden rounded-full bg-lila px-4 py-2 text-sm font-bold text-white hover:bg-lila-oscuro sm:inline-flex"
          >
            {donateLabel}
          </a>

          <div
            className="lang-toggle hidden items-center rounded-full border border-brand-ink/15 bg-white p-0.5 text-xs font-semibold tracking-wide text-brand-ink sm:inline-flex"
            role="group"
            aria-label={langSwitchLabel}
          >
            <a
              href={hrefEs}
              hrefLang="es"
              className={`rounded-full px-2.5 py-1.5 transition ${
                lang === "es" ? "bg-brand-yellow text-brand-ink" : "text-brand-ink/70 hover:text-brand-ink"
              }`}
              aria-current={lang === "es" ? "page" : undefined}
            >
              {labelEs}
            </a>
            <a
              href={hrefEn}
              hrefLang="en"
              className={`rounded-full px-2.5 py-1.5 transition ${
                lang === "en" ? "bg-brand-yellow text-brand-ink" : "text-brand-ink/70 hover:text-brand-ink"
              }`}
              aria-current={lang === "en" ? "page" : undefined}
            >
              {labelEn}
            </a>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-ink/15 bg-white text-brand-ink lg:hidden"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? closeLabel : openLabel}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? closeLabel : menuLabel}</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-full bg-brand-ink transition-transform duration-300 ease-out ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] block h-0.5 w-full bg-brand-ink transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] block h-0.5 w-full bg-brand-ink transition-transform duration-300 ease-out ${
                  open ? "translate-y-[-6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>
      </div>

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
          <a
            href={donateHref}
            onClick={close}
            className="header-mobile-link mt-6 inline-flex w-fit rounded-full bg-lila px-6 py-3 text-base font-bold text-white"
            style={{ transitionDelay: open ? `${120 + items.length * 50}ms` : "0ms" }}
          >
            {donateLabel}
          </a>
          <div
            className="header-mobile-link mt-8 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/5 p-0.5 text-sm font-semibold sm:hidden"
            role="group"
            aria-label={langSwitchLabel}
            style={{ transitionDelay: open ? `${180 + items.length * 50}ms` : "0ms" }}
          >
            <a
              href={hrefEs}
              hrefLang="es"
              className={`rounded-full px-4 py-2 transition ${
                lang === "es" ? "bg-brand-yellow text-brand-ink" : "text-white/80"
              }`}
              aria-current={lang === "es" ? "page" : undefined}
            >
              {labelEs}
            </a>
            <a
              href={hrefEn}
              hrefLang="en"
              className={`rounded-full px-4 py-2 transition ${
                lang === "en" ? "bg-brand-yellow text-brand-ink" : "text-white/80"
              }`}
              aria-current={lang === "en" ? "page" : undefined}
            >
              {labelEn}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
