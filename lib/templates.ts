import type { CertificateTemplate } from "@/types/certificate";

// defaultLogoAsset is intentionally unset: the placeholder seal renders as
// styled text until brand-settings logo upload lands (feature 6).
export const blackBorderTemplate: CertificateTemplate = {
  id: "black-border",
  displayName: "Black Border",
};

export const templates: CertificateTemplate[] = [blackBorderTemplate];
