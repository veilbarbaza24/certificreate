export interface CertificateDraft {
  recipientName: string;
  courseTitle: string;
  issueDate: string;
  instructorName: string;
  templateId: string;
}

export interface CertificateTemplate {
  id: string;
  displayName: string;
  defaultLogoAsset?: string;
  themeVariables?: Record<string, string>;
  fontAssets?: string[];
}
