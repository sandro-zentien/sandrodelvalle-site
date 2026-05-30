export const t = {
  en: {
    nav: {
      links: [
        { href: '#about',   label: 'About'    },
        { href: '#projects', label: 'Projects' },
        { href: '#blog',    label: 'Writing'  },
        { href: '#contact', label: 'Contact'  },
      ],
    },

    hero: {
      hud:    'DIAGNOSTIC :: IDENTITY_VERIFIED',
      tagline: 'Engineer.  Founder.  Builder.',
      cta:    'View My Work',
      status: 'SYS_STATUS :: ONLINE',
      scroll: 'SCROLL',
    },

    about: {
      tag:       '01 :: About',
      hudLabel:  'UNIT_PROFILE',
      hudStatus: 'ACTIVE',
      h1: 'Born in Cuba.',
      h2: 'Building',
      h3: 'from',
      h4: 'Miami',
      bio1: "At five years old, my neighbor had a computer — and in Cuba, that was a secret. Every day I'd cross the street, walk through rooms lined with her father's paintings, and find my way to the back room where that machine lived. I'd sit there for hours, learning to make it do things. That feeling never left.",
      bio2: "I've been in every room where software is born — the whiteboard, the first commit, the production deploy, the post-mortem, and the quiet moment when you turn the lights off on something you built. At Buildium, a RealPage company, I worked on consumer-facing products — customer portals, e-signature flows, lease management, A/B testing, and frontend design as part of their Frontend chapter. As a Principal Engineer at DASI, I've led full-stack implementations, managed teams, defined processes, and built DevOps pipelines across a wide range of systems and technologies.",
      bio3: "Whether it's my own ventures or a lean team at work, I own the entire picture — the idea, the architecture, the code, the infrastructure, and the deployment. When the team is small, there are no handoffs. You do it all. I've been that person more than once, and I know what it takes to take something from nothing to running in production, end to end.",
      bio4: "I believe software should solve a real problem, feel personal, and get out of your way. When I'm not at a keyboard, I'm behind a drum kit, on a baseball diamond, snowboarding through mountains, or in the backyard with my two daughters, my dog, and my wife.",
      stats: [
        { label: 'Focus',    value: 'Full lifecycle'          },
        { label: 'Approach', value: 'Right tool for the job'  },
        { label: 'Base',     value: 'Miami, FL'               },
        { label: 'Status',   value: 'Building'                },
      ],
    },

    projects: {
      tag:     '02 :: Projects',
      heading: "Things I've shipped.",
      statusLabels: {
        'Live':           'Live',
        'Delivered':      'Delivered',
        'In Development': 'In Development',
        'Succeeded':      'Succeeded',
        'Ongoing':        'Ongoing',
      },
      cards: {
        zentien:    { tagline: 'Salesforce Reliability Platform',       description: 'Real-time monitoring, alerting, and observability for Salesforce orgs. Zentien surfaces reliability risks before they become incidents — giving platform teams the visibility they need to ship with confidence.',                                                                                                                                                                                                                                      urlLabel: 'zentien.io'                  },
        scorewell:  { tagline: 'Health & Benefits Platform',            description: 'A private health platform built for a large enterprise client — connects HR, employees, health coaches, and doctors. Calculates a personalized health score based on lab results and delivers tailored recommendations from certified health coaches.',                                                                                                                                                                                                  urlLabel: 'Private / Client Project'    },
        lensy:      { tagline: 'Optical Business Platform · by Zentien', description: 'A full business platform built for Laboratorio del Valle — a webstore for glasses, frames, and prescription lenses, patient accounts with prescription history, appointment and calendar management, automatic lab order routing, and a complete POS and order tracker for the lab floor.',                                                                                                                                                       urlLabel: 'Private / Family Business'   },
        tripflow:   { tagline: 'Social Travel App',                     description: 'A social travel app that turns group travel planning into a shared experience — collaborative itineraries, real-time coordination, and travel memories built around the people you explore with. Available as a PWA with a full React Native + Expo mobile app in development.',                                                                                                                                                                         urlLabel: 'Coming Soon'                 },
        blueberry:  { tagline: 'Enterprise Operations Platform',        description: 'A near-full ERP built from scratch at DASI — covering parts and inventory management, warehouse locations and transfers, document management, sales and purchase orders, repair orders, accounts, invoicing with automated email delivery, and a real-time sales order tracker. Ran in production for years before being succeeded by Salesforce.',                                                                                                      urlLabel: 'Internal System'             },
        docmanager: { tagline: 'Salesforce Document Platform',          description: 'A custom document management system built inside Salesforce at DASI — LWC frontend, .NET API backend, Azure Blob Storage for files, and SQL Server for metadata. Documents are linked directly to Salesforce records, giving the entire org seamless, in-platform access.',                                                                                                                                                                            urlLabel: 'Internal System'             },
        zenbook:    { tagline: 'Personal Finance Platform',             description: 'A personal finance web app designed to bring clarity to your money — tracking, planning, and insights built around how real people actually spend and save. Mobile app coming in a future release.',                                                                                                                                                                                                                                                   urlLabel: 'In Development'              },
        lifepulse:  { tagline: 'Wellness Platform',                     description: 'A wellness platform designed to help people build healthier habits — tracking, guidance, and personalized insights that fit into everyday life rather than demanding a lifestyle overhaul.',                                                                                                                                                                                                                                                           urlLabel: 'In Development'              },
        more:       { tagline: 'More Projects',                         description: 'New ideas in progress across different domains and technologies. This list keeps growing — it always has. Follow along on GitHub to see what comes next.',                                                                                                                                                                                                                                                                                            urlLabel: 'github.com/sandro-zentien'   },
      },
    },

    blog: {
      tag:       '03 :: Writing',
      heading:   'Thoughts on building.',
      read:      'read',
      comingSoon:'Coming Soon',
      posts: [
        {
          id: 1,
          date: '2025 / 04',
          title: 'The Architecture of Trust: Building Reliable SaaS on Salesforce',
          excerpt: "What I learned shipping a reliability platform on top of someone else's platform — and why observability is the first thing you should build.",
          readTime: '7 min',
        },
        {
          id: 2,
          date: '2025 / 02',
          title: 'Designing for the Unknown: Lessons from Building TripFlow',
          excerpt: "Group travel is a UX nightmare. Here's how I approached collaborative state, real-time sync, and the messy human dynamics of planning trips.",
          readTime: '5 min',
        },
      ],
    },

    contact: {
      tag:           '04 :: Contact',
      heading:       "Let's build something.",
      sub:           "Whether it's a collaboration, an idea, or just a conversation — I'm always open to connecting with interesting people.",
      hudLabel:      'TRANSMISSION',
      statusReady:   'READY',
      statusSent:    'SENT',
      successMsg:    'Message Queued',
      labelName:     'Name',
      labelEmail:    'Email',
      labelMessage:  'Message',
      phName:        '// your_name',
      phEmail:       '// email@domain.io',
      phMessage:     "// what's on your mind?",
      btnSend:       'Transmit',
      btnSending:    'Sending...',
      error:         'Transmission failed. Please try again.',
      footer1:       '© 2025 SANDRO del VALLE',
      footer2:       'DESIGNED IN LA :: BUILT IN REACT',
    },
  },

  /* ─────────────────────────────────────────────────────────────── */
  /*  ESPAÑOL                                                        */
  /* ─────────────────────────────────────────────────────────────── */
  es: {
    nav: {
      links: [
        { href: '#about',    label: 'Sobre mí'   },
        { href: '#projects', label: 'Proyectos'  },
        { href: '#blog',     label: 'Artículos'  },
        { href: '#contact',  label: 'Contacto'   },
      ],
    },

    hero: {
      hud:    'DIAGNÓSTICO :: IDENTIDAD_VERIFICADA',
      tagline: 'Ingeniero.  Fundador.  Constructor.',
      cta:    'Ver mi trabajo',
      status: 'ESTADO :: EN LÍNEA',
      scroll: 'DESLIZAR',
    },

    about: {
      tag:       '01 :: Sobre mí',
      hudLabel:  'PERFIL_UNIDAD',
      hudStatus: 'ACTIVO',
      h1: 'Nacido en Cuba.',
      h2: 'Construyendo',
      h3: 'desde',
      h4: 'Miami',
      bio1: "A los cinco años, mi vecino tenía una computadora — y en Cuba, eso era un secreto. Cada día cruzaba la calle, atravesaba cuartos llenos con los cuadros de su padre, y llegaba hasta la habitación del fondo donde vivía esa máquina. Me sentaba ahí durante horas, aprendiendo a hacerla funcionar. Esa sensación nunca me abandonó.",
      bio2: "He estado en cada cuarto donde nace el software — la pizarra, el primer commit, el deploy a producción, el post-mortem, y el momento silencioso en que apagas las luces de algo que construiste. En Buildium, una empresa de RealPage, trabajé en productos para el cliente final — portales, flujos de firma electrónica, gestión de contratos de arrendamiento, pruebas A/B y diseño frontend como parte de su Frontend chapter. Como Principal Engineer en DASI, he liderado implementaciones full-stack, gestionado equipos, definido procesos y construido pipelines de DevOps en una amplia gama de sistemas y tecnologías.",
      bio3: "Ya sea en mis propios proyectos o en un equipo pequeño en el trabajo, me hago cargo de todo — la idea, la arquitectura, el código, la infraestructura y el despliegue. Cuando el equipo es pequeño, no hay traspasos. Lo haces todo tú. He sido esa persona más de una vez, y sé lo que se necesita para llevar algo de cero a producción, de principio a fin.",
      bio4: "Creo que el software debe resolver un problema real, sentirse personal y quitarse del camino. Cuando no estoy frente a un teclado, estoy detrás de una batería, en un diamante de béisbol, haciendo snowboard en las montañas, o en el patio de mi casa con mis dos hijas, mi perro y mi esposa.",
      stats: [
        { label: 'Enfoque',   value: 'Ciclo completo'            },
        { label: 'Filosofía', value: 'La herramienta correcta'   },
        { label: 'Base',      value: 'Miami, FL'                 },
        { label: 'Estado',    value: 'Construyendo'              },
      ],
    },

    projects: {
      tag:     '02 :: Proyectos',
      heading: 'Lo que he construido.',
      statusLabels: {
        'Live':           'Activo',
        'Delivered':      'Entregado',
        'In Development': 'En Desarrollo',
        'Succeeded':      'Reemplazado',
        'Ongoing':        'En Curso',
      },
      cards: {
        zentien:    { tagline: 'Plataforma de Fiabilidad para Salesforce',  description: 'Monitoreo en tiempo real, alertas y observabilidad para orgs de Salesforce. Zentien detecta riesgos de fiabilidad antes de que se conviertan en incidentes — dando a los equipos la visibilidad que necesitan para desplegar con confianza.',                                                                                                                                                                                                  urlLabel: 'zentien.io'                  },
        scorewell:  { tagline: 'Plataforma de Salud y Beneficios',          description: 'Una plataforma de salud privada construida para un gran cliente empresarial — conecta a RRHH, empleados, coaches de salud y médicos. Calcula un puntaje de salud personalizado basado en resultados de laboratorio y entrega recomendaciones de coaches certificados.',                                                                                                                                                                          urlLabel: 'Proyecto Privado / Cliente'  },
        lensy:      { tagline: 'Plataforma Óptica · by Zentien',  description: 'Una plataforma completa construida para Laboratorio del Valle — tienda en línea de lentes y armazones, cuentas de pacientes con historial de recetas, gestión de citas, ruteo automático de órdenes al laboratorio y un POS completo con seguimiento de pedidos.',                                                                                                                                                                              urlLabel: 'Privado / Negocio Familiar'  },
        tripflow:   { tagline: 'App de Viajes Social',                      description: 'Una app de viajes social que convierte la planificación grupal en una experiencia compartida — itinerarios colaborativos, coordinación en tiempo real y recuerdos de viaje construidos alrededor de las personas con quienes exploras. Disponible como PWA con una app móvil en React Native + Expo en desarrollo.',                                                                                                                             urlLabel: 'Próximamente'                },
        blueberry:  { tagline: 'Plataforma de Operaciones Empresariales',   description: 'Un ERP casi completo construido desde cero en DASI — inventario de piezas, gestión de almacén, gestión documental, órdenes de compra y venta, reparaciones, cuentas, facturación con envío automático por correo y seguimiento de pedidos en tiempo real. Operó en producción por años antes de ser reemplazado por Salesforce.',                                                                                                              urlLabel: 'Sistema Interno'             },
        docmanager: { tagline: 'Plataforma Documental en Salesforce',       description: 'Un sistema de gestión de documentos personalizado dentro de Salesforce en DASI — frontend en LWC, backend API en .NET, Azure Blob Storage para archivos y SQL Server para metadatos. Los documentos están vinculados directamente a los registros de Salesforce, dando a toda la organización acceso fluido dentro de la plataforma.',                                                                                                          urlLabel: 'Sistema Interno'             },
        zenbook:    { tagline: 'Plataforma de Finanzas Personales',         description: 'Una app web de finanzas personales diseñada para dar claridad a tu dinero — seguimiento, planificación e insights construidos alrededor de cómo la gente real gasta y ahorra. App móvil próximamente.',                                                                                                                                                                                                                                         urlLabel: 'En Desarrollo'              },
        lifepulse:  { tagline: 'Plataforma de Bienestar',                   description: 'Una plataforma de bienestar diseñada para ayudar a las personas a construir hábitos más saludables — seguimiento, orientación e insights personalizados que encajan en la vida cotidiana sin exigir un cambio total de estilo de vida.',                                                                                                                                                                                                        urlLabel: 'En Desarrollo'              },
        more:       { tagline: 'Más Proyectos',                             description: 'Nuevas ideas en progreso en distintos dominios y tecnologías. Esta lista sigue creciendo — siempre ha sido así. Sígueme en GitHub para ver qué viene después.',                                                                                                                                                                                                                                                                                urlLabel: 'github.com/sandro-zentien'   },
      },
    },

    blog: {
      tag:       '03 :: Artículos',
      heading:   'Reflexiones sobre construir.',
      read:      'lectura',
      comingSoon:'Próximamente',
      posts: [
        {
          id: 1,
          date: '2025 / 04',
          title: 'La Arquitectura de la Confianza: SaaS Confiable sobre Salesforce',
          excerpt: 'Lo que aprendí lanzando una plataforma de fiabilidad encima de la plataforma de otro — y por qué la observabilidad es lo primero que debes construir.',
          readTime: '7 min',
        },
        {
          id: 2,
          date: '2025 / 02',
          title: 'Diseñando para lo Desconocido: Lecciones de Construir TripFlow',
          excerpt: 'Los viajes en grupo son una pesadilla de UX. Así es como abordé el estado colaborativo, la sincronización en tiempo real y la compleja dinámica humana de planificar viajes.',
          readTime: '5 min',
        },
      ],
    },

    contact: {
      tag:          '04 :: Contacto',
      heading:      'Construyamos algo.',
      sub:          'Ya sea una colaboración, una idea, o simplemente una conversación — siempre estoy abierto a conectar con personas interesantes.',
      hudLabel:     'TRANSMISIÓN',
      statusReady:  'LISTO',
      statusSent:   'ENVIADO',
      successMsg:   'Mensaje Enviado',
      labelName:    'Nombre',
      labelEmail:   'Correo',
      labelMessage: 'Mensaje',
      phName:       '// tu_nombre',
      phEmail:      '// correo@dominio.io',
      phMessage:    '// ¿qué tienes en mente?',
      btnSend:      'Transmitir',
      btnSending:   'Enviando...',
      error:        'Error de transmisión. Por favor intenta de nuevo.',
      footer1:      '© 2025 SANDRO del VALLE',
      footer2:      'DISEÑADO EN LA :: CONSTRUIDO EN REACT',
    },
  },
}
