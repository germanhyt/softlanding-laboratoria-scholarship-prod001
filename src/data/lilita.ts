import type { Lang } from "../i18n/ui";
import type { FaqItem } from "./faq";

const pledge = (content: string) =>
  `https://www.pledge.to/labo-scholarship-fund?utm_campaign=scholarship-fund&utm_content=${content}`;

export const links = {
  hero: pledge("hero"),
  program: pledge("program-fund"),
  nextStory: pledge("next-story"),
  honor: pledge("honor"),
  honorCard: pledge("honor-card"),
  closing: pledge("closing"),
  activa: "https://laboratoria.la/activa-tu-carrera/",
  about: "https://www.laboratoria.la",
  contact: "mailto:partnerships@laboratoria.la",
  causeId: "815071835",
} as const;

export type Story = {
  name: string;
  meta: string;
  quote: string;
  image?: string;
  imageAlt?: string;
  initial?: string;
};

export type Outcome = {
  title: string;
  body: string;
  stat: string;
  statLabel: string;
};

export type Need = { title: string; body: string };

export type Way = { title: string; body: string; cta: string; href: string };

type Copy = {
  hero: {
    kicker: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    honor: string;
    cta: string;
    secondary: string;
    imageAlt: string;
  };
  program: {
    title: string;
    lede: string;
    cta: string;
    p1: string;
    p2: string;
    more: string;
    outcomesTitle: string;
    prev: string;
    next: string;
    outcomes: Outcome[];
    quote: string;
    quoteBy: string;
  };
  stories: {
    title: string;
    lede: string;
    prev: string;
    next: string;
    read: string;
    close: string;
    play: string;
    videoName: string;
    videoMeta: string;
    cta: string;
    items: Story[];
  };
  why: {
    title: string;
    body: string;
    prev: string;
    next: string;
    stats: { value: string; label: string }[];
    needsLabel: string;
    needs: Need[];
    quote: string;
    quoteBy: string;
    quoteRole: string;
    imageAlt: string;
  };
  lilita: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    cta: string;
    imageAlt: string;
    drawingAlt: string;
  };
  founders: {
    kicker: string;
    title: string;
    body: string;
    groups: { title: string; body: string }[];
    cta: string;
    drawingAlt: string;
  };
  give: {
    title: string;
    pillLead: string;
    pillRest: string;
    support: string;
    roi: string;
    roiStrong: string;
    roiRest: string;
    community: string;
  };
  ways: { title: string; items: Way[]; causeLabel: string; copy: string; copied: string; matching: string };
  faqTitle: string;
  faq: FaqItem[];
  final: { title: string; cta: string; secondary: string; imageAlt: string };
  disclaimer: string;
};

const es: Copy = {
  hero: {
    kicker: "The Lilita Fund by <Laboratoria>",
    titleLead: "Nadie llega",
    titleAccent: "sola.",
    body: "Laboratoria entra en una nueva etapa, y el Lilita Fund te invita a sumarte a una red cada vez más grande de mentoras, empresas aliadas y egresadas. Juntos ampliamos el capital social de mujeres talentosas en América Latina y les abrimos la puerta a empleos de calidad.",
    honor:
      "El Lilita Fund honra a Lilita, abuela de nuestra fundadora Mariana y primera inversionista ángel de Laboratoria, y mantiene viva su confianza en el talento de las mujeres.",
    cta: "Financia una beca",
    secondary: "Conoce la historia de Lilita",
    imageAlt: "Ilustración de Lilita, primera inversionista ángel de Laboratoria.",
  },
  program: {
    title: "Esto es lo que estamos construyendo juntas.",
    lede: "Habilidades, confianza y comunidad, todo en un mismo lugar.",
    cta: "Financia una beca para Activa tu Carrera",
    p1: "Activa tu Carrera de Laboratoria es la experiencia líder de desarrollo profesional para mujeres en América Latina, que les entrega la confianza, las habilidades y las conexiones para acceder a mejores empleos y transformar sus vidas.",
    p2: "A través de un programa de 12 semanas, en vivo, por cohortes y personalizado, combinamos acompañamiento para la empleabilidad, fortalecimiento de habilidades de IA y acceso a una red de mentoras y especialistas de la industria, para que las participantes consigan un empleo que esté a la altura de sus habilidades y ambiciones.",
    more: "Conoce más sobre Activa tu Carrera",
    outcomesTitle: "Lo que tu donación hace posible",
    prev: "Tarjeta anterior",
    next: "Tarjeta siguiente",
    outcomes: [
      {
        title: "Sesiones grupales en vivo",
        body: "Reflexión y aprendizaje entre pares que las ayuda a poner su historia en palabras y a conectar con lo que buscan los empleadores.",
        stat: "88%",
        statLabel: "menos sentimientos de aislamiento y desconexión",
      },
      {
        title: "Hub de empleo con IA",
        body: "Herramientas prácticas para pulir su CV, practicar entrevistas y prepararse para cada postulación.",
        stat: "8 de 10",
        statLabel: "saben cuál es su siguiente paso profesional al terminar el programa",
      },
      {
        title: "Mentoría experta + coaching 1:1",
        body: "Sesiones en vivo con expertas de la industria que dan feedback real y abren las puertas de sus propias redes.",
        stat: "85%",
        statLabel: "terminan con más confianza en que conseguirán empleo",
      },
      {
        title: "Seis semanas de upskilling en IA",
        body: "Después de construir una historia profesional clara y una estrategia de búsqueda, las participantes dedican seis semanas a poner la IA a trabajar y crean un proyecto que demuestra lo que pueden hacer.",
        stat: "6 semanas",
        statLabel: "de IA aplicada, con la certificación Claude 101 al final",
      },
    ],
    quote:
      "«Laboratoria me ayudó a darme cuenta de que todo suma… me dio la confianza que necesitaba para dar mi siguiente paso con más certeza y dirección, y un grupo de mujeres con las mismas ganas de apoyarse mutuamente».",
    quoteBy: "— Mayra Solórzano, egresada de Laboratoria",
  },
  stories: {
    title: "La magnitud de las vidas transformadas",
    lede: "Cada año Laboratoria apoya a miles de mujeres en Latinoamérica, cada una con su propia historia.",
    prev: "Tarjeta anterior",
    next: "Tarjeta siguiente",
    read: "Lee su historia",
    close: "Cerrar",
    play: "Reproducir el video de Gabriela Luna",
    videoName: "Gabriela Luna",
    videoMeta: "Egresada de Laboratoria · México",
    cta: "Ayuda a escribir la próxima historia de éxito.",
    items: [
      {
        name: "Luz Cornejo",
        meta: "Egresada de Activa tu Carrera · México · +40% de salario",
        quote:
          "Sentía que lo estaba haciendo todo y nada regresaba, así que cuando supe de Activa tu Carrera, decidí pedir ayuda.",
        image: "/images/lilita/story-1.webp",
        imageAlt: "Retrato de una egresada de Activa tu Carrera",
      },
      {
        name: "Jeimmy Patricia Díaz",
        meta: "Egresada de Activa tu Carrera · Colombia · 2.3× sus ingresos",
        quote:
          "En una sola palabra: ¡maravilloso! Encontré un trabajo que me brinda estabilidad, tanto para mí como para mi hijo y mi familia.",
        image: "/images/lilita/story-2.webp",
        imageAlt: "Retrato de una egresada de Activa tu Carrera",
      },
      {
        name: "Evelyn Cabrera Arias",
        meta: "Egresada de Activa tu Carrera · Perú",
        quote:
          "Encontré una comunidad que impulsa, apoya y te recuerda que el desarrollo profesional no tiene que ser un camino solitario.",
        initial: "E",
      },
    ],
  },
  why: {
    title: "¿Por qué no basta con tener talento?",
    body: "Conseguir un empleo de calidad requiere más que un título. Requiere el tipo de apoyo que, para muchas de nosotras, llegó sin costo, por medio de un padre, una profesora o una amiga de alguien. Las mujeres a las que acompañamos tienen que encontrarlo por su cuenta.",
    prev: "Dato anterior",
    next: "Dato siguiente",
    stats: [
      { value: "48M", label: "de mujeres en América Latina desempleadas o subempleadas" },
      { value: "52%", label: "de las mujeres de la región tienen empleo formal, frente al 72% de los hombres" },
      { value: "3×", label: "más probabilidad que los hombres de ocupar puestos vulnerables a la automatización por IA" },
    ],
    needsLabel: "Lo que se necesita",
    needs: [
      { title: "Contar tu historia", body: "Convertir la experiencia en una historia que los empleadores entienden." },
      { title: "Estrategia", body: "Saber a qué roles apuntar y cómo llegar ahí." },
      { title: "Construir una red", body: "Personas que puedan hacer una presentación o respaldar su talento." },
      { title: "Horas de práctica", body: "Simulacros de entrevista y feedback real antes de la entrevista de verdad." },
      { title: "Alguien a su lado", body: "Una coach, mentoras y compañeras que creen en su potencial." },
    ],
    quote:
      "«Mis padres financiaron mi educación con la esperanza de que un título universitario me abriera las puertas a mejores oportunidades. No fue así».",
    quoteBy: "Jessica Esparza",
    quoteRole: "egresada de Laboratoria",
    imageAlt: "Egresadas de Activa tu Carrera celebrando juntas",
  },
  lilita: {
    title: "Todo empezó por ella",
    p1: "En 2014, Mariana y sus cofundadores tenían una visión: ayudar a miles de mujeres a acceder a empleos de calidad en tecnología. Hoy, Laboratoria ha impactado a más de 14,000 mujeres.",
    p2: "Pero antes de que Laboratoria tuviera un nombre o una sola egresada, alguien vio de lo que Mariana era capaz. La primera inversionista ángel de Laboratoria fue Lilita, la abuela de Mariana, una mujer que creía que la independencia económica les da a las mujeres la libertad de definir su propia vida. En su nieta vio esa misma convicción y el talento para convertirla en algo real, y decidió apostar por ella.",
    p3: "El Lilita Fund lleva esa misma convicción hacia adelante: cuando una mujer tiene los medios para construir su propia carrera, obtiene el poder de decidir su propio futuro. Cada mujer que se suma a Activa tu Carrera trae el talento, la experiencia y la determinación para lograrlo, pero el talento por sí solo no siempre abre la puerta. Las donaciones al fondo nos permiten ofrecer el programa sin costo, para que cada mujer con talento tenga la oportunidad de llevar su carrera más lejos.",
    cta: "Honra a alguien que te abrió una puerta",
    imageAlt: "Lilita, abuela de Mariana y primera inversionista ángel de Laboratoria.",
    drawingAlt: "Ilustración de Lilita sentada.",
  },
  founders: {
    kicker: "The Lilita Fund by <Laboratoria>",
    title: "Muro de Fundadores",
    body: "Nuestros donantes fundadores son los primeros en llevar esa confianza hacia adelante: las personas que donaron en el primer año del Lilita Fund y abrieron la puerta a cada mujer que viene después.",
    groups: [
      { title: "Consejo Directivo de Laboratoria", body: "Nuestras y nuestros consejeros, donando junto a nuestra comunidad." },
      { title: "Egresadas de Laboratoria", body: "Mujeres que pasaron por el programa y hoy abren la puerta a la siguiente." },
      { title: "Amigas y amigos de Laboratoria", body: "Laboratorians, mentoras, aliados y amigos que creen en este trabajo." },
    ],
    cta: "Sé donante fundador",
    drawingAlt: "Ilustración de Lilita.",
  },
  give: {
    title: "Cada donación suma para construir una carrera completa",
    pillLead: "US$500",
    pillRest: "financian una beca completa.",
    support: "Las donaciones de todos los tamaños hacen la diferencia.",
    roi: "En 5 años, cada dólar invertido genera",
    roiStrong: "14x",
    roiRest: "en los ingresos de las mujeres.*",
    community: "¿Prefieres donar en comunidad? Crea una colecta o un círculo de donantes →",
  },
  ways: {
    title: "Más formas de donar",
    items: [
      {
        title: "Honra a alguien",
        body: "Haz una donación en nombre de alguien que marcó tu carrera. Le enviaremos una nota.",
        cta: "Honrar a alguien",
        href: links.honorCard,
      },
      {
        title: "Inicia una recaudación",
        body: "Lanza una campaña en línea, crea un círculo de donantes u organiza un encuentro. Te ayudaremos a hacerlo realidad.",
        cta: "Contáctanos",
        href: links.contact,
      },
      {
        title: "Duplica tu donación",
        body: "Muchas empresas igualan las donaciones. Busca Laboratoria en el portal de donaciones de tu empresa o usa nuestro Cause ID:",
        cta: "Cómo funciona el matching",
        href: "#faq-matching",
      },
    ],
    causeLabel: "Copiar Cause ID",
    copy: "Copiar",
    copied: "Copiado",
    matching: "Cómo funciona el matching",
  },
  faqTitle: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Qué es el Lilita Fund?",
      answer:
        "Es un fondo compartido que mantiene Activa tu Carrera gratuito para mujeres que de otro modo no podrían pagarlo. Cubre acompañamiento, herramientas de IA, mentoría y la comunidad que las apoya. Las donaciones se reúnen en lugar de asignarse a una sola mujer, para financiar juntas experiencias completas en el programa.",
    },
    {
      question: "¿Mi donación es deducible de impuestos?",
      answer:
        "El comprobante lo emite la plataforma al completar la donación. Si ese aporte puede deducirse depende de tu país y de la entidad que lo recibe. Conserva el recibo del pago si lo necesitas para tu declaración.",
    },
    {
      question: "¿Cómo se usa mi donación?",
      answer:
        "Entra al fondo compartido del Lilita Fund. Con ese fondo Activa tu Carrera se ofrece sin costo: acompañamiento, herramientas de IA, mentoría y la comunidad del programa. Tu aporte no se asigna a una sola mujer; se suma al de otras personas para financiar experiencias completas.",
    },
    {
      question: "¿Laboratoria es una organización sin fines de lucro registrada?",
      answer: "Sí. Laboratoria trabaja en América Latina desde 2014.",
    },
    {
      id: "faq-matching",
      question: "¿Cómo funciona el matching de mi empresa?",
      answer: "Muchas empresas igualan las donaciones de sus colaboradores. Suele tomar unos minutos:",
      steps: [
        { lead: "Dona desde esta página." },
        {
          lead: "Búscanos en el portal de tu empresa (como Benevity, YourCause o Bright Funds)",
          rest: "por nombre o con nuestro Cause ID: 815071835.",
        },
        {
          lead: "Solicita el matching.",
          rest: "Tu empresa envía su aporte directamente a Laboratoria.",
        },
      ],
      note: "¿No sabes si tu empresa iguala donaciones? Pregúntale a tu equipo de RR. HH.",
    },
    {
      question: "¿Puedo donar en honor de alguien?",
      answer: "Sí. Elige «Honra a alguien» y enviaremos una nota a la persona que deseas reconocer.",
    },
    {
      question: "¿Puedo donar de forma recurrente?",
      answer: "Sí. Elige la opción mensual al finalizar tu donación.",
    },
    {
      question: "¿Cómo inicio un círculo de donantes o una recaudación?",
      answer: "Elige «Inicia una recaudación» y nos pondremos en contacto contigo con todo lo que necesitas.",
    },
  ],
  final: {
    title: "Nadie llega sola.",
    cta: "Financia una beca",
    secondary: "Más formas de donar",
    imageAlt: "Mujeres de la comunidad Laboratoria reunidas en un encuentro",
  },
  disclaimer:
    "*Basado en el análisis 2026 de Laboratoria sobre los ingresos de las egresadas antes y después de Activa tu Carrera, con la metodología de ROI del Livelihood Impact Fund (mediana). Los años dos a cinco proyectan que las egresadas sostienen ese aumento de ingresos.",
};

const en: Copy = {
  hero: {
    kicker: "The Lilita Fund by <Laboratoria>",
    titleLead: "Nobody does",
    titleAccent: "this alone.",
    body: "As Laboratoria enters a new chapter, the Lilita Fund invites individual donors to join a growing network of mentors, hiring partners and graduates, expanding the social capital of talented women across Latin America and opening doors to quality jobs.",
    honor:
      "The Lilita Fund honors Laboratoria's first angel investor, Mariana's grandmother Lilita, by carrying her belief in talented women forward.",
    cta: "Give a scholarship",
    secondary: "Learn more about Lilita's story",
    imageAlt: "Illustration of Lilita, Laboratoria's first angel investor.",
  },
  program: {
    title: "This is what we're building together.",
    lede: "",
    cta: "Fund a scholarship to Activa tu Carrera",
    p1: "Laboratoria's Activa tu Carrera is Latin America's leading professional development experience for women, equipping them with the confidence, skills, and connections to access better jobs and transform their lives.",
    p2: "",
    more: "Learn more about Activa tu Carrera",
    outcomesTitle: "What your gift makes possible",
    prev: "Previous card",
    next: "Next card",
    outcomes: [
      {
        title: "Live group sessions",
        body: "Reflection and peer learning that help them put words into their story and connect to what employers are looking for.",
        stat: "88%",
        statLabel: "reduction in feelings of isolation and disconnection",
      },
      {
        title: "AI-powered Job Hub",
        body: "Hands-on tools to sharpen their CV, practice interviews and prep for every application.",
        stat: "8 in 10",
        statLabel: "know their next career step by the end of the program",
      },
      {
        title: "Expert mentoring + 1:1 coaching",
        body: "Live sessions with industry experts who give real feedback and open doors to their own networks.",
        stat: "85%",
        statLabel: "leave more confident they'll get hired",
      },
      {
        title: "Six weeks of AI upskilling",
        body: "After building a clear career story and job search strategy, participants spend six weeks putting AI to work, creating a project that shows what they can do.",
        stat: "6 weeks",
        statLabel: "of applied AI, ending with the Claude 101 certification",
      },
    ],
    quote:
      "“Laboratoria helped me realize that everything adds up… it gave me the confidence I needed to take my next step with more certainty and direction, and a group of women with the same drive to support each other.”",
    quoteBy: "— Mayra Solórzano, Laboratoria graduate",
  },
  stories: {
    title: "The Enormity of Lives Transformed",
    lede: "Every year, Laboratoria supports thousands of women across Latin America, each with their own unique story",
    prev: "Previous card",
    next: "Next card",
    read: "Read her story",
    close: "Close",
    play: "Play Gabriela Luna's video",
    videoName: "Gabriela Luna",
    videoMeta: "Laboratoria graduate · México",
    cta: "Help write the next success story.",
    items: [
      {
        name: "Luz Cornejo",
        meta: "Activa tu Carrera graduate · México · +40% salary",
        quote:
          "I felt like I was doing everything and nothing was coming back, so when I heard about Activa tu Carrera, I decided to ask for help.",
        image: "/images/lilita/story-1.webp",
        imageAlt: "Portrait of an Activa tu Carrera graduate",
      },
      {
        name: "Jeimmy Patricia Díaz",
        meta: "Activa tu Carrera graduate · Colombia · 2.3× income",
        quote:
          "In one word: wonderful. I found a job that gives me stability, for me, my son and my family.",
        image: "/images/lilita/story-2.webp",
        imageAlt: "Portrait of an Activa tu Carrera graduate",
      },
      {
        name: "Evelyn Cabrera Arias",
        meta: "Activa tu Carrera graduate · Perú",
        quote:
          "I found a community that pushes you, supports you, and reminds you that professional growth doesn't have to be a lonely path.",
        initial: "E",
      },
    ],
  },
  why: {
    title: "Why isn’t talent enough?",
    body: "Landing a quality job takes more than a degree. It takes the kind of support that, for many of us, came for free through a parent, a professor, or a friend-of-a-friend. The women we serve have to find it on their own.",
    prev: "Previous stat",
    next: "Next stat",
    stats: [
      { value: "48M", label: "women in Latin America unemployed or underemployed" },
      { value: "52%", label: "of women in the region hold formal jobs vs 72% of men" },
      { value: "3×", label: "more likely than men to occupy roles vulnerable to AI automation" },
    ],
    needsLabel: "What it takes",
    needs: [
      { title: "Storytelling", body: "Turning experience into a story employers understand." },
      { title: "Strategy", body: "Knowing which roles to aim for and how to get there." },
      { title: "Building a network", body: "People who can make an introduction or vouch for their talent." },
      { title: "Hours of practice", body: "Mock interviews and real feedback before the real thing." },
      { title: "Someone in their corner", body: "A coach, mentors and peers who believe in their potential." },
    ],
    quote:
      "My parents financed my education hoping that a university degree would open doors to better opportunities. It didn’t.",
    quoteBy: "Jessica Esparza",
    quoteRole: "Laboratoria graduate",
    imageAlt: "Activa tu Carrera graduates celebrating together",
  },
  lilita: {
    title: "The Story Behind the Fund",
    p1: "In 2014, Mariana and her co-founders had a vision: to help thousands of women access quality jobs in tech. Today, Laboratoria has impacted more than 14,000 women.",
    p2: "But before Laboratoria had a name or a single graduate, someone saw what Mariana was capable of. Laboratoria's first angel investor was Lilita, Mariana's grandmother, a woman who believed that economic independence gives women the freedom to shape their own lives. In her granddaughter, she saw both that conviction and the talent to turn it into something real, and she chose to bet on her.",
    p3: "The Lilita Fund carries that same belief forward: that when a woman has the means to build her own career, she gains the power to decide her own future. Every woman who joins Activa tu Carrera brings the talent, experience, and drive to get there, but talent alone doesn't always open the door. Gifts to the Lilita Fund allow us to offer the program at no cost, so every woman with the talent gets the chance to take her career further.",
    cta: "Honor someone who opened a door for you",
    imageAlt: "Lilita, Mariana's grandmother and Laboratoria's first angel investor.",
    drawingAlt: "Illustration of Lilita seated.",
  },
  founders: {
    kicker: "The Lilita Fund by <Laboratoria>",
    title: "Wall of Founders",
    body: "Our founding donors are the first to carry that belief forward: the people who gave in the Lilita Fund's first year and opened the door for every woman who comes next.",
    groups: [
      { title: "Laboratoria Board", body: "Our board members, giving alongside our community." },
      { title: "Laboratoria graduates", body: "Women who've been through the program, opening the door for the next." },
      { title: "Friends of Laboratoria", body: "Laboratorians, mentors, partners, and friends who believe in this work." },
    ],
    cta: "Become a founding donor",
    drawingAlt: "Illustration of Lilita.",
  },
  give: {
    title: "Every gift adds up to a full career",
    pillLead: "$500",
    pillRest: "funds a full scholarship.",
    support: "Gifts of every size make a difference.",
    roi: "Over 5 years, every dollar invested generates",
    roiStrong: "14x",
    roiRest: "in women's income.*",
    community: "Prefer to give with others? Start a fundraiser or giving circle →",
  },
  ways: {
    title: "More ways to give",
    items: [
      {
        title: "Honor someone",
        body: "Make a gift in the name of someone who shaped your career. We'll send them a note.",
        cta: "Honor someone",
        href: links.honorCard,
      },
      {
        title: "Start a fundraiser",
        body: "Launch an online campaign, start a giving circle, or host a gathering. We'll help you make it happen.",
        cta: "Contact us",
        href: links.contact,
      },
      {
        title: "Employee Matching",
        body: "Many employers match donations. Find Laboratoria in your company's giving portal, or use our Cause ID:",
        cta: "How matching works",
        href: "#faq-matching",
      },
    ],
    causeLabel: "Copy Cause ID",
    copy: "Copy",
    copied: "Copied",
    matching: "How matching works",
  },
  faqTitle: "FAQ",
  faq: [
    {
      question: "What is the Scholarship Fund (the Lilita Fund)?",
      answer:
        "A shared fund that keeps Activa tu Carrera free for women who otherwise couldn't afford it. It covers coaching, AI tools, mentoring, and the community that supports them. Gifts are pooled rather than assigned to one woman, so together they fund complete program experiences.",
    },
    {
      question: "Is my gift tax-deductible?",
      answer:
        "The payment platform issues the receipt when you complete your gift. Whether it is deductible depends on your country and on the entity that receives it. Keep the receipt if you need it for your taxes.",
    },
    {
      question: "How is my gift used?",
      answer:
        "It goes into the Lilita Fund's shared pool. That fund keeps Activa tu Carrera free: coaching, AI tools, mentoring, and the program community. Your gift is not assigned to one woman; it joins others to fund complete experiences.",
    },
    {
      question: "Is Laboratoria a registered nonprofit?",
      answer: "Yes. Laboratoria has worked across Latin America since 2014.",
    },
    {
      id: "faq-matching",
      question: "How does employer matching work?",
      answer: "Many employers match employee gifts. It usually takes a few minutes:",
      steps: [
        { lead: "Give from this page." },
        {
          lead: "Find us in your company portal (such as Benevity, YourCause, or Bright Funds)",
          rest: "by name or with Cause ID 815071835.",
        },
        {
          lead: "Request the match.",
          rest: "Your employer sends its gift directly to Laboratoria.",
        },
      ],
      note: "Not sure if your company matches? Ask your HR team.",
    },
    {
      question: "Can I give in honor of someone?",
      answer: "Yes. Choose “Honor someone” and we'll send a note to the person you want to recognize.",
    },
    {
      question: "Can I set up a recurring gift?",
      answer: "Yes. Choose the monthly option at checkout.",
    },
    {
      question: "How do I start a giving circle or fundraiser?",
      answer: "Choose “Start a fundraiser” and we'll be in touch with everything you need.",
    },
  ],
  final: {
    title: "Nobody does this alone.",
    cta: "Give a scholarship",
    secondary: "Other ways to give",
    imageAlt: "Women from the Laboratoria community gathered together",
  },
  disclaimer:
    "*Based on Laboratoria's 2026 analysis of graduates' income before and after Activa tu Carrera, using the Livelihood Impact Fund's ROI methodology (median). Years two to five are projected from 12-month follow-up data.",
};

const pt: Copy = {
  hero: {
    kicker: "Lilita Fund por <Laboratoria>",
    titleLead: "Ninguém precisa avançar",
    titleAccent: "sozinha.",
    body: "A Laboratoria está começando um novo capítulo, e o Lilita Fund convida você a fazer parte dele. Ao doar, você se junta a uma rede crescente de mentoras, empresas parceiras e egressas que abre portas reais para mulheres talentosas em toda a América Latina. Juntos, ampliamos suas conexões e transformamos potencial em empregos de qualidade.",
    honor:
      "O Lilita Fund leva o nome da Lilita, primeira investidora-anjo da Laboratoria e avó de Mariana Costa, nossa cofundadora. Com ele, seguimos apostando no talento e no futuro das mulheres de toda a América Latina.",
    cta: "Doe agora →",
    secondary: "Conheça a história da Lilita",
    imageAlt: "Ilustração de Lilita, primeira investidora-anjo da Laboratoria.",
  },
  program: {
    title: "Construímos juntas o futuro.",
    lede: "Habilidades, confiança e comunidade, tudo em um só lugar.",
    cta: "Doe uma bolsa para o Ativa sua Carreira →",
    p1: "O Ativa sua Carreira, da Laboratoria, é a principal experiência de desenvolvimento profissional para mulheres na América Latina. Por meio do programa, elas ganham confiança, habilidades e conexões para conquistar melhores oportunidades de emprego e transformar o rumo de suas trajetórias.",
    p2: "Em um programa de 12 semanas, com turmas, encontros semanais ao vivo e acompanhamento personalizado, as participantes recebem orientação para a busca por vagas de trabalho, formação em IA e Dados e acesso a uma rede qualificada de mentores, coaches e especialistas do setor. Assim, cada participante sai mais preparada para buscar um trabalho à altura de suas habilidades, sonhos e ambições.",
    more: "Saiba mais sobre o Ativa sua Carreira",
    outcomesTitle: "O que sua doação torna possível?",
    prev: "Cartão anterior",
    next: "Próximo cartão",
    outcomes: [
      {
        title: "Encontros em grupo ao vivo",
        body: "Troca e aprendizado entre colegas para colocar a própria história em palavras e conectar a própria experiência ao que as empresas procuram.",
        stat: "88%",
        statLabel: "de redução nos sentimentos de isolamento e desconexão",
      },
      {
        title: "Central de empregos com IA",
        body: "Ferramentas práticas para aprimorar o currículo e o perfil no LinkedIn, além de simulações de entrevistas com profissionais de recrutamento e orientações que ajudam a se preparar para cada candidatura.",
        stat: "8 em 10",
        statLabel: "sabem qual é o próximo passo na carreira ao final do programa",
      },
      {
        title: "Mentoria especializada + orientação individual",
        body: "Encontros on-line, ao vivo, com especialistas do setor que dão feedbacks personalizados e sinceros e abrem portas para suas próprias redes de contatos.",
        stat: "85%",
        statLabel: "das mulheres saem mais confiantes de que vão conseguir um emprego",
      },
      {
        title: "Seis semanas de atualização de habilidades em IA",
        body: "Depois de construir uma história pessoal clara e uma estratégia de busca de oportunidades, as participantes desenvolvem suas habilidades técnicas em IA de forma prática, por meio de um projeto.",
        stat: "6 semanas",
        statLabel: "de IA aplicada, com a certificação Claude 101 ao final",
      },
    ],
    quote:
      "“A Laboratoria me ajudou a perceber que tudo conta… me deu a confiança de que eu precisava para dar o próximo passo com mais certeza e direção, e um grupo de mulheres com a mesma vontade de apoiar umas às outras.”",
    quoteBy: "— Mayra Solórzano, egressa da Laboratoria",
  },
  stories: {
    title: "Histórias que transformam",
    lede: "Todos os anos, a Laboratoria apoia milhares de mulheres em toda a América Latina. Cada uma tem uma história única. Conheça algumas delas:",
    prev: "Cartão anterior",
    next: "Próximo cartão",
    read: "Leia sua história",
    close: "Fechar",
    play: "Reproduzir o vídeo de Gabriela Luna",
    videoName: "Gabriela Luna",
    videoMeta: "Egressa da Laboratoria · México",
    cta: "Ajude a escrever a próxima história de sucesso.",
    items: [
      {
        name: "Luz Cornejo",
        meta: "egressa do Ativa sua Carreira · México · +40% de salário",
        quote: "Eu sentia que fazia de tudo e nada dava resultado. Quando soube do Ativa sua Carreira, decidi pedir ajuda.",
        image: "/images/lilita/story-1.webp",
        imageAlt: "Retrato de Luz Cornejo, egressa do Ativa sua Carreira",
      },
      {
        name: "Jeimmy Patricia Díaz",
        meta: "egressa do Ativa sua Carreira · Colômbia · 2,3× sua renda",
        quote: "Em uma palavra: maravilhoso. Encontrei um trabalho que traz estabilidade não somente para mim, mas também para o meu filho e para a minha família.",
        image: "/images/lilita/story-2.webp",
        imageAlt: "Retrato de Jeimmy Patricia Díaz, egressa do Ativa sua Carreira",
      },
      {
        name: "Evelyn Cabrera Arias",
        meta: "egressa do Ativa sua Carreira · Peru",
        quote: "Encontrei uma comunidade que incentiva, apoia e lembra que crescer na carreira não precisa ser um caminho solitário.",
        initial: "E",
      },
    ],
  },
  why: {
    title: "Por que somente o talento não basta?",
    body: "Num mercado de trabalho em constante transformação, conquistar um emprego de qualidade exige mais que um diploma. Exige aquele apoio que, para muitas de nós, veio de graça: da família, de uma professora, de alguém conhecido ou até mesmo de uma amiga. Muitas vezes, as mulheres que apoiamos precisam construir tudo isso sozinhas.",
    prev: "Dado anterior",
    next: "Próximo dado",
    stats: [
      { value: "48 mi", label: "de mulheres na América Latina estão desempregadas ou subempregadas" },
      { value: "52%", label: "das mulheres da região têm empregos formais, contra 72% dos homens" },
      { value: "3×", label: "mais chances que os homens de ocupar cargos vulneráveis à automação por IA" },
    ],
    needsLabel: "O que é preciso",
    needs: [
      { title: "Contar a sua história", body: "Transformar a experiência em uma narrativa que as empresas entendam." },
      { title: "Estratégia", body: "Saber quais vagas buscar e como chegar até elas." },
      { title: "Networking", body: "Uma rede de pessoas que possam fazer uma apresentação ou recomendar seu talento." },
      { title: "Experiência prática", body: "Simulações de entrevistas com feedback sincero, para chegar preparada à entrevista de verdade." },
      { title: "Apoio", body: "Facilitadoras, mentoras, coaches e colegas que acreditam no seu potencial." },
    ],
    quote:
      "Meus pais pagaram meus estudos na esperança de que um diploma universitário abrisse portas para oportunidades melhores. Não foi bem assim.",
    quoteBy: "Jessica Esparza",
    quoteRole: "egressa da Laboratoria",
    imageAlt: "Egressas do Ativa sua Carreira celebram juntas.",
  },
  lilita: {
    title: "O primeiro “sim”",
    p1: "Em 2014, Mariana e as pessoas que fundaram a Laboratoria com ela tinham uma visão: impulsionar a carreira de milhares de mulheres e ajudá-las a conquistar empregos de qualidade em tecnologia. Hoje, a Laboratoria já impactou mais de 14.000 mulheres.",
    p2: "Mas antes de a Laboratoria ter um nome ou uma única egressa, alguém enxergou o potencial de Mariana. A primeira investidora-anjo da Laboratoria foi Lilita, sua avó, uma mulher que acreditava que a independência econômica dá às mulheres liberdade e autonomia para escolher o rumo de suas próprias vidas. Na neta, ela viu essa mesma convicção e o talento para torná-la realidade. E escolheu apostar nela.",
    p3: "O Lilita Fund leva adiante essa mesma confiança: quando uma mulher tem os meios para construir sua carreira, ela ganha o poder de decidir seu futuro. Cada mulher que chega ao Ativa sua Carreira traz consigo o talento, a experiência e a vontade de ir além. Mas o talento, sozinho, nem sempre é suficiente. Com as doações ao Lilita Fund, continuaremos oferecendo o programa de forma totalmente gratuita para as participantes, para que toda mulher talentosa tenha a chance de avançar na carreira.",
    cta: "Homenageie alguém que acreditou em você →",
    imageAlt: "Lilita, avó de Mariana e primeira investidora-anjo da Laboratoria.",
    drawingAlt: "Ilustração de Lilita sentada.",
  },
  founders: {
    kicker: "Lilita Fund por <Laboratoria>",
    title: "Nossa comunidade fundadora",
    body: "A comunidade fundadora é a primeira a levar essa confiança adiante: pessoas que doaram no primeiro ano do Lilita Fund e abriram a porta para cada mulher que vem depois.",
    groups: [
      { title: "Conselho da Laboratoria", body: "Quem faz parte do nosso conselho doa junto com nossa comunidade." },
      { title: "Egressas da Laboratoria", body: "Mulheres que passaram pelo programa e abrem a porta para as próximas turmas." },
      {
        title: "Amigas e amigos da Laboratoria",
        body: "Pessoas da Laboratoria, mentoras, organizações parceiras e amizades que acreditam neste trabalho.",
      },
    ],
    cta: "Faça parte da comunidade fundadora",
    drawingAlt: "Ilustração de Lilita.",
  },
  give: {
    title: "Cada doação soma para uma carreira inteira",
    pillLead: "US$ 500",
    pillRest: "financiam uma bolsa completa.",
    support: "Toda doação, de qualquer valor, faz a diferença.",
    roi: "Em 5 anos, cada dólar investido gera",
    roiStrong: "US$ 14",
    roiRest: "a mais de renda para as mulheres.*",
    community: "Prefere doar em comunidade? Crie uma campanha ou um círculo de doação →",
  },
  ways: {
    title: "Outras formas de doar",
    items: [
      {
        title: "Homenageie alguém",
        body: "Faça uma doação em nome de alguém que marcou sua carreira. Avisaremos essa pessoa sobre a sua homenagem.",
        cta: "Homenageie alguém",
        href: links.honorCard,
      },
      {
        title: "Crie uma campanha de arrecadação",
        body: "Lance uma campanha on-line, crie um círculo de doação virtual ou organize um encontro. Nós ajudamos você a tirar essa ideia do papel!",
        cta: "Fale com a gente",
        href: links.contact,
      },
      {
        title: "Dobre sua doação",
        body: "Muitas empresas igualam as doações de suas equipes, e a sua pode valer o dobro! Encontre a Laboratoria no portal de doações da sua empresa ou use nosso Cause ID:",
        cta: "Como funciona a doação equivalente",
        href: "#faq-matching",
      },
    ],
    causeLabel: "Copiar Cause ID",
    copy: "Copiar",
    copied: "Copiado",
    matching: "Como funciona a doação equivalente",
  },
  faqTitle: "Perguntas frequentes",
  faq: [
    {
      question: "O que é o Lilita Fund?",
      answer:
        "É um fundo compartilhado que mantém o programa gratuito para mulheres que, de outro modo, não poderiam pagá-lo. Cobre orientação, ferramentas de IA, mentoria e a comunidade que as apoia. As doações se reúnem em vez de serem destinadas a uma única mulher, para financiar juntas experiências completas no programa.",
    },
    {
      question: "Minha doação pode ser deduzida do imposto?",
      answer:
        "O comprovante é emitido pela plataforma ao concluir a doação. Se esse aporte pode ser deduzido depende do seu país e da entidade que o recebe. Guarde o recibo do pagamento se precisar dele na declaração.",
    },
    {
      question: "Como minha doação é usada?",
      answer:
        "Ela entra no fundo compartilhado do Lilita Fund. Com esse fundo, o programa é oferecido sem custo: orientação, ferramentas de IA, mentoria e a comunidade. Seu aporte não é destinado a uma única mulher; ele se soma ao de outras pessoas para financiar experiências completas.",
    },
    {
      question: "A Laboratoria é uma organização sem fins lucrativos registrada?",
      answer:
        "Sim. Nos Estados Unidos, a Laboratoria é uma organização sem fins lucrativos registrada na categoria 501(c)(3), com EIN 81-5071835. Doações feitas nos EUA são dedutíveis do imposto de renda na medida permitida por lei. Na América Latina, a Laboratoria está registrada legalmente como organização sem fins lucrativos no México, Peru, Chile, Colômbia e Brasil. Atuamos na região desde 2014.",
    },
    {
      id: "faq-matching",
      question: "Como funciona a doação equivalente da minha empresa?",
      answer: "Muitas empresas igualam as doações de suas equipes. Costuma levar alguns minutos:",
      steps: [
        { lead: "Doe nesta página." },
        {
          lead: "Procure a Laboratoria no portal da sua empresa (como Benevity, YourCause ou Bright Funds)",
          rest: "pelo nome ou com o Cause ID: 815071835.",
        },
        {
          lead: "Solicite a doação equivalente.",
          rest: "Sua empresa envia o aporte diretamente à Laboratoria.",
        },
      ],
      note: "Não sabe se a sua empresa faz doação equivalente? Pergunte ao time de RH.",
    },
    {
      question: "Posso doar em homenagem a alguém?",
      answer: "Sim. Escolha «Homenageie alguém» e enviaremos uma mensagem à pessoa que você quer reconhecer.",
    },
    {
      question: "Posso fazer uma doação recorrente?",
      answer: "Sim. Escolha a opção mensal ao concluir sua doação.",
    },
    {
      question: "Como crio um círculo de doação ou uma campanha de arrecadação?",
      answer: "Escolha «Crie uma campanha de arrecadação» e entraremos em contato com tudo o que você precisa.",
    },
  ],
  final: {
    title: "Ninguém precisa avançar sozinha.",
    cta: "Doe agora",
    secondary: "Outras formas de doar",
    imageAlt: "Egressas da Laboratoria celebram juntas",
  },
  disclaimer:
    "*Com base na análise de 2026 da Laboratoria sobre a renda das egressas antes e depois do Ativa sua Carreira, com a metodologia de retorno sobre o investimento do Livelihood Impact Fund (mediana). Os anos dois a cinco são projetados a partir dos dados de acompanhamento dos primeiros 12 meses.",
};

export function getLilitaCopy(lang: Lang): Copy {
  if (lang === "en") return en;
  if (lang === "pt") return pt;
  return es;
}
