import { test, expect } from '@playwright/test';
import { doLogin, selectFile } from './Login.spec';

test('NewPropertyRegistration', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Property Tax ' }).click();
  await page.getByRole('link', { name: 'New Property Registration (Self Assessment)' }).click();
  await page.getByLabel('Property Ward').selectOption('100000003');
  await page.getByLabel('Property Zone').selectOption('700000001');
  await page.locator('#propLvlRoadType').selectOption('100000460');
  await page.locator('#billMethod').selectOption('100000330');
  await page.locator('#proAssAcqDate').click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.locator('#lastAssessmentDate').click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.getByLabel('Property Type').selectOption('100000148');
  await page.locator('#ownerTypeId').selectOption('949');
  await page.getByRole('textbox', { name: 'Please Enter Owners Name' }).click();
  await page.getByRole('textbox', { name: 'Please Enter Owners Name' }).fill('Shovam Koshti');
  await page.getByRole('textbox', { name: 'Please enter Mobile Number' }).click();
  await page.getByRole('textbox', { name: 'Please enter Mobile Number' }).fill('9157285139');
  await page.locator('#emailId').click();
  await page.locator('#emailId').fill('shivamkoshti1@gmail.com');
  await page.locator('#assoAddharno').click();
  await page.locator('#assoAddharno').fill('979789781234');
  await page.locator('#pannumber').click();
  await page.locator('#pannumber').fill('FHCPK0167G');
  await page.getByRole('textbox', { name: ': Property Location Address *' }).click();
  await page.getByRole('textbox', { name: ': Property Location Address *' }).fill('Andheri');
  await page.getByRole('textbox', { name: ': Village *' }).click();
  await page.getByRole('textbox', { name: ': Village *' }).fill('Mumbai');
  await page.getByRole('textbox', { name: ': Survey No./ City Survey No' }).click();
  await page.getByRole('textbox', { name: ': Survey No./ City Survey No' }).fill('1234');
  await page.locator('input[name="provisionalAssesmentMstDto.provisionalAssesmentDetailDtoList[0].flatNo"]').click();
  await page.locator('input[name="provisionalAssesmentMstDto.provisionalAssesmentDetailDtoList[0].flatNo"]').fill('1');
  await page.locator('select[name="provisionalAssesmentMstDto.provisionalAssesmentDetailDtoList[0].assdFloorNo"]').selectOption('562');
  await page.locator('#assdOccupancyType0').selectOption('100000384');
  await page.locator('#occupierName0').click();
  await page.locator('#occupierName0').fill('Shivam');
  await page.locator('#legal0').selectOption('Legal');
  await page.locator('#assdConstruType0').selectOption('100000368');
  await page.locator('#assdUsagetype0').selectOption('100000362');
  await page.locator('#assdUsagetype1').selectOption('200000363');
  await page.getByRole('textbox', { name: 'Monthly Rent *12-10% of' }).click();
  await page.getByRole('textbox', { name: 'Monthly Rent *12-10% of' }).fill('10000');
  await page.getByRole('button', { name: 'Room' }).click();
  await page.locator('#roomType0').selectOption('100000156');
  await page.locator('#roomLength0').click();
  await page.locator('#roomLength0').fill('100');
  await page.locator('#roomWidth0').click();
  await page.locator('#roomWidth0').fill('150');
  await page.locator('#roomArea0').click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();


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


  await page.locator('#acceptToSubmit').check();
  await page.getByRole('button', { name: 'Submit assessment' }).click();

});