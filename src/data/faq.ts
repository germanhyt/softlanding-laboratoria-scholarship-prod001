export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Where does my donation go?",
    answer:
      "Directly to scholarship access for women who need it. Laboratoria covers the operational cost of each program; your gift closes the gap between what participants can pay and what it costs to deliver.",
  },
  {
    question: "Is Laboratoria a registered nonprofit?",
    answer:
      "Yes. Laboratoria is a registered nonprofit operating across Latin America since 2014.",
  },
  {
    question: "Can I give in honor of someone?",
    answer:
      'Yes. Select "Honor someone" and we\'ll send a note to the person you\'re celebrating.',
  },
  {
    question: "How do I start a giving circle or fundraiser?",
    answer:
      'Select "Start a fundraiser" and we\'ll be in touch with everything you need to get started.',
  },
  {
    question: "Can I set up a recurring gift?",
    answer: "Yes. You can choose monthly giving at checkout.",
  },
  {
    question: "What is the Scholarship Fund, exactly?",
    answer:
      "It's a shared fund that covers the cost of Laboratoria's program for women who couldn't otherwise afford it, including coaching, AI-powered tools, and the community that gets them through. Every gift goes into that shared pool. No one gift is assigned to a specific woman; instead, your gift joins others to help fund entire program experiences, together. It's the same idea behind everything we do: nobody gets there alone.",
  },
];

export const DONATE_URL =
  "https://www.every.org/laboratoria?suggestedAmounts=40%2C100%2C200%2C300&theme_color=EE77F2&method=card%2Cbank%2Cpaypal%2Cpay&utm_campaign=donate-link#/donate/card";