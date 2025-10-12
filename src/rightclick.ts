import { Browser, chromium, expect, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

    page = await browser.newPage();
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
  //right click - context click
  
  await page.locator('span.context-menu-one').click({ button: 'right' });
  let allOptions: string[] = await page.locator(`ul.context-menu-list span`).allInnerTexts();
  console.log(allOptions);
  await page.getByText('Copy', { exact: true }).click();
  
 
})();

