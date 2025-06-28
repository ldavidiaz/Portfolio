
import WordPressIcon from "./icons/WordPress.astro";
import TailwindIcon from "./icons/Tailwind.astro";
import AstroIcon from "./icons/AstroIcon.astro";
import JavascriptIcon from "./icons/JavaScript.astro";
import PhpIcon from "./icons/PHP.astro";
import JavaIcon from "./icons/Java.astro";
import ReactIcon from "./icons/React.astro";
import BoostrapIcon from "./icons/Boostrap.astro";
import SassIcon from "./icons/Sass.astro";

export const TAGS = {
  ASTRO: { name: "Astro", class: "bg-black/70 text-white", icon: AstroIcon, size: "size-4" },
  JAVASCRIPT: { name: "JavaScript", class: "bg-black/80 text-white", icon: JavascriptIcon, size: "size-4" },
  PHP: { name: "PHP", class: "bg-[#4F5B93] text-white", icon: PhpIcon, size: "size-4" },
  WORDPRESS: { name: "WordPress", class: "bg-[#3858e9] text-white", icon: WordPressIcon, size: "size-4" },
  TAILWIND: { name: "Tailwind CSS", class: "bg-[#003159] text-white", icon: TailwindIcon, size: "size-4" },
  JAVA: { name: "Java", class: "bg-[#0a0a0a] text-[#F29111]", icon: JavaIcon, size: "size-4" },
  REACT: { name: "React", class: "bg-[#23272ff2] text-white", icon: ReactIcon, size: "size-4" },
  SASS: { name: "Sass", class: "bg-[#ffeaf5] text-black", icon: SassIcon, size: "size-4" },
  BOOSTRAP: { name: "Bootstrap", class: "bg-[#27193d] text-white", icon: BoostrapIcon, size: "size-4" },
} as const;

// Tipo automático basado en las claves de TAGS
export type TagKey = keyof typeof TAGS;