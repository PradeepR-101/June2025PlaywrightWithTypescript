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
//     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
//     //1st:
//     //find the element using locator + perform the action
//     // await page.locator('#input-email').fill('march2024@open.com');
//     // await page.locator('#input-password').fill('Selenium@12345');
//     // await page.locator(`input[value='Login']`).click();
//    // await page.locator('input[value="Login"]').click();

//     //2nd:
//     //find the element using locator (css)
//     let emailId: Locator = page.locator('#input-email');
//     let password: Locator = page.locator('#input-password');
//     let loginBtn:Locator = page.locator(`input[value='Login']`);

//     //perform the action: using await
//     await emailId.fill('march2024@open.com');
//     await password.fill('Selenium@12345');
//     await loginBtn.click();

//     //6 elements -- same text: My Account --> 3rd: 2
//     //let header: string | null = await page.getByText('My Account').nth(2).textContent();
    
//     //using xpath: 
//   let header: string | null =  await page.locator(`//h2[text()='My Account']`).textContent();
//     console.log(header);

    //using element placeholder value:
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByPlaceholder('First Name').fill('testing'); 
    //await page.getByPlaceholder('Telephone').highlight();
    await page.getByPlaceholder('Telephone').fill('98989898989');

    //highlight - debugging:
   // await page.locator('#input-firstname').highlight();

    //enter value with a delay: char by char like a real user -- serach feature
    await page.locator('#input-lastname').pressSequentially('Automation Testing Labs', {delay: 200});


})();