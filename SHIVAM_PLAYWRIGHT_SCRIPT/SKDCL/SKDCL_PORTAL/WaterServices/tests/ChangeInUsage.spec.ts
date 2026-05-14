import { test, expect } from '@playwright/test';
import { doLogin } from './Login.spec';

test('ChangeInUsage', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);
  await page.getByRole('link', { name: ' Citizen Services' }).click();
  await page.getByRole('link', { name: 'Water Supply ' }).click();
  await page.getByRole('link', { name: 'Change In Usage' }).click();
  await page.getByRole('textbox', { name: ': Address Line1 *' }).click();
  await page.getByRole('textbox', { name: ': Address Line1 *' }).fill('mhada');
  await page.getByLabel('Is below poverty line').selectOption('N');
  await page.getByLabel('Div').selectOption('300000001');
  await page.getByLabel('Ward').selectOption('500000003');
  await page.getByLabel('Zone').selectOption('600000003');
  await page.locator('#conNum').click();
  await page.locator('#conNum').fill('A037163330');
  await page.locator('#searchConnection').click();
  await page.locator('select[name="requestDTO.changeOfUsage.newTrmGroup1"]').selectOption('742');
  await page.locator('select[name="requestDTO.changeOfUsage.newTrmGroup2"]').selectOption('789');
  await page.locator('select[name="requestDTO.changeOfUsage.newTrmGroup3"]').selectOption('929');
  await page.getByLabel('New Meter Type').selectOption('459');
  await page.locator('#remark').click();
  await page.locator('#remark').fill('New Request');
  await page.locator('#confirmToProceedId').click();

  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#requestDTO\\.fileList0').setInputFiles('tests/assets/sample file.pdf');
  await expect(uploadContainer.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.locator('text=sample file.pdf')).toBeVisible();

  const uploadContainer2 = page.locator('#file_list_1');
  await page.locator('#requestDTO\\.fileList1').setInputFiles('tests/assets/sample file 1.pdf');
  await expect(uploadContainer2.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer2.locator('text=sample file 1.pdf')).toBeVisible();

  const uploadContainer3 = page.locator('#file_list_2');
  await page.locator('#requestDTO\\.fileList2').setInputFiles('tests/assets/sample file 2.pdf');
  await expect(uploadContainer3.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer3.locator('text=sample file 2.pdf')).toBeVisible();

  const uploadContainer4 = page.locator('#file_list_3');
  await page.locator('#requestDTO\\.fileList3').setInputFiles('tests/assets/sample file 3.pdf');
  await expect(uploadContainer4.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer4.locator('text=sample file 3.pdf')).toBeVisible();

  const uploadContainer5 = page.locator('#file_list_4');
  await page.locator('#requestDTO\\.fileList4').setInputFiles('tests/assets/sample file 4.pdf');
  await expect(uploadContainer5.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer5.locator('text=sample file 4.pdf')).toBeVisible();

  const uploadContainer6 = page.locator('#file_list_5');
  await page.locator('#requestDTO\\.fileList5').setInputFiles('tests/assets/sample file 5.pdf');
  await expect(uploadContainer6.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer6.locator('text=sample file 5.pdf')).toBeVisible();

  const uploadContainer7 = page.locator('#file_list_6');
  await page.locator('#requestDTO\\.fileList6').setInputFiles('tests/assets/sample file 6.pdf');
  await expect(uploadContainer7.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer7.locator('text=sample file 6.pdf')).toBeVisible();

  await page.getByRole('checkbox', { name: 'I will submit hardcopy of the' }).check();
  await page.locator('#changeOfUsageSubmit').click();
});