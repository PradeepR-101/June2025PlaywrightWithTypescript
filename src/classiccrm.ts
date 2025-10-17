import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false, channel: "chrome" });
  const page = await browser.newPage();

  await page.goto("https://classic.crmpro.com/");

  await page.fill('input[placeholder="Username"]', "apiautomation");
  await page.fill('input[placeholder="Password"]', "Selenium@12345");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForTimeout(3000);

  const frame = page.frame({ name: "mainpanel" });
  if (!frame) return;

  const contactsSel = "a[title='Contacts']";
  const newContactSel = "a[title='New Contact']";

  //Hover Contacts and click New Contact
  await frame.waitForSelector(contactsSel, { state: "visible", timeout: 5000 });
  await frame.hover(contactsSel);
  await frame.waitForTimeout(200);
  await frame.click(newContactSel);

})();
