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
