// src/lib/ui/ui.ts
import type {
  IndexTexts,
  ListMenuHeader,
  FooterTexts,
  ProjectList
} from './ui.types';

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

/** Idioma por defecto */
export const defaultLang = 'es' as const;

/** Tipo derivado automáticamente del diccionario */
export type Language = keyof typeof languages;

/* ------------------------------------------------------------------
 * A partir de aquí dejas toda tu lógica y los textos reales
 * -----------------------------------------------------------------*/

/** Contenidos por idioma ---------------------------------------------------*/
export const indexTexts: Record<Language, IndexTexts> = {
  es: {
    metaTitle: 'Luis David Portfolio - Ingeniero/Desarrollador de Software | Web | Mobile',
    metaDescription: 'Luis David Diaz - Ingeniero/Desarrollador de Software, Web y Movil. Interesado en la tecnología e innovación',
    title: 'Bienvenido a mi portfolio!',
    subtitle: 'Luis_David = [ "Desarrollador", "Ingeniero Informático", "IA Enjoyer", "Café Lover" ]',
    status: 'Listo para trabajar',
    titleSectionExperience: 'Experiencia',
    titleSectionProjects: 'Proyectos',
    subtitleSectionProjects: '(Algo de mis trabajos)',
    titleSectionAboutMe: 'Sobre mi',
    txtSectionAboutMe1: 'Soy un desarrollador que me gusta hacer no solo las cosas bien, si no bonitas, atractivas para el cliente.',
    txtSectionAboutMe2: 'Siempre me gusta estar al tanto de las nuevas tecnologías para el desarrollo web, pero también tengo algunas inquietudes en otras áreas que me gustaría desarrollar, como puede ser la arquitectura de Software/Cloud, IA, Ciberseguridad y robótica',
  },
  en: {
    metaTitle: 'Luis David Portfolio - Software Engineer/Developer | Web | Mobile',
    metaDescription: 'Luis David Diaz - Software Engineer/Developer, Web and Mobile. Interested in technology and innovation',
    title: 'Welcome to my portfolio!',
    subtitle: 'Luis_David = [ "Developer", "Computer Engineer", "AI Enjoyer", "Coffee Lover" ]',
    status: 'Ready to work',
    titleSectionExperience: 'Experience',
    titleSectionProjects: 'Projects',
    subtitleSectionProjects: '(Some of my work)',
    titleSectionAboutMe: 'About me',
    txtSectionAboutMe1: "I'm a developer who likes to do things not only well, but also beautifully, attractive to the client.",
    txtSectionAboutMe2: "I always like to keep up with new technologies for web development, but I also have some interests in other areas that I would like to develop, such as Software/Cloud architecture, AI, Cybersecurity, and robotics.",
  },
};

export const listMenuHeader: Record<Language, ListMenuHeader> = {
  es: {
    home: 'Inicio',
    experience: 'Experiencia',
    projects: 'Proyectos',
    about: 'Sobre Mi',
    contact: 'Contacto',
  },
  en: {
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },
};

export const footerTexts: Record<Language, FooterTexts> = {
  es: {
    copy: 'Casi todos los derechos reservados',
    about: 'Sobre Mi',
    contact: 'Contacto',
  },
  en: {
    copy: 'All rights reserved',
    about: 'About',
    contact: 'Contact',
  },
};

/* EXPERIENCIA */
export const experiencesList = [
  {
    date: {
      es: 'Octubre 2024 - Actualidad',
      en: 'October 2024 - Actually',
    },
    title: {
      es: 'Desarrollo en WordPress',
      en: 'WordPress Development',
    },
    description: {
      es: 'Actualmente trabajo en un proyecto WordPress para la UMH, desarrollando temas y plugins personalizados.',
      en: 'I am currently working on a WordPress project for UMH. I am responsible for the development of the website, including the implementation of custom themes and plugins.',
    },
    link: 'https://eurekadivulga.umh.es',
  },
  {
    date: {
      es: 'Marzo 2024',
      en: 'March 2024',
    },
    title: {
      es: 'Prácticas en la UMH - Departamento de Ingeniería de Computadores',
      en: 'Internship at UMH - Computer Engineering Department',
    },
    description: {
      es: 'Desarrollo de funciones para el análisis de imágenes hiperespectrales con MATLAB, aplicadas a la detección de diferentes tipos de plásticos.',
      en: 'Development of functions for hyperspectral image analysis using MATLAB. The project involves the analysis of hyperspectral images for the detection of different types of plastic materials.',
    },
    link: '#',
  },
];


/* PROYECTOS */
// src/i18n/ui.ts
export const projectsList: Record<Language, ProjectList> = {
  es: [
    {
      id: 'eureka',
      title: 'Eureka Divulga - Universidad Miguel Hernández',
      description: 'Sitio web para el proyecto Eureka Divulga de la UMH.',
      link: 'https://eurekadivulga.umh.es/',
      github: '#',
      image: 'eurekadivulga.png',
      tags: ['WORDPRESS', 'PHP', 'JAVASCRIPT', 'REACT', 'SASS', 'BOOSTRAP'],
    },
    {
      id: 'agenda',
      title: 'Mi Agenda - Proyecto académico',
      description: 'Aplicación de escritorio en Java con Swing y GSON para guardar datos.',
      link: '#',
      github: '#',
      image: 'miagenda-ini.png',
      tags: ['JAVA'],
    },
    {
      id: 'portfolio',
      title: 'Este portafolio',
      description: 'Mi portafolio personal, hecho con Astro y Tailwind CSS.',
      link: '#',
      github: 'https://github.com/ldavidiaz/Portfolio',
      image: 'portfolio.png',
      tags: ['ASTRO', 'JAVASCRIPT', 'TAILWIND'],
    },
  ],
  en: [
    {
      id: 'eureka',
      title: 'Eureka Divulga - Miguel Hernández University',
      description: 'Website for the Eureka Divulga project at UMH.',
      link: 'https://eurekadivulga.umh.es/',
      github: '#',
      image: 'eurekadivulga.png',
      tags: ['WORDPRESS', 'PHP', 'JAVASCRIPT', 'REACT', 'SASS', 'BOOSTRAP'],
    },
    {
      id: 'agenda',
      title: 'Mi Agenda - A subject project',
      description: 'A simple desktop application made with Java using Swing and GSON.',
      link: '#',
      github: '#',
      image: 'miagenda-ini.png',
      tags: ['JAVA'],
    },
    {
      id: 'portfolio',
      title: 'This portfolio',
      description: 'My personal portfolio, built with Astro and Tailwind CSS.',
      link: '#',
      github: 'https://github.com/ldavidiaz/Portfolio',
      image: 'portfolio.png',
      tags: ['ASTRO', 'JAVASCRIPT', 'TAILWIND'],
    },
  ],
};

export const uiText = {
  viewProject: {
    es: 'Ver proyecto',
    en: 'View project',
  },
  viewCode: {
    es: 'Ver código',
    en: 'View code',
  },
};
