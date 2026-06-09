import { test, expect } from '@playwright/test';
import { doLogin, makePayment, selectFile } from './Login.spec';

test('InclusionOfChildName', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Birth and Death ' }).click();
  await page.getByRole('link', { name: 'Inclusion Of Child Name' }).click();
  await page.locator('.input-group-addon').click();
  await page.locator('#brDob').click();
  await page.getByRole('combobox').nth(1).selectOption('2015');
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByTitle('Edit').first().click();
  await page.getByRole('textbox', { name: ': Child Name(in English) *' }).click();
  await page.getByRole('textbox', { name: ': Child Name(in English) *' }).fill('Ravi');
  await page.getByRole('textbox', { name: ': Child Name(in English) *' }).press('ArrowLeft');

  await page.getByRole('link', { name: 'Certificate Print Details +' }).click();
  await page.locator('#noOfCopies').click();
  await page.locator('#noOfCopies').fill('1');
  await page.getByRole('radio', { name: 'Online' }).check();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Save' }).click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Proceed' }).click();
  await makePayment(page);
});