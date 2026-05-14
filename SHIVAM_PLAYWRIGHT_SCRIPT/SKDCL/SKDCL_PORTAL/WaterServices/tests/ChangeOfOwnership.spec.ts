import { test, expect } from '@playwright/test';
import { doLogin } from './Login.spec';

test('ChangeOfOwnership', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);

  await page.getByRole('link', { name: ' Citizen Services' }).click();
  await page.getByRole('link', { name: 'Water Supply ' }).click();
  await page.getByRole('link', { name: 'Change of Ownership' }).click();
  await page.locator('#areaName').click();
  await page.locator('#areaName').fill('MHADA');
  await page.getByLabel('Is below poverty line').selectOption('N');
  await page.getByLabel('Div').selectOption('300000001');
  await page.getByLabel('Ward').selectOption('500000003');
  await page.getByLabel('Zone').selectOption('600000003');
  await page.getByRole('link', { name: 'Old Owner Details +' }).click();
  await page.locator('#conNum').click();
  await page.locator('#conNum').fill('A010013219');
  await page.getByRole('button', { name: ' Search' }).click();
  await page.getByRole('link', { name: 'New Owner Details +' }).click();
  await page.getByLabel('Transfer Mode').selectOption('144');
  await page.locator('#changeOwnerMaster\\.cooNoname').click();
  await page.locator('#changeOwnerMaster\\.cooNoname').fill('Shivam');
  await page.locator('#changeOwnerMaster\\.cooNolname').click();
  await page.locator('#changeOwnerMaster\\.cooNolname').fill('Koshti');
  await page.locator('#newGender').selectOption('80');
  await page.locator('#remark').click();
  await page.locator('#remark').fill('New Home Transfer');
  await page.getByRole('link', { name: 'Additional Owners +' }).click();
  await page.getByRole('row', { name: 'select select  ' }).getByLabel('Please select title').selectOption('1');
  await page.locator('#caoNewFName_0').click();
  await page.locator('#caoNewFName_0').fill('Shivam');
  await page.locator('#caoNewMName_0').click();
  await page.locator('#caoNewMName_0').fill('Rajesh');
  await page.locator('#caoNewLName_0').click();
  await page.locator('#caoNewLName_0').fill('Koshti');
  await page.getByRole('cell', { name: 'select' }).getByLabel('Gender').selectOption('80');
  await page.getByRole('button', { name: 'Confirm to Proceed' }).click();


  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#changeOwnerMaster\\.fileList0').setInputFiles('tests/assets/sample file 1.pdf');
  await expect(uploadContainer.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.locator('text=sample file 1.pdf')).toBeVisible();

  const uploadContainer2 = page.locator('#file_list_1');
  await page.locator('#changeOwnerMaster\\.fileList1').setInputFiles('tests/assets/sample file 2.pdf');
  await expect(uploadContainer2.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer2.locator('text=sample file 2.pdf')).toBeVisible();

  const uploadContainer3 = page.locator('#file_list_2');
  await page.locator('#changeOwnerMaster\\.fileList2').setInputFiles('tests/assets/sample file 3.pdf');
  await expect(uploadContainer3.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer3.locator('text=sample file 3.pdf')).toBeVisible();
  await expect(uploadContainer3.locator('text=sample file 3.pdf')).toBeVisible();

  const uploadContainer4 = page.locator('#file_list_3');
  await page.locator('#changeOwnerMaster\\.fileList3').setInputFiles('tests/assets/sample file 4.pdf');
  await expect(uploadContainer4.locator('text=File uploaded successfully')).toBeVisible();
  await expect(uploadContainer4.locator('text=sample file 4.pdf')).toBeVisible();

  await page.getByRole('checkbox', { name: 'I will submit hardcopy of the' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();

   await page.locator('#Proceed').click();
});