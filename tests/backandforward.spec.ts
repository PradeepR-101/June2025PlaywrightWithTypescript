import { test, expect } from '@playwright/test';

  
test('back and forward button simulation test', async ({ page }) => {
    test.setTimeout(60000); // Set timeout for the test
    await page.goto('https://playwright.dev/');
    console.log(await page.title());
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    console.log(await page.title());
    await page.goBack();
    console.log(await page.title());
    await page.goForward();
    console.log(await page.title());
    await page.goBack();
    console.log(await page.title());

    await page.waitForTimeout(5000);

    await page.reload();//refresh the page

});