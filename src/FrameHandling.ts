import { Browser, chromium, firefox, webkit, Locator, Page, selectors, expect, FrameLocator } from "@playwright/test";

//IIFE
(async () => {

    //selectors.setTestIdAttribute('data-testid');

    let browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome',
        });
    let page: Page = await browser.newPage();
//     await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');
//     await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();
    
//     //iframe will be loaded:
//    let frameEle: FrameLocator =  page.frameLocator(`iframe[id*='frame-one']`);
//     frameEle.locator('#RESULT_TextField-1').fill('Test Automation');     
   
//     let header = await page.locator(`h3.details__form-preview-title`).innerText();
//     console.log(header); 
    
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');
    let frameEle: FrameLocator = page.frameLocator(`[name='main']`);
    let header = await frameEle.locator('h2').innerText();    
    console.log(header);

    //print total number of frames on the page:
    let allFrames: Locator[] =  await page.locator(`//frame`).all();
    console.log("total number of frames: " + allFrames.length);
    
    for (let frameEle of allFrames) {
        console.log(await frameEle.getAttribute('name') , ": ", await frameEle.getAttribute('src'));
    }

    //
    console.log(page.frames().length);




})();

