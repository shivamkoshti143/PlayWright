import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://103.41.33.174/Skdcl/MainetService/Home.html');
  await page.getByTitle('English ').click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).fill('DYEWT005');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Mba@1234');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Water Tax' }).click();
  await page.locator('div').filter({ hasText: 'Kalyan Dombivli Municipal' }).nth(4).click();
  await page.getByRole('link', { name: 'Bill Generation' }).click();
  await page.getByRole('textbox', { name: ': Connection No. *' }).click();
  await page.getByRole('textbox', { name: ': Connection No. *' }).fill('B019609568');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('div').filter({ hasText: 'Kalyan Dombivli Municipal' }).nth(4).click();
});