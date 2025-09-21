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
    
    //label html tag having text --> name or attribute <aria-label=text>
    //placeholder = text
    await page.getByRole('textbox', { name: 'First Name' }).fill('Naveen');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('automation');
    
    await page.getByRole('checkbox').click();
   // await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('radio', { name: 'Yes' }).click();

   // await page.close();

})();


