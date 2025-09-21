import { Browser, chromium, firefox, webkit, Locator, Page, selectors } from "@playwright/test";

//IIFE
(async () => {

    //selectors.setTestIdAttribute('data-testid');

    let browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome',
        });
    let page: Page = await browser.newPage();
    await page.goto('https://classic.freecrm.com/register/');
    
    //name: 1. label text or aria-label value
    //2. will pick the placeholder value for the name
    await page.getByRole('textbox', { name: 'First Name' }).fill('Naveen'); 
    await page.getByRole('checkbox', { name: 'I agree with the' }).check();//chekcbox is not chekced already on the page

    await page.waitForTimeout(3000);

    await page.getByRole('checkbox', { name: 'I agree with the' }).uncheck();//chekcbox is chekced already on the page


})();


