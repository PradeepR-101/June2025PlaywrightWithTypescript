import { Browser, chromium, firefox, webkit, Locator, Page, selectors, expect } from "@playwright/test";

//IIFE
(async () => {

    //selectors.setTestIdAttribute('data-testid');

    let browser: Browser = await chromium.launch(
        {
            headless: false,
            channel: 'chrome',
        });
    let page: Page = await browser.newPage();
    await page.goto('https://www.facebook.com/r.php?entry_point=login');

    let day:Locator = page.locator('#day');
    let month:Locator = page.locator('#month');
    let year: Locator = page.locator('#year');
    
    //selectOption() method will check select-option html tags

    //select by value attribute: II
    // await day.selectOption('5');
    // await month.selectOption('10');
    // await year.selectOption('2020');

    // await page.waitForTimeout(3000);

    // //select by visible text(label): I
    // await day.selectOption({ label: '15' });
    // await month.selectOption({ label: 'Jun' });
    // await year.selectOption({ label: '2010' });

    // await page.waitForTimeout(3000);

    // //select by index: III
    // await day.selectOption({ index: 2 });
    // await month.selectOption({ index: 11 });
    // await year.selectOption({ index: 6 });
    
    await selectDropDownByValue(day, '5');
    await selectDropDownByValue(month, '10');
    await selectDropDownByValue(year, '2020');

    await page.waitForTimeout(3000);

   await selectDropDownByLabel(day, '15');
   await selectDropDownByLabel(month, 'Jun');
    await selectDropDownByLabel(year, '2019');
    
    await page.waitForTimeout(3000);

    await selectDropDownByIndex(day, 10);
    await selectDropDownByIndex(month, 4);
    await selectDropDownByIndex(year, 8);

    

})();

async function selectDropDownByValue(element: Locator,  value: string): Promise<void> {
    await element.selectOption(value);
    await expect(element).toHaveValue(value);
}

async function selectDropDownByLabel(element: Locator,  labelValue: string): Promise<void> {
    await element.selectOption({ label: labelValue });
    let selectedValue = await element.inputValue();
    await expect(element).toHaveValue(selectedValue);
}

async function selectDropDownByIndex(element: Locator,  indexVal: number): Promise<void> {
    await element.selectOption({ index: indexVal });
    let selectedValue = await element.inputValue();
    await expect(element).toHaveValue(selectedValue);
}