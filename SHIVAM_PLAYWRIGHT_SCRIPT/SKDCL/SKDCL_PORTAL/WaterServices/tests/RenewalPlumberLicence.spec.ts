import { test, expect } from '@playwright/test';
import { doLogin } from './Login.spec';

test('RenewalPlumberLicence', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);
  await page.getByRole('link', { name: ' Citizen Services' }).click();
  await page.getByRole('link', { name: 'Water Supply ' }).click();
  await page.getByRole('link', { name: 'Renewal of Plumber License' }).click();
  await page.locator('#plumberLicenceNo').click();
  await page.locator('#plumberLicenceNo').fill('KDMC/WS/PLNO/165');
  await page.getByRole('button', { name: ' View Details' }).click();
  await page.getByRole('link', { name: 'Academic/Professional Details' }).click();
  await page.getByRole('link', { name: 'Experience Details +' }).click();
  await page.locator('#confirmToProceedPlId').click();

  const uploadContainer = page.locator('#file_list_1');
  await page.locator('#plumberLicenseReqDTO\\.fileCheckList1').setInputFiles('tests/assets/sample file.pdf');
  await expect(uploadContainer.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.locator('text=sample-file.pdf')).toBeVisible();

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
});