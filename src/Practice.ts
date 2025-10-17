import { Browser, BrowserContext, chromium, Page  } from "@playwright/test";

(async () => {

    let browser:Browser = await chromium.launch(
        {
            headless:false,
            channel: 'chrome'
        })

       let context:BrowserContext = await browser.newContext();
       let page:Page = await context.newPage();

       page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

       await Promise.all([
        page.waitForEvent('popup'),
        page.click('text=Facebook')
       ])
})();