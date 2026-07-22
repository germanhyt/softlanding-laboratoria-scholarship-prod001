export const languages = {
  es: "ES",
  en: "EN",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

export const ui = {
  es: {
    "nav.mission": "Nuestra misión",
    "nav.impact": "Impacto",
    "nav.donations": "Donaciones",
    "nav.stories": "Historias",
    "nav.faq": "Preguntas frecuentes",
    "nav.aria": "Principal",
    "nav.ariaMobile": "Móvil",
    "nav.open": "Abrir menú",
    "nav.close": "Cerrar menú",
    "nav.menu": "Menú",
    "lang.switch": "Idioma",
    "lang.es": "ES",
    "lang.en": "EN",
    "logo.alt": "Laboratoria",
  },
  en: {
    "nav.mission": "Our mission",
    "nav.impact": "Impact",
    "nav.donations": "Donations",
    "nav.stories": "Stories",
    "nav.faq": "FAQ",
    "nav.aria": "Primary",
    "nav.ariaMobile": "Mobile",
    "nav.open": "Open menu",
    "nav.close": "Close menu",
    "nav.menu": "Menu",
    "lang.switch": "Language",
    "lang.es": "ES",
    "lang.en": "EN",
    "logo.alt": "Laboratoria",
  },
} as const;

export type UiKey = keyof (typeof ui)["es"];

export const navHrefs = {
  mission: "#mision",
  impact: "#impacto",
  donations: "#donaciones",
  stories: "#historias",
  faq: "#faq",
} as const;
