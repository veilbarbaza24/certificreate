import type { CertificateDraft } from "@/types/certificate";

const PLACEHOLDER_DRAFT: CertificateDraft = {
  recipientName: "Isabella Marie Santos",
  courseTitle: "Complete React Developer in 2026 (w/ Redux, TypeScript)",
  issueDate: "August 13, 2026",
  instructorName: "Brad Traversy",
  templateId: "black-border",
};

function Corner({ className }: { className: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute h-[72px] w-[72px] ${className}`}>
      <span className="absolute left-0 top-0 h-8 w-[6px] rounded-[2px] bg-cert-corner" />
      <span className="absolute left-0 top-0 h-[6px] w-8 rounded-[2px] bg-cert-corner" />
    </div>
  );
}

export function BlackBorderCertificate({
  draft = PLACEHOLDER_DRAFT,
}: {
  draft?: CertificateDraft;
}) {
  return (
    <div className="relative grid aspect-[16/11] w-full gap-[18px] overflow-hidden rounded-[6px] bg-cert-bg p-[56px_72px] font-cert-body text-cert-ink shadow-[0_40px_120px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.03)] [grid-template-rows:auto_auto_1fr_auto]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-[18px] rounded-[2px] border-[6px] border-double border-cert-border-outer"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[52px] inset-y-[38px] rounded-[2px] border-2 border-cert-border opacity-90"
      />

      <Corner className="left-[52px] top-7" />
      <Corner className="right-[52px] top-7 rotate-90" />
      <Corner className="bottom-7 left-[52px] -rotate-90" />
      <Corner className="bottom-7 right-[52px] rotate-180" />

      <div className="text-center">
        <div className="font-sans text-[11px] font-semibold uppercase tracking-[0.5em] text-cert-muted">
          Traversy Media
        </div>
        <div className="mx-auto mt-[6px] h-px w-[70%] bg-[linear-gradient(90deg,transparent,var(--cert-rule),transparent)]" />
      </div>

      <div className="text-center font-display text-[22px] uppercase tracking-[0.14em] text-cert-muted">
        Certificate of Completion
      </div>

      <div className="grid place-items-center content-center gap-[10px] text-center">
        <h1 className="bg-linear-to-b from-cert-border-outer via-cert-border to-cert-border-outer bg-clip-text font-display text-[60px] font-extrabold leading-[1.05] tracking-[-0.01em] text-transparent">
          This Certifies That
        </h1>
        <div className="relative px-10 py-1 font-display text-[64px] font-bold tracking-[-0.01em] text-cert-ink">
          <span
            aria-hidden
            className="absolute -top-3 left-1/2 h-px w-[180px] -translate-x-1/2 bg-cert-rule"
          />
          <span
            aria-hidden
            className="absolute -bottom-3 left-1/2 h-px w-[180px] -translate-x-1/2 bg-cert-rule"
          />
          {draft.recipientName}
        </div>
        <div className="max-w-[90%] text-[19px] tracking-[0.02em] text-cert-muted">
          has successfully completed the course
          <br />
          <strong className="font-bold text-cert-ink">{draft.courseTitle}</strong>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_160px_1fr] items-end gap-6 pt-5">
        <div className="grid gap-1">
          <div className="border-t border-cert-rule pt-[10px] font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-cert-muted">
            Instructor
          </div>
          <div className="pt-2 font-display text-[18px] text-cert-ink">
            {draft.instructorName}
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="grid h-[84px] w-[84px] place-items-center rounded-full border-2 border-cert-border bg-cert-bg p-[10px] text-center font-display text-[16px] font-bold leading-none tracking-[0.02em] text-cert-accent shadow-[inset_0_0_0_6px_var(--cert-bg),inset_0_0_0_8px_var(--cert-rule)]">
            OFFICIAL
            <small className="mt-1 block font-sans text-[10px] font-normal tracking-[0.3em] text-cert-muted">
              CERTIFIED
            </small>
          </div>
        </div>
        <div className="grid gap-1 text-right">
          <div className="border-t border-cert-rule pt-[10px] font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-cert-muted">
            Date Issued
          </div>
          <div className="pt-2 font-display text-[18px] text-cert-ink">
            {draft.issueDate}
          </div>
        </div>
      </div>
    </div>
  );
}
