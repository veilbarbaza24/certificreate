import { NextRequest, NextResponse } from "next/server";
import type { CertificateDraft } from "@/types/certificate";
import { templates } from "@/lib/templates";
import { withRenderPage } from "@/lib/render/browser";

const allowedTemplateIds = new Set(templates.map((template) => template.id));

function isCertificateDraft(value: unknown): value is CertificateDraft {
  if (!value || typeof value !== "object") {
    return false;
  }

  const draft = value as Record<string, unknown>;

  return (
    typeof draft.recipientName === "string" &&
    typeof draft.courseTitle === "string" &&
    typeof draft.issueDate === "string" &&
    typeof draft.instructorName === "string" &&
    typeof draft.templateId === "string"
  );
}

export async function POST(request: NextRequest) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Malformed JSON body." }, { status: 400 });
  }

  if (!isCertificateDraft(payload)) {
    return NextResponse.json({ error: "Invalid certificate payload." }, { status: 400 });
  }

  if (!allowedTemplateIds.has(payload.templateId)) {
    return NextResponse.json({ error: `Unknown templateId: ${payload.templateId}` }, { status: 400 });
  }

  const query = new URLSearchParams({
    recipientName: payload.recipientName,
    courseTitle: payload.courseTitle,
    issueDate: payload.issueDate,
    instructorName: payload.instructorName,
    templateId: payload.templateId,
  });

  const renderUrl = new URL(`/render?${query.toString()}`, request.url);

  try {
    const pngBuffer = await withRenderPage(async (page) => {
      await page.goto(renderUrl.toString(), { waitUntil: "networkidle0", timeout: 30000 });
      await page.waitForFunction(() => !!document.fonts, { timeout: 15000 });
      await page.evaluate(async () => {
        if (document.fonts) {
          await document.fonts.ready;
        }
      });

      const certificateRoot = await page.$("[data-certificate-root]");

      if (!certificateRoot) {
        throw new Error("Certificate root element not found.");
      }

      const box = await certificateRoot.boundingBox();

      if (!box) {
        throw new Error("Certificate root element has no measurable dimensions.");
      }

      return page.screenshot({
        type: "png",
        clip: {
          x: box.x,
          y: box.y,
          width: box.width,
          height: box.height,
        },
      });
    });

    return new NextResponse(Buffer.from(pngBuffer), {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: `PNG render failed: ${message}` }, { status: 500 });
  }
}
