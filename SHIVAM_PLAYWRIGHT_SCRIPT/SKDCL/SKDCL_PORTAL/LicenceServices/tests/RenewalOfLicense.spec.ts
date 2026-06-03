import { test, expect } from '@playwright/test';
import { doLogin, makePayment, selectFile } from './Login.spec';

test('RenewalOfLicense', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'License ' }).click();
  await page.getByRole('link', { name: 'Renewal of License' }).click();

  await page.getByRole('textbox', { name: ': License Number *' }).click();
  await page.getByRole('textbox', { name: ': License Number *' }).fill('KT2039');
  await page.getByRole('link').filter({ hasText: 'search' }).click();

  await page.locator('#troMobileno').click();
  await page.locator('#troMobileno').press('ControlOrMeta+a');
  await page.locator('#troMobileno').fill('9157285139');
  await page.locator('#renewalPeriod').selectOption('503');

  await page.getByRole('button', { name: 'Proceed' }).click();

  await page.getByRole('radio', { name: 'Online' }).check();
  await page.getByRole('button', { name: 'Confirm to Proceed' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Yes' }).click();

  await page.getByRole('button', { name: 'Proceed', exact: true }).click();
  await makePayment(page);
});