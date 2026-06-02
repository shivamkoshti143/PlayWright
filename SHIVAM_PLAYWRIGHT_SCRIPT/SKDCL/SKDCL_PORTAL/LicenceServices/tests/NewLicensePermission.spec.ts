import { test, expect } from '@playwright/test';
import { doLogin, selectFile } from './Login.spec';

test('NewLicensePermission', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'License ' }).click();
  await page.getByRole('link', { name: 'New License Permission' }).click();
  await page.locator('#trdFtype').selectOption('491');
  await page.locator('#troTitle0').selectOption('1');
  await page.locator('input[name="tradeMasterDetailDTO.tradeLicenseOwnerdetailDTO[0].troName"]').click();
  await page.locator('input[name="tradeMasterDetailDTO.tradeLicenseOwnerdetailDTO[0].troName"]').fill('sHIVAM kOSHTI');
  await page.locator('#troMname0').click();
  await page.locator('#troMname0').press('CapsLock');
  await page.locator('#troMname0').fill('Rajeshbhai');
  await page.locator('select[name="tradeMasterDetailDTO.tradeLicenseOwnerdetailDTO[0].troGen"]').selectOption('M');
  await page.locator('#troAddress0').click();
  await page.locator('#troAddress0').fill('Kalyan');
  await page.locator('#troMobileno0').click();
  await page.locator('#troMobileno0').fill('9157285139');
  await page.locator('#troEmailid0').click();
  await page.locator('#troEmailid0').fill('shivamkoshti1@gmail.com');
  await page.locator('#troAdhno0').click();
  await page.locator('#troAdhno0').fill('979812345678');
  // await page.locator('span').filter({ hasText: 'Upload' }).nth(1).click();
  // await page.getByRole('button', { name: 'upload button' }).setInputFiles('download.png');
  await page.locator('#trdLictype').selectOption('502');
  await page.getByRole('textbox', { name: 'Enter Property No' }).click();
  await page.getByRole('textbox', { name: 'Enter Property No' }).fill('A01004918000');
  await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
  await page.locator('a').filter({ hasText: 'Select' }).click();
  await page.locator('#flatNo_chosen').getByText('1').click();
  await page.getByRole('radio', { name: 'No' }).check();
  await page.getByLabel('DIvision').selectOption('184');
  await page.getByLabel('Ward').selectOption('228');
  await page.getByRole('textbox', { name: ': Business Name *' }).click();
  await page.getByRole('textbox', { name: ': Business Name *' }).fill('AB Enterprises');
  await page.getByRole('textbox', { name: 'DD/MM/YYYY' }).click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.locator('#trdBusadd').click();
  await page.locator('#trdBusadd').fill('Kalyan');
  await page.locator('select[name="tradeMasterDetailDTO.tradeLicenseItemDetailDTO[0].triCod1"]').selectOption('243');
  await page.locator('select[name="tradeMasterDetailDTO.tradeLicenseItemDetailDTO[0].triCod2"]').selectOption('253');
  await page.locator('select[name="tradeMasterDetailDTO.tradeLicenseItemDetailDTO[0].triCod3"]').selectOption('1223');
  await page.locator('select[name="tradeMasterDetailDTO.tradeLicenseItemDetailDTO[0].triCod4"]').selectOption('1235');
  await page.getByRole('textbox', { name: 'Enter Item Value' }).click();
  await page.getByRole('textbox', { name: 'Enter Item Value' }).fill('1000');
  await page.getByRole('checkbox', { name: 'I have read and I accept the' }).check();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#btnNo').click();



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

  await page.getByRole('button', { name: 'Confirm to Proceed' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Yes' }).click();
  const page1 = await page1Promise;

});