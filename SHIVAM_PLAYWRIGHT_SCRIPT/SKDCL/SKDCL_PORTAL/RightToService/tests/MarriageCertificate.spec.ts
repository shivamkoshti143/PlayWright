import { test, expect } from '@playwright/test';
import { doLogin, selectFile } from './Login.spec';

test('MarriageCertificate', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Right to Service ' }).click();
  await page.getByRole('link', { name: 'Marriage Certificate' }).click();

  await page.getByRole('textbox', { name: ': First Name *' }).click();
  await page.getByRole('textbox', { name: ': First Name *' }).fill('Prakash');
  await page.getByRole('textbox', { name: ': Middle Name' }).click();
  await page.getByRole('textbox', { name: ': Middle Name' }).fill('Rajesh');
  await page.getByRole('textbox', { name: ': Last Name *' }).click();
  await page.getByRole('textbox', { name: ': Last Name *' }).fill('Koshti');
  await page.locator('#mobileNo').click();
  await page.locator('#mobileNo').fill('8208487562');
  await page.locator('#emailId').click();
  await page.locator('#emailId').fill('shivamkoshti1@gmail.com');
  await page.locator('#areaName').click();
  await page.locator('#areaName').fill('Andheri');
  await page.locator('#pinCode').click();
  await page.locator('#pinCode').fill('400392');
  await page.getByLabel('WARD').selectOption('806');
  await page.getByRole('textbox', { name: 'DD/MM/YYYY' }).click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.getByRole('textbox', { name: ': Place of Marriage (with full particulars) *' }).click();
  await page.getByRole('textbox', { name: ': Place of Marriage (with full particulars) *' }).fill('Andheri');
  await page.getByRole('textbox', { name: ': Place of Marriage (with full particulars) *' }).click();
  await page.getByRole('textbox', { name: ': Place of Marriage (with full particulars) *' }).press('ArrowLeft');

  await page.locator('#personalLaw_chosen a').filter({ hasText: 'Select' }).click();
  await page.locator('#personalLaw_chosen').getByText('Hindu').click();
  await page.getByRole('textbox', { name: ': Priest Name ( in English ) *' }).click();
  await page.getByRole('textbox', { name: ': Priest Name ( in English ) *' }).fill('Bhagavat Pandit');
  await page.getByRole('textbox', { name: ': Priest Name ( in English ) *' }).click();
  await page.getByRole('textbox', { name: ': Priest Name ( in English ) *' }).press('ArrowLeft');

  await page.getByRole('textbox', { name: ': Full Address *' }).click();
  await page.getByRole('textbox', { name: ': Full Address *' }).fill('Bandra');
  await page.getByRole('textbox', { name: ': Full Address *' }).click();
  await page.getByRole('textbox', { name: ': Full Address *' }).press('ArrowLeft');

  await page.locator('a').filter({ hasText: 'Select' }).click();
  await page.locator('#priestReligion_chosen').getByText('Hindu').click();
  await page.getByRole('textbox', { name: ': Age *' }).click();
  await page.getByRole('textbox', { name: ': Age *' }).fill('35');
  await page.getByRole('button', { name: 'Save & Next' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('textbox', { name: ': First Name (in English ) *' }).click();
  await page.getByRole('textbox', { name: ': First Name (in English ) *' }).fill('Prakash');
  await page.getByRole('textbox', { name: ': First Name (in English ) *' }).click();
  await page.getByRole('textbox', { name: ': First Name (in English ) *' }).press('ArrowLeft');

  await page.getByRole('textbox', { name: ': Middle Name ( in English )' }).click();
  await page.getByRole('textbox', { name: ': Middle Name ( in English )' }).fill('Rajesh');
  await page.getByRole('textbox', { name: ': Middle Name ( in English )' }).click();
  await page.getByRole('textbox', { name: ': Middle Name ( in English )' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: ': Middle Name ( in English )' }).click();

  await page.getByRole('textbox', { name: ': Last Name ( in English) *' }).click();
  await page.getByRole('textbox', { name: ': Last Name ( in English) *' }).fill('Koshti');
  await page.getByRole('textbox', { name: ': Last Name ( in English) *' }).click();
  await page.getByRole('textbox', { name: ': Last Name ( in English) *' }).press('ArrowLeft');
  await page.locator('#uidNo').click();
  await page.locator('#uidNo').fill('979894059164');

  await page.getByRole('textbox', { name: ': Date Of Birth *' }).click();
  await page.getByRole('combobox').nth(3).selectOption('1994');
  await page.getByRole('combobox').nth(2).selectOption('6');
  await page.getByRole('link', { name: '16' }).click();
  await page.locator('#religionBirth_chosen a').filter({ hasText: 'Select' }).click();
  await page.locator('#religionBirth_chosen').getByText('Hindu').click();
  await page.locator('#occupation_chosen a').filter({ hasText: 'Select' }).click();
  await page.locator('#occupation_chosen').getByRole('listitem').filter({ hasText: 'Not Stated' }).click();
  await page.locator('#statusMarTime_chosen a').filter({ hasText: 'Select' }).click();
  await page.locator('#statusMarTime_chosen').getByText('Unmarried').click();
  await page.getByRole('textbox', { name: ': Husband Full Address *' }).click();
  await page.getByRole('textbox', { name: ': Husband Full Address *' }).fill('Andheri');
  await page.getByRole('textbox', { name: ': Husband Full Address *' }).click();
  await page.getByRole('textbox', { name: ': Husband Full Address *' }).press('ArrowLeft');
  await page.getByRole('button', { name: 'Save & Next' }).click();


  await page.locator('input[name="marriageDTO.wifeDTO.firstNameEng"]').click();
  await page.locator('input[name="marriageDTO.wifeDTO.firstNameEng"]').fill('Jaya');
  await page.locator('input[name="marriageDTO.wifeDTO.firstNameEng"]').click();
  await page.locator('input[name="marriageDTO.wifeDTO.firstNameEng"]').press('ArrowLeft');

  await page.locator('input[name="marriageDTO.wifeDTO.middleNameEng"]').click();
  await page.locator('input[name="marriageDTO.wifeDTO.middleNameEng"]').fill('Arvind');
  await page.locator('input[name="marriageDTO.wifeDTO.middleNameEng"]').click();
  await page.locator('input[name="marriageDTO.wifeDTO.middleNameEng"]').press('ArrowLeft');

  await page.locator('input[name="marriageDTO.wifeDTO.lastNameEng"]').click();
  await page.locator('input[name="marriageDTO.wifeDTO.lastNameEng"]').fill('Koshti');
  await page.locator('input[name="marriageDTO.wifeDTO.lastNameEng"]').click();
  await page.locator('input[name="marriageDTO.wifeDTO.lastNameEng"]').press('ArrowLeft');

  await page.locator('input[name="marriageDTO.wifeDTO.uidNo"]').click();
  await page.locator('input[name="marriageDTO.wifeDTO.uidNo"]').fill('659089803220');
  await page.locator('#wdob').click();
  await page.getByRole('combobox').nth(3).selectOption('1989');
  await page.locator('#wdob').click();
  await page.getByRole('combobox').nth(3).selectOption('1997');
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.locator('a').filter({ hasText: 'Select' }).nth(1).click();
  await page.getByRole('listitem').filter({ hasText: 'Hindu' }).click();
  await page.locator('a').filter({ hasText: 'Select' }).nth(2).click();
  await page.getByRole('listitem').filter({ hasText: 'Not Stated' }).nth(1).click();
  await page.locator('a').filter({ hasText: 'Select' }).nth(2).click();
  await page.getByRole('listitem').filter({ hasText: 'Unmarried' }).click();
  await page.locator('textarea[name="marriageDTO.wifeDTO.fullAddrEng"]').click();
  await page.locator('textarea[name="marriageDTO.wifeDTO.fullAddrEng"]').fill('Andheri');
  await page.locator('textarea[name="marriageDTO.wifeDTO.fullAddrEng"]').click();
  await page.locator('textarea[name="marriageDTO.wifeDTO.fullAddrEng"]').press('ArrowLeft');
  await page.getByRole('button', { name: 'Save & Next' }).click();


  await page.locator('input[name="witnessDTO.firstNameEng"]').click();
  await page.locator('input[name="witnessDTO.firstNameEng"]').fill('Shivam');
  await page.locator('input[name="witnessDTO.firstNameEng"]').click();
  await page.locator('input[name="witnessDTO.firstNameEng"]').press('ArrowLeft');
  await page.locator('input[name="witnessDTO.middleNameEng"]').click();
  await page.locator('input[name="witnessDTO.middleNameEng"]').fill('Rajesh');
  await page.locator('input[name="witnessDTO.middleNameEng"]').click();
  await page.locator('input[name="witnessDTO.middleNameEng"]').press('ArrowLeft');
  await page.locator('input[name="witnessDTO.lastNameEng"]').click();
  await page.locator('input[name="witnessDTO.lastNameEng"]').fill('Koshti');
  await page.locator('input[name="witnessDTO.lastNameEng"]').click();
  await page.locator('input[name="witnessDTO.lastNameEng"]').press('ArrowLeft');
  await page.locator('textarea[name="witnessDTO.fullAddrEng"]').click();
  await page.locator('textarea[name="witnessDTO.fullAddrEng"]').fill('Andheri');
  await page.locator('textarea[name="witnessDTO.fullAddrEng"]').click();
  await page.locator('textarea[name="witnessDTO.fullAddrEng"]').press('ArrowLeft');
  await page.locator('a').filter({ hasText: 'Select' }).nth(2).click();
  await page.getByRole('listitem').filter({ hasText: 'Professional, Technical And' }).click();
  await page.locator('#relation_chosen a').filter({ hasText: 'Select' }).click();
  await page.locator('#relation_chosen').getByText('Friend').click();
  await page.locator('input[name="witnessDTO.uidNo"]').click();
  await page.locator('input[name="witnessDTO.uidNo"]').fill('272674504381');
  await page.getByRole('button', { name: 'Add Witness' }).click();


  await page.locator('input[name="witnessDTO.firstNameEng"]').click();
  await page.locator('input[name="witnessDTO.firstNameEng"]').fill('Arpit');
  await page.locator('input[name="witnessDTO.firstNameEng"]').click();
  await page.locator('input[name="witnessDTO.firstNameEng"]').press('ArrowLeft');
  await page.locator('input[name="witnessDTO.middleNameEng"]').click();
  await page.locator('input[name="witnessDTO.middleNameEng"]').fill('Michael');
  await page.locator('input[name="witnessDTO.middleNameEng"]').click();
  await page.locator('input[name="witnessDTO.middleNameEng"]').press('ArrowLeft');
  await page.locator('input[name="witnessDTO.lastNameEng"]').click();
  await page.locator('input[name="witnessDTO.lastNameEng"]').fill('Jhon');
  await page.locator('input[name="witnessDTO.lastNameEng"]').click();
  await page.locator('input[name="witnessDTO.lastNameEng"]').press('ArrowLeft');
  await page.locator('textarea[name="witnessDTO.fullAddrEng"]').click();
  await page.locator('textarea[name="witnessDTO.fullAddrEng"]').fill('Andheri');
  await page.locator('textarea[name="witnessDTO.fullAddrEng"]').click();
  await page.locator('textarea[name="witnessDTO.fullAddrEng"]').press('ArrowLeft');
  await page.locator('a').filter({ hasText: 'Select' }).nth(2).click();
  await page.getByRole('listitem').filter({ hasText: 'Not Stated' }).click();
  await page.locator('#relation_chosen a').filter({ hasText: 'Select' }).click();
  await page.locator('#relation_chosen').getByText('Friend').click();
  await page.locator('input[name="witnessDTO.uidNo"]').click();
  await page.locator('input[name="witnessDTO.uidNo"]').fill('642273711014');
  await page.getByRole('button', { name: 'Add Witness' }).click();

  await page.locator('input[name="witnessDTO.firstNameEng"]').click();
  await page.locator('input[name="witnessDTO.firstNameEng"]').fill('Saroj');
  await page.locator('input[name="witnessDTO.firstNameEng"]').click();
  await page.locator('input[name="witnessDTO.firstNameEng"]').press('ArrowLeft');
  await page.locator('input[name="witnessDTO.lastNameEng"]').click();
  await page.locator('input[name="witnessDTO.lastNameEng"]').fill('Tambe');
  await page.locator('input[name="witnessDTO.lastNameEng"]').click();
  await page.locator('input[name="witnessDTO.lastNameEng"]').press('ArrowLeft');
  await page.locator('textarea[name="witnessDTO.fullAddrEng"]').click();
  await page.locator('textarea[name="witnessDTO.fullAddrEng"]').fill('Mahim');
  await page.locator('textarea[name="witnessDTO.fullAddrEng"]').click();
  await page.locator('textarea[name="witnessDTO.fullAddrEng"]').press('ArrowLeft');
  await page.locator('a').filter({ hasText: 'Select' }).nth(2).click();
  await page.getByRole('listitem').filter({ hasText: 'Professional, Technical And' }).click();
  await page.locator('#relation_chosen a').filter({ hasText: 'Select' }).click();
  await page.locator('#relation_chosen').getByText('Friend').click();
  await page.locator('input[name="witnessDTO.uidNo"]').click();
  await page.locator('input[name="witnessDTO.uidNo"]').fill('654216561137');
  await page.getByRole('button', { name: 'Add Witness' }).click();


  await page.getByRole('button', { name: 'Confirm to Proceed' }).click();
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


  await page.getByRole('button', { name: 'Proceed' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#Proceed').click();
  const page1 = await page1Promise;
});