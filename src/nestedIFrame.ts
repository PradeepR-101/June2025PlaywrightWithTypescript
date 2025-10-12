import { Browser, chromium, firefox, webkit, Locator, Page, selectors, expect, FrameLocator } from "@playwright/test";

//IIFE
(async () => {

    //selectors.setTestIdAttribute('data-testid');

    let browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome',
        });
    let page: Page = await browser.newPage();
    await page.goto('https://selectorshub.com/iframe-scenario/');
    
    let frame1: FrameLocator = page.frameLocator(`#pact1`);
    let frame2: FrameLocator = frame1.frameLocator(`#pact2`);
    let frame3: FrameLocator = frame2.frameLocator(`#pact3`);

    await frame1.locator(`#inp_val`).fill('Testing');
    await frame2.locator(`#jex`).fill('Selenium');
    await frame3.locator(`#glaf`).fill('Playwright');

    await frame1.locator(`#inp_val`).fill('Automation');
    await frame2.locator(`#jex`).fill('Cypress');
    await frame3.locator(`#glaf`).fill('Typescript');

    let header = await page.locator('h3').innerText();
    console.log(header);

})();
