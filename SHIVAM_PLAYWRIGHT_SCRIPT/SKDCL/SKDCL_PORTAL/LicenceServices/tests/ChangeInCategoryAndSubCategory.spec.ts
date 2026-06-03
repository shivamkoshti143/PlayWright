import { test, expect } from '@playwright/test';
import { doLogin, makePayment, selectFile } from './Login.spec';

test('ChangeInCategoryAndSubCategory', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'License ' }).click();
  await page.getByRole('link', { name: 'Change in Category Subcategory' }).click();

  await page.locator('#licenseNo').click();
  await page.locator('#licenseNo').fill('KT1118');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Edit Application' }).click();
  await page.locator('#triCategory1').selectOption('243');
  await page.locator('#triCategory2').selectOption('253');
  await page.locator('#triCategory3').selectOption('1223');
  await page.locator('#triCategory4').selectOption('1235');
  await page.getByRole('row', { name: 'License for Manufacturing of' }).getByPlaceholder('Enter Item value').click();
  await page.getByRole('row', { name: 'License for Manufacturing of' }).getByPlaceholder('Enter Item value').press('ControlOrMeta+a');
  await page.getByRole('row', { name: 'License for Manufacturing of' }).getByPlaceholder('Enter Item value').fill('100');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#btnNo').click();
  
  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#checkList0').setInputFiles(selectFile('sample file.pdf'));
  await expect(uploadContainer.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.getByText('sample file.pdf')).toBeVisible();
  
  await page.getByRole('button', { name: 'Submit' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Yes' }).click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page1.getByRole('button', { name: 'Close' }).click();

});