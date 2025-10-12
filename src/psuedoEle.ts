import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

  //Psuedo Elements:
  //1. Psuedo classes
  //2. ::before, ::after
  //it has no html tag, no attributes

  //window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('content')
  //window.getComputedStyle(document.querySelector('label[for="input-firstname"]'), '::before').getPropertyValue('color')


  let content = await page.evaluate(() => {
    return window.getComputedStyle(
      document.querySelector('label[for="input-firstname"]')!,
      '::before')
      .getPropertyValue('content');
  })

  console.log('content : ' + content);
  if (content.includes('*')) {
    console.log('first name is a mandatory field');
  }
 
  let color = await page.evaluate(() => {
    return window.getComputedStyle(
      document.querySelector('label[for="input-firstname"]')!,
      '::before')
      .getPropertyValue('color');
  })

  console.log('color : ' + color);



})();
