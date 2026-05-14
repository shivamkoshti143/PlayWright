import { test, expect } from '@playwright/test';
import { doLogin } from './Login.spec';

test('DisconnectionWater', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);
  await page.getByRole('link', { name: ' Citizen Services' }).click();
  await page.getByRole('link', { name: 'Water Supply ' }).click();
  await page.getByRole('link', { name: 'Disconnection of Water' }).click();
  await page.getByRole('textbox', { name: ': Address Line1 *' }).click();
  await page.getByRole('textbox', { name: ': Address Line1 *' }).fill('mhada');
  await page.getByLabel('Div').selectOption('300000001');
  await page.getByLabel('Ward').selectOption('500000003');
  await page.getByLabel('Zone').selectOption('600000003');
  await page.locator('#csIdn').click();
  await page.locator('#csIdn').fill('A010013126');
  await page.getByRole('button', { name: ' Search' }).click();
  await page.locator('#discType').selectOption('427');
  await page.locator('#discReason').click();
  await page.locator('#discReason').fill('Automated Testing');
  await page.locator('#plumber').selectOption('100000062');
  await page.locator('#confirmToProceedId').click();

  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#disconnectionEntity\\.fileList0').setInputFiles('tests/assets/sample file.pdf');
  await expect(uploadContainer.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.locator('text=sample file.pdf')).toBeVisible();

  const uploadContainer2 = page.locator('#file_list_1');
  await page.locator('#disconnectionEntity\\.fileList1').setInputFiles('tests/assets/sample file 1.pdf');
  await expect(uploadContainer2.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer2.locator('text=sample file 1.pdf')).toBeVisible();

  const uploadContainer3 = page.locator('#file_list_2');
  await page.locator('#disconnectionEntity\\.fileList2').setInputFiles('tests/assets/sample file 2.pdf');
  await expect(uploadContainer3.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer3.locator('text=sample file 2.pdf')).toBeVisible();

  await page.getByRole('checkbox', { name: 'I will submit hardcopy of the' }).check();
  await page.locator('#submitAndPayButtonId').click();
});