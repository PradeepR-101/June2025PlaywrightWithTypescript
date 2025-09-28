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
   
    //user getAttribute() method for any other attributes other than value attribute
    let name = await page.locator('#input-email').getAttribute('name');
   console.log(name);
    
    let placeholder = await page.locator('#input-email').getAttribute('placeholder');
    console.log(placeholder);
    
    //here getAttribute('value') -- this wont work.
    //we have to inputValue() to fetch the entered value in the text field
    await page.locator('#input-email').fill('naveen@gmail.com');
    let enteredVal = await page.locator('#input-email').inputValue();
    console.log(enteredVal);   


        

})();


