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
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');

    //to get the header using css:
    //locator(`h1:text('Employee Management System')`)
    
    //td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']
    //td[text()='John.Smith']/preceding-sibling::td/input[@type='checkbox']

    //xpath:
    // await page.locator(`//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']`).click();
    // await page.locator(`//td[text()='John.Smith']/preceding-sibling::td/input[@type='checkbox']`).click();

    //css:
    //await page.locator(`tr:has(td:text('John.Smith'))`).locator('td').first().click();


    // await selectUser(page, 'Joe.Root');
    // await selectUser(page, 'John.Smith');

    //selectUserWithCss(page, 'Joe.Root');

    //get all the column data values:
    // let userData: string[] = await page.locator(`//td[text()='John.Smith']/following-sibling::td`).allInnerTexts();
    // console.log(userData);

    let johnData = await getUserData(page, 'John.Smith');
    console.log(johnData);

   // cricinfo
    //a[@title='Shubman Gill']/ancestor::td/following-sibling::td//span/span

    //css with text

})();

/**
 * this mehtod returns the user data from other columns
 * @param page 
 * @param username 
 * @returns 
 */
async function getUserData(page: Page, username: string): Promise<string[]> {
    return await page.locator(`//td[text()='${username}']/following-sibling::td`).allInnerTexts();
}

async function selectUser(page: Page, username: string): Promise<void> {
    await page.locator(`//td[text()='${username}']/preceding-sibling::td/input[@type='checkbox']`).click();

}

async function selectUserWithCss(page: Page, username: string): Promise<void> {
    await page.locator(`tr:has(td:text('${username}'))`).locator('td').first().click();

}

