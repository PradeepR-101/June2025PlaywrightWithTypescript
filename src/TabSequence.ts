import { Browser, chromium, expect, Page } from "@playwright/test";
import { randomUUID } from "crypto";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

    page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

  await page.locator('#input-firstname').focus();
  await page.locator('#input-firstname').pressSequentially('Testing', { delay: 200 });
  await page.keyboard.press('Tab');
  await page.keyboard.type('Automation', { delay: 200 });
  await page.keyboard.press('Tab');
  await page.keyboard.type(getRandomEmailId(), { delay: 200 });
  await page.keyboard.press('Tab');
  await page.keyboard.type('9090909090', { delay: 200 });
  await page.keyboard.press('Tab');
  await page.keyboard.type('Automation@123', { delay: 200 });
  await page.keyboard.press('Tab');
  await page.keyboard.type('Automation@123', { delay: 200 });
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Space');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter'); 
})();


function getRandomEmailId(): string {
  return `opencart` + Date.now().toString() + `@mail.com`;
  //randomUUID();//91212-12121-12121-121212
}


