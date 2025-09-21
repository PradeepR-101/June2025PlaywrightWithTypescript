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
    await page.goto('https://www.freshworks.com/');
  
    //h1 -- to -- h6 : headers --- heading

    //h1 - Uncomplicate
    let header: string = await page.getByRole('heading', { name: 'Uncomplicate' }).innerText();
    console.log(header);
    
    //getByRole('heading', { name: 'Uncomplicate your IT and customer service' })
    //span, div, p --> getByRole is not applicable, better to use page.locator(css/xpath), page.getByText()

    let secondHeader: string = await page.getByText('Freshworks provides').innerText();
    console.log(secondHeader);

    //h2- Uncomplicate: level 1-6
    page.getByRole('heading', { name: 'Uncomplicate', level: 2 }); 

    


})();


