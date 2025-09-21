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
    // let header = await page.getByText('Register Account', { exact: true }).textContent(); //will give the text of element + any hidden text in the dom
    // console.log(header); 
    

    let header = await page.getByText('Register Account', { exact: true }).innerText(); //will give the visible text of element
    console.log(header);

    // let firstNameHtml = await page.locator('#input-firstname').innerHTML();
    // console.log(firstNameHtml);
        

})();


