import { test, expect } from '@playwright/test';
import { doLogin, selectFile } from './Login.spec';

test('NewSewerageDrainageConnection', async ({ page }) => {
  test.setTimeout(0);
    await doLogin(page);
  
    await page.getByRole('link', { name: 'Citizen Services' }).click();
    await page.getByRole('link', { name: 'Right to Service ' }).click();
    await page.getByRole('link', { name: 'New Sewerage / Drainage' }).click();
    await page.getByRole('textbox', { name: ': First Name *' }).click();
    await page.getByRole('textbox', { name: ': First Name *' }).fill('Shivam');
    await page.getByRole('textbox', { name: ': Last Name *' }).click();
    await page.getByRole('textbox', { name: ': Last Name *' }).fill('Koshti');
    await page.locator('a').filter({ hasText: 'Select' }).click();
    await page.locator('#gender_chosen').getByText('MALE', { exact: true }).click();
    await page.getByRole('textbox', { name: ': Building Name with Full' }).click();
    await page.getByRole('textbox', { name: ': Building Name with Full' }).fill('72/20 MHADA COLONY');
    await page.locator('a').filter({ hasText: 'प्रभागाचे नाव निवडा' }).click();
    await page.locator('#wardNo_chosen').getByText('Kalyan Division').click();
    await page.getByRole('textbox', { name: ': City *' }).click();
    await page.getByRole('textbox', { name: ': City *' }).fill('Mumbai');
    await page.getByRole('textbox', { name: ': Mobile No. *' }).click();
    await page.getByRole('textbox', { name: ': Mobile No. *' }).fill('9157285139');
    await page.getByRole('textbox', { name: ': Email ID : *' }).click();
    await page.getByRole('textbox', { name: ': Email ID : *' }).fill('shivamkoshti1@gmail.com');
    await page.getByRole('button', { name: 'पुढे जा' }).click();
    await page.locator('#rtiAddress').click();
    await page.locator('#rtiAddress').fill('72/20, MHAADA Colony');
    await page.locator('#applicantType_chosen a').filter({ hasText: 'Select' }).click();
    await page.locator('#applicantType_chosen').getByText('Individual').click();
    await page.locator('a').filter({ hasText: 'Select' }).click();
    await page.locator('#typeOfConnection_chosen').getByText('Regular Water Connection').click();
    await page.getByRole('textbox', { name: ': मालमत्ता क्रमांक. *' }).click();
    await page.getByRole('textbox', { name: ': मालमत्ता क्रमांक. *' }).fill('14302026');
    await page.getByRole('textbox', { name: ': फ्लॅट्स/युनिटची संख्या *' }).click();
    await page.getByRole('textbox', { name: ': फ्लॅट्स/युनिटची संख्या *' }).fill('1');
    await page.getByRole('button', { name: 'पुढे जा' }).click();
    
    // await page.getByRole('button', { name: 'Confirm to Proceed' }).click();
      const uploadContainer = page.locator('#file_list_0');
      await page.locator('#checkList0').setInputFiles(selectFile('sample file.pdf'));
      await expect(uploadContainer.getByText('File uploaded successfully')).toBeVisible();
      await expect(uploadContainer.getByText('sample file.pdf')).toBeVisible();
    
      const uploadContainer1 = page.locator('#file_list_1');
      await page.locator('#checkList1').setInputFiles(selectFile('sample file 1.pdf'));
      await expect(uploadContainer1.getByText('File uploaded successfully')).toBeVisible();
      await expect(uploadContainer1.getByText('sample file 1.pdf')).toBeVisible();

    await page.getByRole('button', { name: 'प्रस्तुत / सादर करा' }).click();
    await page.getByRole('button', { name: 'Proceed' }).click();
    await page.getByRole('cell', { name: 'Building Plan' }).click();
    // await page.getByRole('button', { name: 'प्रिंट' }).click();
});