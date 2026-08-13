import type { Browser, Page } from "puppeteer";
import puppeteer from "puppeteer";

let browserPromise: Promise<Browser> | null = null;
let queuePromise = Promise.resolve();

export async function getBrowser() {
  if (!browserPromise) {
    browserPromise = puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-gpu",
      ],
    });
  }

  return browserPromise;
}

export async function withRenderPage<T>(callback: (page: Page) => Promise<T>) {
  const browser = await getBrowser();

  const nextPromise = queuePromise.then(async () => {
    const page = await browser.newPage();

    try {
      return await callback(page);
    } finally {
      await page.close();
    }
  });

  queuePromise = nextPromise.then(
    () => undefined,
    () => undefined,
  );

  return nextPromise;
}
