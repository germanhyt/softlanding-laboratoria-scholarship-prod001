import { useTranslations, type Lang } from "../i18n/utils";

export type FaqItem = {
  question: string;
  answer: string;
  id?: string;
  steps?: { lead: string; rest?: string }[];
  note?: string;
};

export function getFaqItems(lang: Lang): FaqItem[] {
  const t = useTranslations(lang);
  return [
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
  ];
}

export const DONATE_URL =
  "https://www.pledge.to/labo-scholarship-fund?utm_campaign=scholarship-fund&utm_content=hero";

export const PLEDGE_WIDGET_ID = "nUr3k3WpngwqHxxj";
