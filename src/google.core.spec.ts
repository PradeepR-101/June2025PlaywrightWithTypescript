import { Browser, chromium, firefox, webkit, Locator, Page, selectors } from "@playwright/test";

//IIFE
(async () => {

    //selectors.setTestIdAttribute('data-testid');

    let browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome',
            //executablePath: `/Applications/Brave Browser.app/Contents/MacOS/Brave Browser`
        });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');//1000ms
    
    let title:string = await page.title(); //10secs  
    console.log('page title : ' + title);
    
    let url: string =  page.url();
    console.log('page url : ' + url);

    // let emailID: Locator = page.locator('#input-email');
    // await emailID.fill('naveen@gmail.com');

    let emailID: Locator =  page.getByTestId('input-email');
    await emailID.highlight();
    await emailID.fill('naveen@gmail.com');


   // await page.close();

})();