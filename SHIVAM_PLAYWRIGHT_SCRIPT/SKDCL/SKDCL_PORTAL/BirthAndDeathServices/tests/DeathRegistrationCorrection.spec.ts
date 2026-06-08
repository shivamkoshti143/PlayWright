import { test, expect } from '@playwright/test';
import { doLogin, makePayment, selectFile } from './Login.spec';

test('DeathRegistrationCorrection', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Birth and Death ' }).click();
  await page.getByRole('link', { name: 'Death Registration Correction' }).click();
  await page.getByRole('textbox', { name: ': Registration Year' }).click();
  await page.getByRole('textbox', { name: ': Registration Year' }).fill('2015');
  await page.getByRole('textbox', { name: ': Registration Number' }).click();
  await page.getByRole('textbox', { name: ': Registration Number' }).fill('345');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByTitle('Edit').click();
  
await page.locator('#corrCategory_chosen').getByRole('textbox').click();
await page.locator('#corrCategory_chosen').getByText('Deceased Name').click();
await page.getByRole('textbox', { name: ': Deceased Name(in English) *' }).click();
await page.getByRole('textbox', { name: ': Deceased Name(in English) *' }).press('ControlOrMeta+a');
await page.getByRole('textbox', { name: ': Deceased Name(in English) *' }).fill('HARI PATEL');
await page.getByRole('link', { name: 'Informant\'s Details +' }).click();
await page.getByRole('heading', { name: 'Others Details +' }).click();
await page.getByRole('link', { name: 'Others Details +' }).click();
await page.getByRole('link', { name: 'Medical Certificate Details +' }).click();
await page.getByLabel('Division').selectOption('1346');
await page.getByRole('link', { name: 'Certificate Print Details +' }).click();
await page.locator('#numberOfCopies').click();
await page.locator('#numberOfCopies').fill('1');
await page.getByRole('button', { name: 'Proceed' }).click();






await page.getByRole('link', { name: 'Certificate Print Details +' }).click();

  const uploadContainer2 = page.locator('#file_list_2');
  await page.locator('#checkList2').setInputFiles(selectFile('sample file 2.pdf'));
  await expect(uploadContainer2.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer2.getByText('sample file 2.pdf')).toBeVisible();

  const uploadContainer3 = page.locator('#file_list_3');
  await page.locator('#checkList3').setInputFiles(selectFile('sample file 3.pdf'));
  await expect(uploadContainer3.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer3.getByText('sample file 3.pdf')).toBeVisible();

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Save' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();

});