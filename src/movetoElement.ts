import { Browser, chromium, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  page = await browser.newPage();
  await page.goto("https://www.spicejet.com/");
  await page.getByText('Add-ons', { exact: true }).hover();
  await page.getByTestId('test-id-Taxi').click();


  
})();


