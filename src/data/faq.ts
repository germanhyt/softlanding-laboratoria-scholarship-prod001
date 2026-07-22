import { useTranslations, type Lang } from "../i18n/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

export function getFaqItems(lang: Lang): FaqItem[] {
  const t = useTranslations(lang);
  return [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
  ];
}

export const DONATE_URL =
  "https://www.every.org/laboratoria?suggestedAmounts=40%2C100%2C200%2C300&theme_color=EE77F2&method=card%2Cbank%2Cpaypal%2Cpay&utm_campaign=donate-link#/donate/card";
