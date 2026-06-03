import { test, expect } from '@playwright/test';
import { doLogin, selectFile } from './Login.spec';

test('MarriageRegistration', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Marriage Registration ' }).click();
  await page.getByRole('link', { name: 'Marriage Registration' }).click();

  



  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#checkList0').setInputFiles(selectFile('sample file.pdf'));
  await expect(uploadContainer.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.getByText('sample file.pdf')).toBeVisible();

  const uploadContainer1 = page.locator('#file_list_1');
  await page.locator('#checkList1').setInputFiles(selectFile('sample file 1.pdf'));
  await expect(uploadContainer1.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer1.getByText('sample file 1.pdf')).toBeVisible();

  const uploadContainer2 = page.locator('#file_list_2');
  await page.locator('#checkList2').setInputFiles(selectFile('sample file 2.pdf'));
  await expect(uploadContainer2.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer2.getByText('sample file 2.pdf')).toBeVisible();

  const uploadContainer3 = page.locator('#file_list_3');
  await page.locator('#checkList3').setInputFiles(selectFile('sample file 3.pdf'));
  await expect(uploadContainer3.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer3.getByText('sample file 3.pdf')).toBeVisible();

  const uploadContainer4 = page.locator('#file_list_4');
  await page.locator('#checkList4').setInputFiles(selectFile('sample file 4.pdf'));
  await expect(uploadContainer4.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer4.getByText('sample file 4.pdf')).toBeVisible();

  const uploadContainer5 = page.locator('#file_list_5');
  await page.locator('#checkList5').setInputFiles(selectFile('sample file 5.pdf'));
  await expect(uploadContainer5.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer5.getByText('sample file 5.pdf')).toBeVisible();

  const uploadContainer6 = page.locator('#file_list_6');
  await page.locator('#checkList6').setInputFiles(selectFile('sample file 6.pdf'));
  await expect(uploadContainer6.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer6.getByText('sample file 6.pdf')).toBeVisible();

  const uploadContainer7 = page.locator('#file_list_7');
  await page.locator('#checkList7').setInputFiles(selectFile('sample file 7.pdf'));
  await expect(uploadContainer7.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer7.getByText('sample file 7.pdf')).toBeVisible();

  const uploadContainer8 = page.locator('#file_list_8');
  await page.locator('#checkList8').setInputFiles(selectFile('sample file 8.pdf'));
  await expect(uploadContainer8.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer8.getByText('sample file 8.pdf')).toBeVisible();

  const uploadContainer9 = page.locator('#file_list_9');
  await page.locator('#checkList9').setInputFiles(selectFile('sample file 9.pdf'));
  await expect(uploadContainer9.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer9.getByText('sample file 9.pdf')).toBeVisible();

  const uploadContainer10 = page.locator('#file_list_10');
  await page.locator('#checkList10').setInputFiles(selectFile('sample file 10.pdf'));
  await expect(uploadContainer10.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer10.getByText('sample file 10.pdf')).toBeVisible();

  await page.getByRole('button', { name: 'Confirm to Proceed' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Yes' }).click();
  const page1 = await page1Promise;

});