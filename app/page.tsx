import type { ReactNode } from "react";
import { BlackBorderCertificate } from "@/components/certificates/BlackBorderCertificate";

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-[0.04em] text-muted">
      {children}
    </div>
  );
}

function Chip({ children, dotClassName }: { children: ReactNode; dotClassName?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-2.5 py-1 text-xs text-muted">
      {dotClassName ? <span className={`h-2 w-2 rounded-full ${dotClassName}`} /> : null}
      {children}
    </span>
  );
}

function TemplateCard({
  name,
  selected,
}: {
  name: string;
  selected?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-[10px] bg-panel p-1.5 ${
        selected ? "border border-accent shadow-[0_0_0_3px_var(--accent-soft)]" : "border border-border"
      }`}
    >
      <div className="relative aspect-[16/11] overflow-hidden rounded-lg border border-border bg-cert-bg">
        <div aria-hidden className="absolute inset-3 rounded-[4px] border-4 border-double border-cert-border" />
      </div>
      <small className="px-0.5 pb-1 text-xs font-semibold text-muted">{name}</small>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto grid w-full max-w-[1500px] gap-5 px-6 pb-10 pt-6 text-foreground">
        <header className="flex items-center justify-between rounded-md border border-border bg-linear-to-b from-surface to-panel px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-[10px] bg-linear-to-b from-accent-strong to-accent font-display text-lg font-bold text-accent-ink shadow-[0_10px_30px_rgba(43,110,242,0.3)]">
              C
            </div>
            <div>
              <div className="font-bold tracking-tight">Certificreate</div>
              <div className="text-xs text-muted">v1 workspace</div>
            </div>
          </div>
          <Chip dotClassName="bg-success shadow-[0_0_0_3px_rgba(47,187,122,0.12)]">
            Live preview in sync
          </Chip>
        </header>

        <div className="grid grid-cols-1 gap-6 min-[1181px]:grid-cols-[440px_1fr]">
          <section className="grid content-start gap-5">
            <div className="rounded-md border border-border bg-linear-to-b from-surface to-panel shadow-sm">
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <div>
                  <div className="text-sm font-bold tracking-tight">Certificate details</div>
                  <div className="mt-0.5 text-xs font-semibold uppercase tracking-[0.04em] text-muted">
                    Read-only preview data
                  </div>
                </div>
                <Chip>Local only</Chip>
              </div>
              <div className="px-5 py-5">
                <div className="grid gap-1.5">
                  <Label>Recipient name</Label>
                  <input
                    readOnly
                    value="Isabella Marie Santos"
                    className="w-full rounded-xs border border-border bg-panel px-3 py-2.5 font-sans text-sm text-foreground outline-none"
                  />
                </div>
                <div className="my-5 h-px bg-border" />
                <div className="grid gap-1.5">
                  <Label>Course / Achievement</Label>
                  <input
                    readOnly
                    value="Complete React Developer in 2026 (w/ Redux, TypeScript)"
                    className="w-full rounded-xs border border-border bg-panel px-3 py-2.5 font-sans text-sm text-foreground outline-none"
                  />
                </div>
                <div className="my-5 h-px bg-border" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label>Issue date</Label>
                    <input
                      readOnly
                      value="August 13, 2026"
                      className="w-full rounded-xs border border-border bg-panel px-3 py-2.5 font-sans text-sm text-foreground outline-none"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>Instructor / Signatory</Label>
                    <input
                      readOnly
                      value="Brad Traversy"
                      className="w-full rounded-xs border border-border bg-panel px-3 py-2.5 font-sans text-sm text-foreground outline-none"
                    />
                  </div>
                </div>
                <div className="my-5 h-px bg-border" />
                <div className="mb-2">
                  <Label>Template</Label>
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  <TemplateCard name="Black Border" selected />
                  <TemplateCard name="Classic Seal" />
                  <TemplateCard name="Modern Minimal" />
                </div>
              </div>
            </div>
          </section>

          <section className="grid content-start gap-5">
            <div className="flex items-center justify-between gap-4 rounded-md border border-border bg-surface p-3">
              <div className="flex items-center gap-3">
                <Chip dotClassName="bg-accent shadow-[0_0_0_3px_rgba(43,110,242,0.12)]">
                  Print-friendly preview
                </Chip>
                <Chip>Landscape · fits A4 / Letter</Chip>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-border bg-surface px-3.5 py-2.5 text-[13px] font-semibold text-foreground"
                >
                  Download PNG
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-transparent bg-linear-to-b from-accent-strong to-accent px-3.5 py-2.5 text-[13px] font-semibold text-accent-ink shadow-[0_10px_30px_rgba(43,110,242,0.25)]"
                >
                  Download PDF
                </button>
              </div>
            </div>

            <div className="grid place-items-center rounded-md border border-border bg-[radial-gradient(900px_500px_at_50%_20%,var(--accent-soft),transparent_60%),var(--panel)] p-10 shadow-[var(--shadow-lg)_inset]">
              <div className="w-full max-w-[960px]">
                <BlackBorderCertificate />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
