import { test, expect } from '@playwright/test';
import { doLogin, selectFile } from '../../PublicGrievance/tests/Login.spec';

test('ComplaintRegistration', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);
  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Public Grievances ' }).click();
  await page.getByRole('link', { name: 'Grievance Registration' }).click();
  await page.getByLabel('Complaint Type').selectOption('4');
  await page.getByLabel('Complaint Sub Type').selectOption('245');
  await page.getByRole('textbox', { name: ': Landmark/Location *' }).click();
  await page.getByRole('textbox', { name: ': Landmark/Location *' }).fill('Kalya');
  await page.getByRole('textbox', { name: ': Landmark/Location *' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: ': Landmark/Location *' }).fill('Kala nadi');
  await page.getByRole('textbox', { name: ': Complaint Description *' }).click();
  await page.getByRole('textbox', { name: ': Complaint Description *' }).fill('Certificate pending');
  await page.getByLabel('Division').selectOption('1346');

  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#file').setInputFiles(selectFile('sample file.pdf'));

  await expect(uploadContainer.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.getByText('sample file.pdf')).toBeVisible();
  
  await page.getByRole('button', { name: 'Submit' }).click(); (page);
});