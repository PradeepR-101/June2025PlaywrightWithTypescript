import { chromium, Dialog, Locator } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ channel: 'chrome', headless: false });
    const page = await browser.newPage();


    //create event listener for Accept Cookies button:
    //background listener:
    page.on('framenavigated', async () => {
        let acceptCookiesButton = page.locator(`#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`);
        if (await acceptCookiesButton.isVisible()) {
            await acceptCookiesButton.click();
        }
    });

    await page.goto("https://www.orangehrm.com/en/contact-sales/");
    //await page.locator(`#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll`).click();//click on accept cookies

    //target = _blank --> for a new tab/window

    let [newTab] = await Promise.all([
         page.waitForEvent('popup'),
         page.locator(`//a[contains(@href, 'linkedin')]`).click() //open a new tab/window -- popup event will be triggered
    ]);
    //special note:
    //dont use await in Promise.all - because if any of the promises is fulfilled, it will be retunred immedialtely.
    //Dont change the sequence also - first wait for the event, then trigger the event by clicking on it.
    //dont use await page.locator().click() then await page.waitForEvent() - it will be running in the sequential mode.
    //after click() - promise is fulfilled and it will be returned - it wont capture the event.
    //so always use without await here with the same sequence:
    //1st wait for the popup event
    //2nd perform click on the element.

    

    await page.waitForTimeout(4000);

     console.log(await newTab.title());
    console.log(newTab.url());
    
    //close the child window:
    await newTab.close();

    await page.waitForTimeout(4000);

    await page.bringToFront();
    console.log('parent window title: ' + await page.title());




  
})();
