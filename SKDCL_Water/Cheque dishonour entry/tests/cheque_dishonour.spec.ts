import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://103.41.33.174/Skdcl/MainetService/Home.html');
  await page.getByTitle('English ').click();
  await page.locator('#adminLoginForm').click();
  await page.locator('#adminLoginForm').click();
  await page.getByRole('textbox', { name: 'User ID' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).fill('EEWT004');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Mba@1234');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Water Tax' }).click();
  await page.locator('div').filter({ hasText: 'Kalyan Dombivli Municipal' }).nth(4).click();
  await page.getByRole('link', { name: 'Cheque Dishonor/ Clearance' }).click();
  await page.locator('a').filter({ hasText: 'Select Department' }).click();
  await page.locator('#department_chosen').getByRole('textbox').fill('water');
  await page.locator('#department_chosen').getByText('Water Supply Department').click();
  await page.getByRole('button', { name: ' Search' }).click();
  await page.locator('#checkDishonor0').selectOption('Y');
  await page.locator('#chequeDishonorDate0').click();
  await page.getByRole('link', { name: '27' }).click();
  await page.locator('#remark0').click();
  await page.locator('#remark0').fill('dishonour ');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
});