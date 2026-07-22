export const languages = {
  es: "ES",
  en: "EN",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "es";

const es = {
  "meta.title": "Fondo de Becas Laboratoria — Nadie hace esto sola.",
  "meta.description":
    "La herramienta más subestimada para impulsar una carrera profesional no es una habilidad, es una comunidad que reconoce todo tu potencial. En Laboratoria, ahí es donde todo comienza.",
  "meta.ogImageAlt":
    "Mujeres de la comunidad Laboratoria reunidas en un encuentro",
  "meta.siteName": "Fondo de Becas Laboratoria",
  "meta.keywords":
    "Laboratoria, becas, donaciones, mujeres, América Latina, desarrollo profesional, Fondo de Becas",

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
  "img.hero.alt": "Mujeres reunidas en un evento de la comunidad Laboratoria",
  "img.community.alt": "Mentora y participante de Laboratoria trabajando juntas",
  "img.gabriela.alt": "Retrato de Gabriela Luna, egresada de Laboratoria",
  "img.celebration.alt": "Egresadas de Laboratoria celebrando juntas",

  "hero.title": "Nadie hace esto sola.",
  "hero.body":
    "La herramienta más subestimada para impulsar una carrera profesional no es una habilidad, es una comunidad que reconoce todo tu potencial. En Laboratoria, ahí es donde todo comienza.",
  "hero.quote":
    '"Cuando recuperas tu voz, cambian las oportunidades que ves, y también aquellas que te atreves a perseguir."',
  "hero.attribution": "— Gabriela Luna, egresada de Laboratoria",
  "hero.cta": "Impulsa la carrera de una mujer",

  "problem.title":
    "48 millones de mujeres en América Latina están excluidas del trabajo formal.",
  "problem.body":
    "A medida que la IA transforma la economía, estas mujeres enfrentan la automatización tres veces más que los hombres, sin las redes de apoyo, las habilidades ni la confianza necesarias para adaptarse. La brecha no está en sus capacidades. Está en el acceso.",

  "building.title": "Esto es lo que estamos construyendo juntas y juntos.",
  "building.body":
    "Laboratoria es el principal programa de desarrollo profesional para mujeres en América Latina. Combinamos habilidades prácticas, acompañamiento honesto y una comunidad de compañeras y mentoras que realmente están presentes, porque conseguir un mejor empleo no depende solo de lo que sabes. También depende de quién está a tu lado cuando dudas de ti misma, cuando una entrevista no sale como esperabas o cuando eres la única mujer en la sala.",
  "building.support":
    "Tu donación hace posible que esa experiencia esté al alcance de las mujeres que más la necesitan.",
  "building.metric1.prefix": "+",
  "building.metric1.suffix": "",
  "building.metric1.end": "10000",
  "building.metric1.label": "mujeres beneficiadas",
  "building.metric2.prefix": "",
  "building.metric2.suffix": "%",
  "building.metric2.end": "73",
  "building.metric2.label": "consiguió mejores empleos",
  "building.metric3.prefix": "",
  "building.metric3.suffix": "×",
  "building.metric3.end": "3",
  "building.metric3.label": "más ingresos en promedio",

  "gift.title": "Cada aporte suma a una carrera completa.",
  "gift.tier1.amount": "$50",
  "gift.tier1.body":
    "Ayuda a cubrir los costos del programa: acompañamiento, herramientas impulsadas por IA y comunidad.",
  "gift.tier2.amount": "$750",
  "gift.tier2.body":
    "El costo real de la experiencia completa del programa para una mujer. Financia una beca completa del programa por tu cuenta o únete a otras personas para hacerlo posible.",
  "gift.support":
    "Cada dólar se destina a un fondo compartido que ayuda a las mujeres a completar todo el programa, porque nadie hace esto sola.",
  "gift.cta": "Donar",

  "impact.title": "Más formas de generar un impacto.",
  "impact.option1.title": "Haz una donación en honor a alguien",
  "impact.option1.body":
    "Haz una donación en nombre de una mujer que marcó tu carrera.",
  "impact.option2.title": "Inicia una campaña de recaudación",
  "impact.option2.body":
    "Lanza una campaña en línea, crea un círculo de donación u organiza un encuentro. Te ayudaremos a hacerlo realidad.",

  "cohort.label": "Últimas novedades del Fondo",
  "cohort.title": "Novedades de la cohorte.",
  "cohort.update1":
    "Junio de 2026 — Una nueva cohorte de 32 mujeres acaba de comenzar en Ciudad de México.",
  "cohort.update2":
    "Abril de 2026 — Seis egresadas de la cohorte de marzo comenzaron nuevos puestos de trabajo.",
  "cohort.update3":
    "Marzo de 2026 — Nuestra comunidad ahora cuenta con más de 1,500 empresas aliadas que contratan talento.",
  "cohort.footer": "Actualizaciones publicadas en cada ciclo de la cohorte.",

  "gabriela.label": "Desde la comunidad",
  "gabriela.title": "Conoce a Gabriela.",
  "gabriela.p1":
    "Durante muchos años enseñé idiomas, pero llegó un momento en el que dije: No puedo seguir haciendo esto.",
  "gabriela.p2":
    "Hacer un cambio tan grande se siente como vértigo. Me faltaba confianza y me costaba reconocer cómo mis habilidades podían trasladarse a otro campo. Sentía que había perdido mi voz. Fue entonces cuando encontré Laboratoria.",
  "gabriela.p3":
    "Lo primero que encontré fue una comunidad donde me sentí segura. Poco a poco comencé a recuperar mi confianza, aprendiendo herramientas prácticas como mejorar mi CV, utilizar IA y prepararme para entrevistas.",
  "gabriela.p4":
    "Hoy me siento capaz de entrar a cualquier espacio y alzar la voz, hacerme visible y convertirme en la protagonista de mi propia vida.",
  "gabriela.quote":
    '"Cuando recuperas tu voz, cambian las oportunidades que ves, y también aquellas que te atreves a perseguir."',
  "gabriela.attribution": "— Gabriela Luna, egresada de Laboratoria",

  "faq.title": "Preguntas frecuentes.",
  "faq.q1": "¿A dónde va mi donación?",
  "faq.a1":
    "Directamente a financiar el acceso a becas para las mujeres que lo necesitan. Laboratoria cubre el costo operativo de cada programa; tu donación cierra la brecha entre lo que las participantes pueden pagar y el costo real de ofrecer el programa.",
  "faq.q2": "¿Laboratoria es una organización sin fines de lucro registrada?",
  "faq.a2":
    "Sí. Laboratoria es una organización sin fines de lucro registrada que opera en América Latina desde 2014.",
  "faq.q3": "¿Puedo donar en honor a alguien?",
  "faq.a3":
    'Sí. Selecciona "Haz una donación en honor a alguien" y enviaremos una nota a la persona que deseas reconocer.',
  "faq.q4":
    "¿Cómo puedo iniciar un círculo de donación o una campaña de recaudación?",
  "faq.a4":
    'Selecciona "Inicia una campaña de recaudación" y nos pondremos en contacto contigo con todo lo necesario para comenzar.',
  "faq.q5": "¿Puedo configurar una donación recurrente?",
  "faq.a5":
    "Sí. Puedes elegir una donación mensual al momento de realizar el pago.",
  "faq.q6": "¿Qué es exactamente el Fondo de Becas?",
  "faq.a6":
    "Es un fondo compartido que cubre el costo del programa de Laboratoria para mujeres que, de otro modo, no podrían acceder a él. Incluye acompañamiento, herramientas impulsadas por IA y la comunidad que las acompaña durante todo el proceso. Cada donación se integra a este fondo compartido. Ninguna donación se asigna a una mujer en particular; en cambio, tu aporte se suma al de otras personas para financiar experiencias completas del programa, de manera conjunta. Es la misma idea que inspira todo lo que hacemos: nadie llega lejos sola.",

  "final.title": "Nadie hace esto sola. Ni ellas. Ni nosotros.",
  "final.body": "Únete a la comunidad que lo hace posible.",
  "final.cta": "Apoya una beca",
  "final.secondary": "Otras formas de donar ↑",

  "footer.tagline":
    "Mujeres construyendo carreras profesionales en toda América Latina.",
  "footer.knowUs": "Conócenos",
} as const;

const en: { [K in keyof typeof es]: string } = {
  "meta.title": "Laboratoria Scholarship Fund — Nobody does this alone.",
  "meta.description":
    "The most underrated career tool isn't a skill, it's a community that sees what you're capable of. At Laboratoria, that's where it starts.",
  "meta.ogImageAlt":
    "Women from the Laboratoria community gathered at an event",
  "meta.siteName": "Laboratoria Scholarship Fund",
  "meta.keywords":
    "Laboratoria, scholarships, donations, women, Latin America, professional development, Scholarship Fund",

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
  "img.hero.alt": "Women gathered at a Laboratoria community event",
  "img.community.alt": "Laboratoria mentor and participant working together",
  "img.gabriela.alt": "Portrait of Gabriela Luna, Laboratoria graduate",
  "img.celebration.alt": "Laboratoria graduates celebrating together",

  "hero.title": "Nobody does this alone.",
  "hero.body":
    "The most underrated career tool isn't a skill, it's a community that sees what you're capable of. At Laboratoria, that's where it starts.",
  "hero.quote":
    '"When you recover your voice, the opportunities you see change, and so do the ones you dare to go after."',
  "hero.attribution": "— Gabriela Luna, Laboratoria graduate",
  "hero.cta": "Support a woman's career",

  "problem.title":
    "48 million women in Latin America are locked out of formal work.",
  "problem.body":
    "As AI reshapes the economy, these women face automation at 3x the rate of men, without the networks, skills, or confidence to adapt. The gap isn't ability. It's access.",

  "building.title": "This is what we're building together.",
  "building.body":
    "Laboratoria is Latin America's leading professional development program for women. We combine real skills, honest coaching, and a community of peers and mentors who actually show up, because getting a better job isn't just about what you know. It's about who's in your corner when you doubt yourself, when the interview goes sideways, when you're the only woman in the room.",
  "building.support":
    "Your donation keeps that experience within reach for the women who need it most.",
  "building.metric1.prefix": "+",
  "building.metric1.suffix": "",
  "building.metric1.end": "10000",
  "building.metric1.label": "women served",
  "building.metric2.prefix": "",
  "building.metric2.suffix": "%",
  "building.metric2.end": "73",
  "building.metric2.label": "placed in better jobs",
  "building.metric3.prefix": "",
  "building.metric3.suffix": "x",
  "building.metric3.end": "3",
  "building.metric3.label": "average income increase",

  "gift.title": "Every gift adds up to a full career.",
  "gift.tier1.amount": "$50",
  "gift.tier1.body":
    "Helps cover program costs: coaching, AI-powered tools, community.",
  "gift.tier2.amount": "$750",
  "gift.tier2.body":
    "The real cost of one woman's complete program experience. Fund a program scholarship alone, or team up with others to get there together.",
  "gift.support":
    "Every dollar goes into a shared fund that gets women through the full program, because no one does this alone.",
  "gift.cta": "Make a gift",

  "impact.title": "More ways to make an impact.",
  "impact.option1.title": "Honor someone",
  "impact.option1.body":
    "Make a gift in the name of a woman who shaped your career.",
  "impact.option2.title": "Start a fundraiser",
  "impact.option2.body":
    "Launch an online campaign, start a giving circle, or host a gathering. We'll help you make it happen.",

  "cohort.label": "Latest from the Fund",
  "cohort.title": "Live from the cohort.",
  "cohort.update1":
    "June 2026 — A new cohort of 32 women just started in Mexico City.",
  "cohort.update2":
    "April 2026 — 6 graduates from the March cohort have started new roles.",
  "cohort.update3":
    "March 2026 — Our community now includes 1,500+ hiring partners.",
  "cohort.footer": "Updates posted each cohort cycle.",

  "gabriela.label": "From the community",
  "gabriela.title": "Meet Gabriela.",
  "gabriela.p1":
    "For many years, I taught languages, but there came a point when I said: I can't keep doing this.",
  "gabriela.p2":
    "Making such a big change feels like vertigo. I lacked confidence and struggled to recognize how my abilities could transfer into a different field. It felt like I had lost my voice. That's when I found Laboratoria.",
  "gabriela.p3":
    "The first thing I came across was a community where I felt safe. Little by little, I started rebuilding my confidence, learning practical tools like how to improve my CV, use AI, prepare for interviews.",
  "gabriela.p4":
    "Today, I feel capable of walking into a room and speaking up, making myself visible, and becoming the protagonist of my own life.",
  "gabriela.quote":
    '"When you recover your voice, the opportunities you see change, and so do the ones you dare to go after."',
  "gabriela.attribution": "— Gabriela Luna, Laboratoria graduate",

  "faq.title": "Questions, answered.",
  "faq.q1": "Where does my donation go?",
  "faq.a1":
    "Directly to scholarship access for women who need it. Laboratoria covers the operational cost of each program; your gift closes the gap between what participants can pay and what it costs to deliver.",
  "faq.q2": "Is Laboratoria a registered nonprofit?",
  "faq.a2":
    "Yes. Laboratoria is a registered nonprofit operating across Latin America since 2014.",
  "faq.q3": "Can I give in honor of someone?",
  "faq.a3":
    'Yes. Select "Honor someone" and we\'ll send a note to the person you\'re celebrating.',
  "faq.q4": "How do I start a giving circle or fundraiser?",
  "faq.a4":
    'Select "Start a fundraiser" and we\'ll be in touch with everything you need to get started.',
  "faq.q5": "Can I set up a recurring gift?",
  "faq.a5": "Yes. You can choose monthly giving at checkout.",
  "faq.q6": "What is the Scholarship Fund, exactly?",
  "faq.a6":
    "It's a shared fund that covers the cost of Laboratoria's program for women who couldn't otherwise afford it, including coaching, AI-powered tools, and the community that gets them through. Every gift goes into that shared pool. No one gift is assigned to a specific woman; instead, your gift joins others to help fund entire program experiences, together. It's the same idea behind everything we do: nobody gets there alone.",

  "final.title": "Nobody does this alone. Not them. Not us.",
  "final.body": "Join the community making it possible.",
  "final.cta": "Support a scholarship",
  "final.secondary": "Other ways to give ↑",

  "footer.tagline": "Women building careers across Latin America.",
  "footer.knowUs": "Get to know us",
};

export const ui = { es, en } as const;

export type UiKey = keyof typeof es;

export const navHrefs = {
  mission: "#mision",
  impact: "#impacto",
  donations: "#donaciones",
  stories: "#historias",
  faq: "#faq",
} as const;
