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
    
    await page.getByRole('textbox', { name: 'First Name' }).fill('Naveen');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('automation');

    //1. textbox should have a <label tag> or <arai-label attribute>

    await page.getByRole('radio', { name: 'Yes' }).click();
    //await page.getByRole('checkbox').click(); //avoid it because there is no label name
    await page.locator(`input[name='agree']`).click();

    //await page.getByRole('link', { name: 'Forgotten Password' }).click();    

    //h1 -- to -- h6 : headers --- heading
    let header: string = await page.getByRole('heading', { name: 'Register Account' }).innerText();
    console.log(header);
    


})();


