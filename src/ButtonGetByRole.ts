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
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Continue' }).highlight();
   
    //input or button ---> role: button
    //link -- role: link

        
})();


