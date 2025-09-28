import { Browser, chromium, firefox, webkit, Locator, Page, selectors } from "@playwright/test";

//IIFE
(async () => {

    

    let browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome',
        });
    let page: Page = await browser.newPage();
    await page.goto('https://classic.freecrm.com/register/');
   
    let submitBtn: Locator =  page.locator('#submitButton');
    let isVisible: boolean = await submitBtn.isVisible();//true    
    console.log(isVisible);

    let isEnabled: boolean = await submitBtn.isEnabled(); //false
    console.log(isEnabled);    

    let isDisable: boolean = await submitBtn.isDisabled(); //true
    console.log(isDisable);

    // await submitBtn.click();//avoid clicking on disabled elements   
    //pw is checking ele is visible, enabled, stable -- then click on it

    //checking the checkbox:
    await page.locator('[name="agreeTerms"]').check();

    isVisible = await submitBtn.isVisible();//true
    console.log(isVisible);

    isEnabled = await submitBtn.isEnabled(); //true
    console.log(isEnabled);

    isDisable = await submitBtn.isDisabled(); //false
    console.log(isDisable);
    
  
        

})();


