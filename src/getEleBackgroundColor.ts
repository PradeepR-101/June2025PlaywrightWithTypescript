import { chromium, Locator } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.orangehrm.com/en/contact-sales/");
  
  let contactSales:Locator = page.getByRole('button', { name: 'Contact Sales' }).first();

  //get the background color of the element:
  let bgColor: string = await contactSales.evaluate(ele => getComputedStyle(ele).backgroundColor);
  console.log("background color: " + bgColor);
  

    //get the text color of the element:
  let color: string = await contactSales.evaluate(ele => getComputedStyle(ele).color);
  console.log("text color: "+ color);

  //page.evaluate(() => alert('Hello Naveen')); 

  
})();
