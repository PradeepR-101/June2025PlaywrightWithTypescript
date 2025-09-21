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
    
    //<img alt='naveenopencart'>
    //await page.getByAltText('naveenopencart').click();
    
    //<input type="text" class="form-input" data-testid="username-input" placeholder="Enter your username" required="">
    // await page.getByTestId('username-input').fill('Naveen Automation Labs');
    // await page.getByTestId('home-nav-btn').click();


    //<input type="text" name="firstname" value="" placeholder="First Name" id="input-firstname" class="form-control">
   // await page.getByTestId('input-firstname').fill('Naveen Automation Labs'); //error - invalid
    // await page.locator('#input-firstname').fill('Naveen Automation Labs'); //valid
    
    //check the title attribute value:
    //<img title="naveenopencart" alt="naveenopencart" class="img-responsive">
    //await page.getByTitle('naveenopencart').click();

    //check the placeholder attribute value:
    await page.getByPlaceholder('');
    
    



   // await page.close();

})();