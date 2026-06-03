import { test, expect } from '@playwright/test';
import { doLogin, makePayment, selectFile } from './Login.spec';

test('CancellationOfLicense', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'License ' }).click();
  await page.getByRole('link', { name: 'Cancellation of License' }).click();

  await page.locator('#licenseNo').click();
  await page.locator('#licenseNo').fill('KT1202');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: ': Remark *' }).click();
  await page.getByRole('textbox', { name: ': Remark *' }).fill('Shifting to another City');
  await page.getByRole('button', { name: 'Proceed' }).click();

  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#checkList0').setInputFiles(selectFile('sample file.pdf'));
  await expect(uploadContainer.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.getByText('sample file.pdf')).toBeVisible();

  const uploadContainer1 = page.locator('#file_list_1');
  await page.locator('#checkList1').setInputFiles(selectFile('sample file 1.pdf'));
  await expect(uploadContainer1.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer1.getByText('sample file 1.pdf')).toBeVisible();

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Submit' }).click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Proceed' }).click();
});