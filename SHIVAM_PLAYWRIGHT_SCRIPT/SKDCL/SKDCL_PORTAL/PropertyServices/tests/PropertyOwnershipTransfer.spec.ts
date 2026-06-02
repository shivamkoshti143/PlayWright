import { test, expect } from '@playwright/test';
import { doLogin, selectFile } from './Login.spec';

test('PropertyOwnershipTransfer', async ({ page }) => {
  test.setTimeout(0);
  // Read Excel

  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Property Tax ' }).click();
  await page.getByRole('link', { name: 'Property Ownership Transfer' }).click();

  await page.locator('#assNo').click();
  await page.locator('#assNo').fill('A01005045400');
  await page.getByRole('button', { name: ' Search' }).click();

  await page.locator('[id="propTransferDto.transferType"]').selectOption('1049');
  await page.getByRole('textbox', { name: 'DD/MM/YYYY' }).click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  await page.locator('#ownerInfo').selectOption('949');
  await page.locator('#assoOwnerName').click();
  await page.locator('#assoOwnerName').fill('Shivam Koshti');
  await page.locator('input[name="propTransferDto.propTransferOwnerList[0].assoOwnerNameReg"]').click();
  await page.locator('input[name="propTransferDto.propTransferOwnerList[0].assoOwnerNameReg"]').fill('Shivam');
  await page.locator('input[name="propTransferDto.propTransferOwnerList[0].mobileno"]').click();
  await page.locator('input[name="propTransferDto.propTransferOwnerList[0].mobileno"]').fill('9157285139');
  await page.locator('input[name="propTransferDto.propTransferOwnerList[0].eMail"]').click();
  await page.locator('input[name="propTransferDto.propTransferOwnerList[0].eMail"]').fill('shivamkoshti1@gmail.com');
  await page.locator('input[name="propTransferDto.propTransferOwnerList[0].addharno"]').click();
  await page.locator('input[name="propTransferDto.propTransferOwnerList[0].addharno"]').fill('979812345678');
  await page.locator('#pannumber').click();
  await page.locator('#pannumber').fill('FHCPK0167G');
  await page.getByRole('button', { name: 'Proceed' }).click();
  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#checkList0').setInputFiles(selectFile('sample file.pdf'));
  await expect(uploadContainer.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.getByText('sample file.pdf')).toBeVisible();

  await page.getByRole('button', { name: 'save Mutation' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();
});