import { test, expect } from '@playwright/test';
import { doLogin, makePayment, selectFile } from './Login.spec';

test('IssuanceofDuplicateLicense', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'License ' }).click();
  await page.getByRole('link', { name: 'Issuance of Duplicate License' }).click();

  await page.getByRole('textbox', { name: ': License Number *' }).click();
  await page.getByRole('textbox', { name: ': License Number *' }).fill('KT1100');
  await page.getByRole('button', { name: 'Search' }).click();

  await page.getByRole('button', { name: 'Proceed' }).click();


  await page.getByRole('radio', { name: 'Online' }).check();


  await page.getByRole('button', { name: 'Submit' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Yes' }).click();


  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Proceed' }).click();

  await makePayment(page);
});