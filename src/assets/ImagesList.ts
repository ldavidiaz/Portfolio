import EurekaDivulgaImage from "./img/projects/eurekadivulga.png";
import MiAgendaImage from "./img/projects/miagenda-ini.png";
import PortfolioImage from "./img/projects/portfolio.png";

export const IMAGES= {
  "eurekadivulga.png": EurekaDivulgaImage.src,
  "miagenda-ini.png": MiAgendaImage.src,
  "portfolio.png": PortfolioImage.src,
} as const;

// Tipo automático basado en las claves de IMAGES
export type ImageKey = keyof typeof IMAGES;