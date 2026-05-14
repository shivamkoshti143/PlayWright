import { test, expect } from '@playwright/test';
import { doLogin } from './Login.spec';

test('NewPlumberLicence', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);
  await page.getByRole('link', { name: ' Citizen Services' }).click();
  await page.getByRole('link', { name: 'Water Supply ' }).click();
  await page.getByRole('link', { name: 'Plumber License', exact: true }).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('textbox', { name: ': First Name *' }).click();
  await page.getByRole('textbox', { name: ': First Name *' }).fill('Shivam');
  await page.getByRole('textbox', { name: ': Last Name *' }).click();
  await page.getByRole('textbox', { name: ': Last Name *' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: ': Last Name *' }).fill('Koshti');
  await page.getByRole('textbox', { name: ': Mobile Number *' }).click();
  await page.getByRole('textbox', { name: ': Mobile Number *' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: ': Mobile Number *' }).fill('9157285139');
  await page.getByRole('textbox', { name: ': Email ID' }).dblclick();
  await page.getByRole('textbox', { name: ': Email ID' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: ': Email ID' }).fill('shivamkoshti1@gmail.com');
  await page.getByRole('textbox', { name: ': Address Line1 *' }).click();
  await page.getByRole('textbox', { name: ': Address Line1 *' }).fill('MHADA');
  await page.getByRole('textbox', { name: ': Pin code *' }).click();
  await page.getByRole('textbox', { name: ': Pin code *' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: ': Pin code *' }).fill('410401');
  await page.getByLabel('Div').selectOption('300000001');
  await page.getByLabel('Ward').selectOption('500000003');
  await page.getByLabel('Zone').selectOption('600000003');

  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#plumberLicenseReqDTO\\.fileList0').setInputFiles('tests/assets/download.png');
  await expect(uploadContainer.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.locator('text=download.png')).toBeVisible();

  await page.getByRole('link', { name: 'Academic/Professional Details' }).click();
  await page.getByLabel('Qualification').selectOption('946');
  await page.getByRole('textbox', { name: 'Institute Name' }).click();
  await page.getByRole('textbox', { name: 'Institute Name' }).fill('KS SCHOOL');
  await page.getByRole('textbox', { name: 'Institute Address' }).click();
  await page.getByRole('textbox', { name: 'Institute Address' }).fill('AHMEDABAD');
  await page.getByRole('textbox', { name: 'Date of Passing' }).click();
  await page.getByRole('combobox').nth(2).selectOption('2017');
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.getByRole('textbox', { name: 'Percent/Grade' }).click();
  await page.getByRole('textbox', { name: 'Percent/Grade' }).fill('70');
  await page.locator('#academicAddButton0').click();
  await page.locator('#qualificationId1').selectOption('947');
  await page.getByRole('cell').filter({ hasText: /^$/ }).nth(4).click();
  await page.locator('#instituteNameId1').fill('KS SCHOOL');
  await page.locator('#instituteAddrsId1').click();
  await page.locator('#instituteAddrsId1').fill('AHMEDABAD');
  await page.getByRole('textbox', { name: 'MM' }).click();
  await page.getByRole('combobox').nth(3).selectOption('2019');
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.locator('#percentGradeId1').click();
  await page.locator('#percentGradeId1').fill('80');
  await page.getByRole('link', { name: 'Experience Details +' }).click();
  await page.getByRole('textbox', { name: 'CompanyName' }).click();
  await page.getByRole('textbox', { name: 'CompanyName' }).fill('WEBKNIGHT');
  await page.getByRole('textbox', { name: 'CompanyAddrs' }).click();
  await page.getByRole('textbox', { name: 'CompanyAddrs' }).fill('AHMEDABAD');

  await page.getByRole('textbox', { name: 'From Date' }).click();
  await page.getByRole('combobox').nth(4).selectOption('2019');
  await page.getByRole('link', { name: '2', exact: true }).click();

  await page.getByRole('textbox', { name: 'To date' }).click();
  await page.getByRole('combobox').nth(4).selectOption('2026');
  await page.getByRole('link', { name: '2', exact: true }).click();

  await page.getByLabel('Firm Type').selectOption('962');

  await page.locator('#confirmToProceedId').click();

  const uploadContainer2 = page.locator('#file_list_1');
  await page.locator('#plumberLicenseReqDTO\\.fileCheckList1').setInputFiles('tests/assets/sample file 1.pdf');
  await expect(uploadContainer2.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer2.locator('text=sample-file-1.pdf')).toBeVisible();

  const uploadContainer3 = page.locator('#file_list_2');
  await page.locator('#plumberLicenseReqDTO\\.fileCheckList2').setInputFiles('tests/assets/sample file 2.pdf');
  await expect(uploadContainer3.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer3.locator('text=sample-file-2.pdf')).toBeVisible();

  const uploadContainer4 = page.locator('#file_list_3');
  await page.locator('#plumberLicenseReqDTO\\.fileCheckList3').setInputFiles('tests/assets/sample file 3.pdf');
  await expect(uploadContainer4.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer4.locator('text=sample-file-3.pdf')).toBeVisible();

  const uploadContainer5 = page.locator('#file_list_4');
  await page.locator('#plumberLicenseReqDTO\\.fileCheckList4').setInputFiles('tests/assets/sample file 4.pdf');
  await expect(uploadContainer5.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer5.locator('text=sample-file-4.pdf')).toBeVisible();

  const uploadContainer6 = page.locator('#file_list_5');
  await page.locator('#plumberLicenseReqDTO\\.fileCheckList5').setInputFiles('tests/assets/sample file 5.pdf');
  await expect(uploadContainer6.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer6.locator('text=sample-file-5.pdf')).toBeVisible();

  const uploadContainer7 = page.locator('#file_list_6');
  await page.locator('#plumberLicenseReqDTO\\.fileCheckList6').setInputFiles('tests/assets/sample file 6.pdf');
  await expect(uploadContainer7.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer7.locator('text=sample-file-6.pdf')).toBeVisible();


  await page.getByRole('checkbox', { name: 'I will submit hardcopy of the' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
});