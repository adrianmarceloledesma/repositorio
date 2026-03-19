export const translations = {
  es: {
    nav: {
      home: 'Inicio',
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
    skills: {
      label: '// habilidades',
      title: 'Tecnologias y herramientas'
    },
    projects: {
      label: '// proyectos',
      title: 'Trabajo seleccionado'
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
    skills: {
      label: '// skills',
      title: 'Technologies and tools'
    },
    projects: {
      label: '// projects',
      title: 'Selected work'
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
