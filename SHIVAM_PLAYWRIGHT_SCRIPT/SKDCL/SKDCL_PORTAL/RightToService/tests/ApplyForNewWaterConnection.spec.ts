import { test, expect } from '@playwright/test';
import { doLogin } from './Login.spec';

test('ApplyForNewWaterConnection', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);
  await page.getByRole('link', { name: ' Citizen Services' }).click();
  await page.getByRole('link', { name: 'Right to Service ' }).click();
  await page.getByRole('link', { name: 'Apply For New Water Connection' }).click();
  await page.locator('#csFirstName').click();
  await page.locator('#csFirstName').fill('Shivam Koshti');
  await page.locator('#csGender').selectOption('80');
  await page.locator('#csAddress1').click();
  await page.locator('#csAddress1').fill('MHADA');
  await page.locator('#csPinCode').click();
  await page.locator('#csPinCode').fill('410401');
  await page.locator('#csMobileNo').click();
  await page.locator('#csMobileNo').fill('9157285139');
  await page.getByLabel('Div').selectOption('300000001');
  await page.getByLabel('Ward').selectOption('500000003');
  await page.getByLabel('Zone').selectOption('600000003');
  await page.locator('#csCcncategory1').selectOption('745');
  await page.getByLabel('Sub-Category').selectOption('747');
  await page.locator('#propertyNo').click();
  await page.locator('#propertyNo').fill('B41011328300');
  await page.getByRole('button', { name: ' Search' }).click();
  await page.locator('#flatNo').selectOption('002');
  await page.locator('#withoutBhagiRathi').selectOption('419');
  await page.getByLabel('Connection Type').selectOption('743');
  await page.locator('#trmGroup2').selectOption('863');
  await page.getByLabel('Premises Type').selectOption('928');
  await page.locator('#trmGroup2').selectOption('1286');
  await page.locator('#trmGroup2').selectOption('869');
  await page.getByLabel('Premises Type').selectOption('923');
  await page.locator('#plumber').selectOption('100000062');
  await page.getByRole('textbox', { name: ': Address Line1 *' }).click();
  await page.getByRole('button', { name: 'Confirm to Proceed' }).click();


  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#checkList0').setInputFiles('tests/assets/sample file.pdf');
  await expect(uploadContainer.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.locator('text=sample file.pdf')).toBeVisible();

  const uploadContainer2 = page.locator('#file_list_1');
  await page.locator('#checkList1').setInputFiles('tests/assets/sample file 1.pdf');
  await expect(uploadContainer2.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer2.locator('text=sample file 1.pdf')).toBeVisible();

  const uploadContainer3 = page.locator('#file_list_2');
  await page.locator('#checkList2').setInputFiles('tests/assets/sample file 2.pdf');
  await expect(uploadContainer3.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer3.locator('text=sample file 2.pdf')).toBeVisible();

  const uploadContainer4 = page.locator('#file_list_3');
  await page.locator('#checkList3').setInputFiles('tests/assets/sample file 3.pdf');
  await expect(uploadContainer4.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer4.locator('text=sample file 3.pdf')).toBeVisible();

  const uploadContainer5 = page.locator('#file_list_4');
  await page.locator('#checkList4').setInputFiles('tests/assets/sample file 4.pdf');
  await expect(uploadContainer5.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer5.locator('text=sample file 4.pdf')).toBeVisible();

  const uploadContainer6 = page.locator('#file_list_5');
  await page.locator('#checkList5').setInputFiles('tests/assets/sample file 5.pdf');
  await expect(uploadContainer6.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer6.locator('text=sample file 5.pdf')).toBeVisible();

  const uploadContainer7 = page.locator('#file_list_6');
  await page.locator('#checkList6').setInputFiles('tests/assets/sample file 6.pdf');
  await expect(uploadContainer7.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer7.locator('text=sample file 6.pdf')).toBeVisible();

  const uploadContainer8 = page.locator('#file_list_7');
  await page.locator('#checkList7').setInputFiles('tests/assets/sample file 7.pdf');
  await expect(uploadContainer8.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer8.locator('text=sample file 7.pdf')).toBeVisible();


  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await page.getByRole('checkbox', { name: 'Billing Address same as above' }).check();
  await page.getByRole('button', { name: 'Save and Continue' }).click();
  await page.getByRole('checkbox', { name: 'I have read and I accept the' }).check();
  await page.getByRole('checkbox', { name: 'I will submit hardcopy of the' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Print' }).click();
});