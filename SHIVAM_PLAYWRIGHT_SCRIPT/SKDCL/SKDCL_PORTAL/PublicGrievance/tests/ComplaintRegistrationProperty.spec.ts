import { test, expect } from '@playwright/test';
import { doLogin, selectFile } from './Login.spec';

test('ComplaintRegistrationProperty', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);
  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Public Grievances ' }).click();
  await page.getByRole('link', { name: 'Grievance Registration' }).click();
  await page.getByLabel('Complaint Type').selectOption('6');
  await page.getByLabel('Complaint Sub Type').selectOption('288');


  await page.locator('#extReferNumber').click();
  await page.locator('#extReferNumber').fill('A01004918100');
  await page.evaluate(() => {
    const select = document.querySelector('#flatNo');
    if (select) {
      select.style.display = 'block';
    }
  });
    await page.locator('#flatNo').click();

  await page.locator('#flatNo').selectOption('1');
  await page.locator('#flatNo_chosen').getByText('1').click();

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