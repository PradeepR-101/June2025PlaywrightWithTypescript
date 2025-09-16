import {Browser, chromium, firefox, Locator, Page} from '@playwright/test'

(async ()=>{

    let browser:Browser = await firefox.launch({headless:false});
    let page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login")

    let title:String = await page.title();
    console.log('title is '+title)

    let url:String = page.url()
    console.log('url is '+url)

    let email:Locator = page.locator("[id='input-email']");
    await email.fill("pradeep");

    await page.close();
    
})();