import { test, expect } from '@playwright/test';
import { doLogin } from './Login.spec';

test('PropertyOwnershipTransfer', async ({ page }) => {
  test.setTimeout(0);
  // Read Excel

  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Property Tax ' }).click();
  await page.getByRole('link', { name: 'Property Ownership Transfer' }).click();

  await page.locator('#assNo').click();
  await page.locator('#assNo').fill('A01004918000');
  await page.getByRole('button', { name: ' Search' }).click();
});