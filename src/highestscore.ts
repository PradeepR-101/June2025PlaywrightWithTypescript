
import { Browser, chromium, expect, Page } from "@playwright/test";
import { getRandomValues } from "node:crypto";

let page: Page;

(async () => {
  const browser: Browser = await chromium.launch({
    headless: false,
    channel: "chrome",
  });

    page = await browser.newPage();
    await page.goto('https://www.espncricinfo.com/series/icc-women-s-world-cup-2025-26-1478193/new-zealand-women-vs-south-africa-women-7th-match-1490419/full-scorecard');
    
  //with xpath:
  // let allScores: string[] =
  //   await page
  //   .locator
  //   (`//span[text()='New Zealand Women']/ancestor::div[contains(@class,'fill-translucent-hover')]/following-sibling::div/table[contains(@class,'ci-scorecard-table')]//tr/td[3]`)
  //     .allInnerTexts();
  
  
  //with css :
    let allScores: string[] =
    await page
    .locator("table:has-text('Batting')").first().locator('tbody td:nth-child(3)').allInnerTexts();
  
  console.log(allScores);

  let allScoreVal: number[] = [];//empty
  for (let i = 0; i < allScores.length - 2; i++){
   // allScoreVal.push((Number)(allScores[i]));
    allScoreVal.push(parseInt(allScores[i]));
    
  }

  console.log(allScoreVal);
   allScoreVal.sort();
  allScoreVal.sort((a, b) => b - a);
  console.log(allScoreVal);

  console.log('highest score: '+ allScoreVal[0]);
  
   
})();




