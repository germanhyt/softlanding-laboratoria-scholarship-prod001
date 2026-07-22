import { useId, useState } from "react";
import type { FaqItem } from "../data/faq";

type Props = {
  items: FaqItem[];
  title: string;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function FaqAccordion({ items, title }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-white py-24 px-6"
      data-reveal
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          {title}
        </h2>
        <div className="mt-10">
          {items.map((item, index) => {
            const open = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;

            return (
              <div key={item.question} className="border-b border-border">
                <h3 className="flex">
                  <button
                    type="button"
                    id={buttonId}
                    aria-controls={panelId}
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex flex-1 items-center justify-between cursor-pointer transition-colors hover:underline text-left text-lg font-semibold py-5"
                  >
                    {item.question}
                    <Chevron open={open} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-8 text-sm leading-relaxed text-brand-ink/80">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}