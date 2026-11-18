import { useRef, useState } from "react";
import type { Story } from "../data/lilita";

type Props = {
  title: string;
  lede: string;
  prev: string;
  next: string;
  cta: string;
  ctaHref: string;
  readLabel: string;
  closeLabel: string;
  playLabel: string;
  videoName: string;
  videoMeta: string;
  items: Story[];
};

export default function StoryRail({
  title,
  lede,
  prev,
  next,
  cta,
  ctaHref,
  readLabel,
  closeLabel,
  playLabel,
  videoName,
  videoMeta,
  items,
}: Props) {
  const scroller = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState<Story | null>(null);

  const move = (dir: number) => {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.9, 420), behavior: "smooth" });
  };

  return (
    <section id="historias" className="scroll-mt-24 bg-white px-6 py-16 text-brand-ink md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center" data-reveal>
          <h2 className="font-display text-[36px] font-normal leading-[1.05] tracking-[-0.5px] text-story-ink md:text-[52px]">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-lg leading-relaxed text-story-ink md:max-w-none">
            {lede}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-[980px] flex-col items-center gap-8 md:grid md:grid-cols-[320px_minmax(0,1fr)] md:items-center md:gap-10">
          <figure className="w-full max-w-[300px] text-center md:max-w-[320px]" data-reveal>
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[20px] bg-brand-mute/60">
              {playing ? (
                <video
                  className="absolute inset-0 h-full w-full bg-brand-ink object-cover"
                  src="/images/lilita/gabriela.mp4"
                  poster="/images/lilita/gabriela-poster.jpg"
                  aria-label={playLabel}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={playLabel}
                  className="group absolute inset-0 h-full w-full cursor-pointer"
                >
                  <img
                    src="/images/lilita/gabriela-poster.jpg"
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="absolute inset-0 bg-brand-ink/25 transition-colors group-hover:bg-brand-ink/15" />
                  <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-yellow text-story-ink shadow-lg transition-transform group-hover:scale-105">
                    <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              )}
            </div>
            <figcaption className="mt-3 text-sm">
              <p className="font-bold text-story-ink">{videoName}</p>
              <p className="text-muted-foreground">{videoMeta}</p>
            </figcaption>
          </figure>

          <div className="flex w-full flex-col gap-4">
            <div className="flex justify-end gap-2 md:hidden">
              <button type="button" aria-label={prev} onClick={() => move(-1)} className="grid size-11 place-items-center rounded-full border-2 border-story-ink">
                ←
              </button>
              <button type="button" aria-label={next} onClick={() => move(1)} className="grid size-11 place-items-center rounded-full border-2 border-story-ink">
                →
              </button>
            </div>
            <div ref={scroller} className="flex snap-x gap-4 overflow-x-auto md:flex-col md:overflow-visible">
              {items.map((story) => (
                <button
                  key={story.name}
                  type="button"
                  data-story
                  onClick={() => setOpen(story)}
                  className="group w-[min(100%,22rem)] shrink-0 snap-start rounded-[20px] bg-white p-5 text-left shadow-[0_8px_30px_-12px_rgb(14_29_37/0.25)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgb(14_29_37/0.3)] md:w-full"
                >
                  <p className="text-base italic leading-relaxed text-story-ink">“{story.quote}”</p>
                  <div className="mt-4 flex items-center gap-3">
                    {story.image ? (
                      <img
                        src={story.image}
                        alt={story.imageAlt ?? ""}
                        className="h-11 w-11 shrink-0 rounded-full object-cover object-top"
                      />
                    ) : (
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-lila-soft text-sm font-bold text-story-ink">
                        {story.initial}
                      </span>
                    )}
                    <div className="min-w-0">
                      <p className="font-bold text-story-ink">{story.name}</p>
                      <p className="text-sm text-muted-foreground">{story.meta}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-right text-sm font-semibold text-lila-oscuro md:opacity-0 md:transition-opacity md:group-hover:opacity-100">
                    {readLabel} →
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-normal rounded-full bg-brand-yellow px-7 py-3 text-center text-base font-semibold text-brand-ink shadow transition-colors hover:bg-brand-yellow/90 sm:w-auto sm:px-6"
          >
            {cta}
            <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-ink/50 p-6"
          role="presentation"
          onClick={() => setOpen(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="story-dialog-title"
            className="max-w-lg rounded-[20px] bg-white p-6 text-story-ink shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <p id="story-dialog-title" className="font-display text-3xl font-normal">
              {open.name}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{open.meta}</p>
            <p className="mt-5 text-lg italic leading-relaxed">“{open.quote}”</p>
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="mt-6 rounded-full bg-brand-yellow px-5 py-2 text-sm font-semibold text-brand-ink"
            >
              {closeLabel}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
