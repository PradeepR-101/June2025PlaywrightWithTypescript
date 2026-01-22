
import { test, expect } from '@playwright/test';
import fs from 'fs';

test('file download test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  // Wait for the download while performing the click
  const download = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: 'SomeFile.txt' }).nth(0).click(),
  ]).then(results => results[0]); // first result is the download

  // Save download to a specific path
  const downloadPath = './downloads/' + download.suggestedFilename();
  await download.saveAs(downloadPath);

  expect(fs.existsSync(downloadPath)).toBeTruthy();

  // Optionally, clean up the downloaded file after the test
  fs.unlinkSync(downloadPath);
});