import { BlackBorderCertificate } from "@/components/certificates/BlackBorderCertificate";
import type { CertificateDraft } from "@/types/certificate";

type SearchParamsValue = string | string[] | undefined;
type SearchParams = Record<string, SearchParamsValue>;

const DEFAULT_DRAFT: CertificateDraft = {
  recipientName: "Ada Lovelace",
  courseTitle: "Analytical Engines 101",
  issueDate: "Jan 1, 2026",
  instructorName: "Charles Babbage",
  templateId: "black-border",
};

function readParam(value: SearchParamsValue, fallback: string) {
  if (Array.isArray(value)) {
    return value[0] ?? fallback;
  }

  return value ?? fallback;
}

export default async function RenderPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams> | SearchParams;
}) {
  const resolvedParams = searchParams ? await searchParams : {};

  const draft: CertificateDraft = {
    recipientName: readParam(resolvedParams.recipientName, DEFAULT_DRAFT.recipientName),
    courseTitle: readParam(resolvedParams.courseTitle, DEFAULT_DRAFT.courseTitle),
    issueDate: readParam(resolvedParams.issueDate, DEFAULT_DRAFT.issueDate),
    instructorName: readParam(resolvedParams.instructorName, DEFAULT_DRAFT.instructorName),
    templateId: readParam(resolvedParams.templateId, DEFAULT_DRAFT.templateId),
  };

  return (
    <main className="grid min-h-screen place-items-center bg-[#f4f7fb] p-6">
      <div className="w-full max-w-[1200px]" data-certificate-root>
        <BlackBorderCertificate draft={draft} />
      </div>
    </main>
  );
}
