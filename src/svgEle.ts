import { Browser, chromium, Dialog, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  page = await browser.newPage();

  await page.goto('https://www.flipkart.com/');
  await page.locator('input[name="q"]').fill('Macbook');
  await page.locator(`button[title = 'Search for Products, Brands and More'] svg`).click();

  //css:
  //button[title = 'Search for Products, Brands and More'] svg

  //xpath:
  //*[name()='svg' and @fill='none']
  //*[local-name()='svg' and @fill='none']
  //*[local-name()='svg']//*[name()='g' and @id='regions']/*[name()='g']
  //*[local-name()='svg']//*[name()='g' and @id='regions']/*[name()='g' and @class='region']

    
 
})();