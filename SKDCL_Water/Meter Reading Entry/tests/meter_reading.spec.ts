import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://103.41.33.174/Skdcl/MainetService/Home.html');
  await page.getByTitle('English').click();
  await page.getByRole('textbox', { name: 'User ID' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).fill('JEWT002');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Mba@1234');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Water Tax' }).click();
  await page.locator('div').filter({ hasText: 'Kalyan Dombivli Municipal' }).nth(4).click();
  await page.getByRole('link', { name: 'Meter Reading Entry' }).click();
  await page.getByRole('textbox', { name: ': Connection No. *' }).click();
  await page.getByRole('textbox', { name: ': Connection No. *' }).fill('A010002706');
  await page.getByRole('button', { name: ' Search' }).click();
  await page.goto('http://103.41.33.174/Skdcl/MainetService/Home.html');
  await page.getByTitle('English ').click();
  await page.locator('div').filter({ hasText: 'Select Organisation Kalyan' }).nth(2).click();
  await page.getByRole('textbox', { name: 'User ID' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).fill('DYEWT005');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Mba@1234');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Water Tax' }).click();
  await page.getByRole('link', { name: 'Meter Reading Entry' }).click();
  await page.getByRole('textbox', { name: ': Connection No. *' }).click();
  await page.getByRole('textbox', { name: ': Connection No. *' }).fill('A010002706');
  await page.getByRole('textbox', { name: ': Connection No. *' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('button', { name: ' Search' }).click();
  await page.locator('#mrdMtrread0').click();
  await page.locator('#mrdMtrread0').fill('16550');
  await page.locator('#mrdMtrread0').press('Tab');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
});