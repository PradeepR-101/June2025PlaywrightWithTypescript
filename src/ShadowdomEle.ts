import { Browser, chromium, Dialog, FrameLocator, Locator, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  page = await browser.newPage();

  //page --> shadowDOM1 --> shadowDOM1 --> input
  // await page.goto('https://selectorshub.com/iframe-in-shadow-dom/');
  // await page.locator('#pizza').fill('Veg Pizza');



  //page-->iframe --> shadowDOM --> input
  await page.goto('https://selectorshub.com/shadow-dom-in-iframe/');
  await page.frameLocator('#pact').locator('#tea').fill('Masala Tea');

  
  


})();