import { test, expect } from '@playwright/test';
import { doLogin, selectFile } from './Login.spec';

test('ComplaintRegistrationWater', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);
  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Public Grievances ' }).click();
  await page.getByRole('link', { name: 'Grievance Registration' }).click();
  await page.getByLabel('Complaint Type').selectOption('5');
  await page.getByLabel('Complaint Sub Type').selectOption('346');

  await page.locator('#extReferNumber').click();
  await page.locator('#extReferNumber').fill('A010013126');
  await page.getByRole('textbox', { name: ': Landmark/Location *' }).click();
  await page.getByRole('textbox', { name: ': Landmark/Location *' }).fill('Kala nadi');
  await page.getByRole('textbox', { name: ': Complaint Description *' }).click();
  await page.getByRole('textbox', { name: ': Complaint Description *' }).fill('Certificate pending');
  
  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#file').setInputFiles(selectFile('sample file.pdf'));
  await expect(uploadContainer.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.getByText('sample file.pdf')).toBeVisible();
  
  await page.getByRole('button', { name: 'Submit' }).click();
});