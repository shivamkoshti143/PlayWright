import { test, expect, Page } from '@playwright/test';

export async function doLogin(page: Page) {
  test.setTimeout(0);  
  await page.goto('http://103.41.33.174/MainetService/Home.html');
  await page.getByTitle('English ').click();
  await page.getByRole('textbox', { name: 'User ID' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).fill('clkac001');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Pass@123');
  await page.getByRole('button', { name: 'Submit' }).click();
}