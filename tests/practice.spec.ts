import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('heading', { name: 'Click the button below to' }).click();
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('button', { name: 'Submit' }).first().click();
  await page.getByRole('button', { name: 'Open All Categories Menu' }).click();
  await page.getByRole('button', { name: 'Computers' }).click();
  await page.getByRole('link', { name: 'Computers & Tablets' }).click();
  await page.goto('https://www.amazon.com/');
  await page.getByRole('button', { name: 'Open All Categories Menu' }).click();
  await page.getByRole('button', { name: 'Smart Home' }).click();
  await page.getByRole('button', { name: 'Close menu' }).click();
  await page.getByRole('link', { name: 'Registry' }).click();
});