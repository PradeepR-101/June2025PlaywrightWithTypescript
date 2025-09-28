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
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
   
    //1. getByText
    await page.getByText('Register Account', { exact: true }).highlight();        

    //2. locator + hasText:
    //locator('h1', {hasText: 'Register Account'})
    //locator('a', {hasText: 'Privacy Policy'})
    page.locator('h1', { hasText: 'Register Account' }).highlight();

    //3. using tag:text('value') -- webtable with the checkbox
    page.locator('h1:text("Register Account")').highlight();
        
  


        

})();


