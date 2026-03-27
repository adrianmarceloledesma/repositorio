export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto'
    },
    hero: {
      tag: '// portafolio',
      cta1: 'Ver proyectos',
      cta2: 'Contactar',
      scroll: 'scroll'
    },
    about: {
      label: '// sobre mi',
      title: 'Acerca de mí',
      bio: 'Soy un Frontend Developer con experiencia en gestión de contenidos, plataformas e-learning y tecnologías front-end.\n\nEn UNIR trabajé con HTML, CSS y el CMS Ibexa, administrando contenidos y mejorando la experiencia de usuario. También gestioné plataformas de aprendizaje como Moodle y Canvas, optimizando su rendimiento y brindando soporte técnico.\n\nMi stack incluye React.js, TypeScript y JavaScript (ES6+), con foco en construir interfaces limpias, funcionales y bien estructuradas.'
    },
    experience: {
      label: '// experiencia',
      title: 'Experiencia laboral',
      items: [
        {
          id: 1,
          company: 'Universidad Internacional de La Rioja (UNIR)',
          role: 'Desarrollador de Contenido Web / Maquetador Web',
          period: 'Ago 2021 – Mar 2025',
          description: 'Transformación de contenido académico desde documentos Word a formatos web estructurados. Aplicación de HTML y CSS para garantizar diseños limpios y responsivos. Mantenimiento de contenido en plataformas CMS y LMS (Ibexa, Canvas, Moodle, LMS30, Sakai). Gestión de despliegues mediante herramientas FTP (Core, Cyberduck). Uso de Jira para seguimiento de tareas y resolución de incidencias.',
          technologies: ['HTML', 'CSS', 'Ibexa CMS', 'Canvas', 'Moodle', 'FTP', 'Jira'],
        },
      ]
    },
    skills: {
      label: '// habilidades',
      title: 'Tecnologias y herramientas'
    },
    projects: {
      label: '// proyectos',
      title: 'Trabajo seleccionado',
      items: [
        {
          id: 1,
          description: 'Aplicación Todo con persistencia en localStorage para guardar tus tareas.'
        },
        {
          id: 2,
          description: 'Divertido juego de trivia para poner a prueba tus conocimientos.'
        },
        {
          id: 3,
          description: 'Chatbot con IA que responde preguntas históricas con precisión y humor.'
        }
      ]
    },
    contact: {
      label: '// contacto',
      title: 'Hablemos',
      intro: 'Estoy siempre abierto a nuevos proyectos, ideas creativas y oportunidades de colaboracion.'
    },
    footer: {
      nav: 'Navegacion',
      contact: 'Contacto'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      tag: '// portfolio',
      cta1: 'View projects',
      cta2: 'Contact',
      scroll: 'scroll'
    },
    about: {
      label: '// about me',
      title: 'About me',
      bio: "I'm a Frontend Developer with experience in content management, e-learning platforms, and front-end technologies.\n\nAt UNIR, I worked with HTML, CSS, and the Ibexa CMS, handling content administration and improving user experience. I also managed learning platforms like Moodle and Canvas, optimizing their performance and providing technical support.\n\nMy stack includes React.js, TypeScript, and JavaScript (ES6+), with a focus on building clean, functional, and well-structured interfaces."
    },
    experience: {
      label: '// experience',
      title: 'Work Experience',
      items: [
        {
          id: 1,
          company: 'Universidad Internacional de La Rioja (UNIR)',
          role: 'Web Content Developer / Web Layout Designer',
          period: 'Aug 2021 – Mar 2025',
          description: 'Transformation of academic content from Word documents to structured web formats. Application of HTML and CSS to ensure clean and responsive designs. Content maintenance on CMS and LMS platforms (Ibexa, Canvas, Moodle, LMS30, Sakai). Deployment management using FTP tools (Core, Cyberduck). Use of Jira for task tracking and issue resolution.',
          technologies: ['HTML', 'CSS', 'Ibexa CMS', 'Canvas', 'Moodle', 'FTP', 'Jira'],
        },
      ]
    },
    skills: {
      label: '// skills',
      title: 'Technologies and tools'
    },
    projects: {
      label: '// projects',
      title: 'Selected work',
      items: [
        {
          id: 1,
          description: 'Todo application with localStorage persistence for data.'
        },
        {
          id: 2,
          description: 'Fun trivia game to test your knowledge.'
        },
        {
          id: 3,
          description: 'AI-powered chatbot that answers historical questions with accuracy and humor.'
        }
      ]
    },
    contact: {
      label: '// contact',
      title: "Let's talk",
      intro: "I'm always open to new projects, creative ideas, and collaboration opportunities."
    },
    footer: {
      nav: 'Navigation',
      contact: 'Contact'
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations['es'];
