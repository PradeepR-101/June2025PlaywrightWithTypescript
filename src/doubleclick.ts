import { Browser, chromium, expect, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

    page = await browser.newPage();
  await page.goto('https://api.jquery.com/dblclick/');
  let frameEle = page.frameLocator('iframe');
  let box = frameEle.locator('div');
  
  //using dblclick:
  //await box.dblclick();

  await box.click({ clickCount: 2 });

 
})();

