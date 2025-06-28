// src/lib/ui/ui.types.ts
/**
 * Diccionario de idiomas: lo exportamos para que otros
 * archivos puedan reutilizar la misma fuente de verdad.
 */

/** Tipos de textos de la página de inicio */
export type IndexTexts = {
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  status: string;
  titleSectionExperience: string;
  titleSectionProjects: string;
  subtitleSectionProjects: string;
  titleSectionAboutMe: string;
  txtSectionAboutMe1: string;
  txtSectionAboutMe2: string;
};

/** Tipos para el menú del header */
export type ListMenuHeader = {
  home: string;
  experience: string;
  projects: string;
  about: string;
  contact: string;
};

/** Tipos para el footer */
export type FooterTexts = {
  copy: string;
  about: string;
  contact: string;
}


/* Tipos para objeto de Proyectos*/
import type { TagKey } from '../assets/TagsList';
import type { ImageKey } from '../assets/ImagesList';
export interface Project {
  id: string;
  title: string;
  description: string;
  link: string;
  github: string;
  image: ImageKey; // solo nombre del archivo
  tags: TagKey[]; // ← ahora referenciado automáticamente
}
export type ProjectList = Project[];
