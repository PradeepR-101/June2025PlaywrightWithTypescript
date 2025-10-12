import { Browser, chromium, expect, Page } from "@playwright/test";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

  page = await browser.newPage();
  // await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

  // let source = page.locator('#column-a');
  // let target = page.locator('#column-b');

  // await source.dragTo(target);
  // await expect(target).toContainText('A');

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');
     let source = page.locator('#draggable');
    let target = page.locator('#droppable');

  await source.dragTo(target);
  await expect(target).toContainText('Dropped!');

})();

