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
    titleLead: "Nobody gets",
    titleAccent: "there alone.",
    body: "Laboratoria is entering a new chapter, and the Lilita Fund invites you into a growing network of mentors, partner companies, and graduates. Together we expand the social capital of talented women in Latin America and open the door to quality jobs.",
    honor:
      "The Lilita Fund honors Lilita, grandmother of our founder Mariana and Laboratoria's first angel investor, and keeps her confidence in women's talent alive.",
    cta: "Fund a scholarship",
    secondary: "Read Lilita's story",
    imageAlt: "Illustration of Lilita, Laboratoria's first angel investor.",
  },
  program: {
    title: "This is what we are building together.",
    lede: "Skills, confidence, and community, all in one place.",
    cta: "Fund a scholarship for Activa tu Carrera",
    p1: "Laboratoria's Activa tu Carrera is the leading professional development experience for women in Latin America. It gives them the confidence, skills, and connections to reach better jobs and change their lives.",
    p2: "Through a 12-week live, cohort-based, personalized program, we combine employability coaching, AI skill-building, and a network of mentors and industry specialists so participants can land a job that matches their skills and ambition.",
    more: "Learn more about Activa tu Carrera",
    outcomesTitle: "What your gift makes possible",
    prev: "Previous card",
    next: "Next card",
    outcomes: [
      {
        title: "Live group sessions",
        body: "Peer reflection and learning that helps women put their story into words and connect with what employers are looking for.",
        stat: "88%",
        statLabel: "fewer feelings of isolation and disconnection",
      },
      {
        title: "AI job hub",
        body: "Practical tools to polish a CV, practice interviews, and prepare for every application.",
        stat: "8 in 10",
        statLabel: "know their next professional step by the end of the program",
      },
      {
        title: "Expert mentoring + 1:1 coaching",
        body: "Live sessions with industry experts who give real feedback and open their own networks.",
        stat: "85%",
        statLabel: "finish more confident they will get a job",
      },
      {
        title: "Six weeks of AI upskilling",
        body: "After a clear professional story and a search strategy, participants spend six weeks putting AI to work and build a project that shows what they can do.",
        stat: "6 weeks",
        statLabel: "of applied AI, with Claude 101 certification at the end",
      },
    ],
    quote:
      "“Laboratoria helped me realize that everything counts… it gave me the confidence I needed to take my next step with more certainty and direction, and a group of women just as ready to support one another.”",
    quoteBy: "— Mayra Solórzano, Laboratoria graduate",
  },
  stories: {
    title: "The scale of lives changed",
    lede: "Every year Laboratoria supports thousands of women across Latin America, each with her own story.",
    prev: "Previous card",
    next: "Next card",
    read: "Read her story",
    close: "Close",
    play: "Play Gabriela Luna's video",
    videoName: "Gabriela Luna",
    videoMeta: "Laboratoria graduate · Mexico",
    cta: "Help write the next success story.",
    items: [
      {
        name: "Luz Cornejo",
        meta: "Activa tu Carrera graduate · Mexico · +40% salary",
        quote:
          "I felt like I was doing everything and nothing was coming back, so when I heard about Activa tu Carrera, I decided to ask for help.",
        image: "/images/lilita/story-1.webp",
        imageAlt: "Portrait of an Activa tu Carrera graduate",
      },
      {
        name: "Jeimmy Patricia Díaz",
        meta: "Activa tu Carrera graduate · Colombia · 2.3× her income",
        quote:
          "In one word: wonderful! I found a job that gives me stability, for myself, my son, and my family.",
        image: "/images/lilita/story-2.webp",
        imageAlt: "Portrait of an Activa tu Carrera graduate",
      },
      {
        name: "Evelyn Cabrera Arias",
        meta: "Activa tu Carrera graduate · Peru",
        quote:
          "I found a community that pushes you, supports you, and reminds you that a professional path does not have to be a lonely one.",
        initial: "E",
      },
    ],
  },
  why: {
    title: "Why isn't talent enough?",
    body: "A quality job takes more than a degree. It takes the kind of support that, for many of us, arrived at no cost through a parent, a teacher, or a friend's friend. The women we accompany have to find that support on their own.",
    prev: "Previous stat",
    next: "Next stat",
    stats: [
      { value: "48M", label: "women in Latin America unemployed or underemployed" },
      { value: "52%", label: "of women in the region have formal jobs, compared with 72% of men" },
      { value: "3×", label: "more likely than men to hold roles exposed to AI automation" },
    ],
    needsLabel: "What it takes",
    needs: [
      { title: "Tell your story", body: "Turn experience into a story employers understand." },
      { title: "Strategy", body: "Know which roles to aim for and how to get there." },
      { title: "Build a network", body: "People who can make an introduction or vouch for her talent." },
      { title: "Hours of practice", body: "Mock interviews and real feedback before the real one." },
      { title: "Someone beside her", body: "A coach, mentors, and peers who believe in her potential." },
    ],
    quote:
      "“My parents paid for my education hoping a university degree would open the door to better opportunities. It didn't.”",
    quoteBy: "Jessica Esparza",
    quoteRole: "Laboratoria graduate",
    imageAlt: "Activa tu Carrera graduates celebrating together",
  },
  lilita: {
    title: "It all started with her",
    p1: "In 2014, Mariana and her co-founders had a vision: help thousands of women reach quality jobs in technology. Today, Laboratoria has reached more than 14,000 women.",
    p2: "But before Laboratoria had a name or a single graduate, someone saw what Mariana could do. Laboratoria's first angel investor was Lilita, Mariana's grandmother, a woman who believed economic independence gives women the freedom to define their own lives. She saw that same conviction in her granddaughter, and the talent to make it real, and she bet on her.",
    p3: "The Lilita Fund carries that conviction forward: when a woman has the means to build her own career, she gains the power to decide her own future. Every woman who joins Activa tu Carrera brings the talent, experience, and determination to do it, but talent alone does not always open the door. Gifts to the fund let us offer the program at no cost, so every talented woman has a chance to take her career further.",
    cta: "Honor someone who opened a door for you",
    imageAlt: "Lilita, Mariana's grandmother and Laboratoria's first angel investor.",
    drawingAlt: "Illustration of Lilita seated.",
  },
  founders: {
    kicker: "The Lilita Fund by <Laboratoria>",
    title: "Founders wall",
    body: "Our founding donors are the first to carry that confidence forward: the people who gave in the Lilita Fund's first year and opened the door for every woman who comes next.",
    groups: [
      { title: "Laboratoria's Board", body: "Our board members, giving alongside our community." },
      { title: "Laboratoria graduates", body: "Women who went through the program and now open the door for the next one." },
      { title: "Friends of Laboratoria", body: "Laboratorians, mentors, partners, and friends who believe in this work." },
    ],
    cta: "Become a founding donor",
    drawingAlt: "Illustration of Lilita.",
  },
  give: {
    title: "Every gift adds up to a complete career",
    pillLead: "US$500",
    pillRest: "fund a full scholarship.",
    support: "Gifts of every size make a difference.",
    roi: "Over 5 years, every dollar invested generates",
    roiStrong: "14x",
    roiRest: "in women's earnings.*",
    community: "Prefer to give with others? Start a fundraiser or a giving circle →",
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
        title: "Double your gift",
        body: "Many employers match donations. Search for Laboratoria in your company portal or use our Cause ID:",
        cta: "How matching works",
        href: "#faq-matching",
      },
    ],
    causeLabel: "Copy Cause ID",
    copy: "Copy",
    copied: "Copied",
    matching: "How matching works",
  },
  faqTitle: "Questions, answered",
  faq: [
    {
      question: "What is the Lilita Fund?",
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
      question: "Can I give monthly?",
      answer: "Yes. Choose the monthly option at checkout.",
    },
    {
      question: "How do I start a giving circle or fundraiser?",
      answer: "Choose “Start a fundraiser” and we'll be in touch with everything you need.",
    },
  ],
  final: {
    title: "Nobody gets there alone.",
    cta: "Fund a scholarship",
    secondary: "More ways to give",
    imageAlt: "Women from the Laboratoria community gathered together",
  },
  disclaimer:
    "*Based on Laboratoria's 2026 analysis of graduate income before and after Activa tu Carrera, using the Livelihood Impact Fund ROI method (median). Years two through five project that graduates sustain that income increase.",
};

export function getLilitaCopy(lang: Lang): Copy {
  return lang === "en" ? en : es;
}
