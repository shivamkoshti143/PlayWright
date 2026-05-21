import { test, expect } from '@playwright/test';
import { doLogin, selectFile } from './Login.spec';

test('AssessmentCertificate', async ({ page }) => {
  test.setTimeout(0);
  // Read Excel

  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Property Tax ' }).click();
  await page.getByRole('link', { name: 'Assessment Certificate' }).click();
  await page.getByRole('textbox', { name: ': First Name *' }).click();
  await page.getByRole('textbox', { name: ': First Name *' }).fill('Shivam');
  await page.getByRole('textbox', { name: ': Last Name *' }).click();
  await page.getByRole('textbox', { name: ': Last Name *' }).fill('Koshti');
  await page.getByLabel('DIvision').selectOption('768');
  await page.getByLabel('Ward').selectOption('770');
  await page.locator('input[name="noDuesCertificateDto.propertyDetails[0].propNo"]').click();
  await page.locator('input[name="noDuesCertificateDto.propertyDetails[0].propNo"]').fill('A01004918000');
  await page.locator('#ownerName0').click();
  await page.getByRole('button', { name: 'Proceed' }).click();

  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#checkList0').setInputFiles(selectFile('sample file.pdf'));
  await expect(uploadContainer.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.getByText('sample file.pdf')).toBeVisible();


  await page.getByRole('button', { name: 'Save Application' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();

  await page.locator('#paymobile2').click();
  await page.locator('#paymobile2').fill('9157285139');


  await page.locator('#payeemail2').click();
  await page.locator('#payeemail2').fill('sample@gmail.com');


  await page.locator('#cbBankid').selectOption('2');
  await page.getByRole('button', { name: 'Pay' }).click();
  await page.locator('#tab-4').check();
  await page.locator('#citrusAvailableOptions').selectOption('2001:000000');

  const [paymentPage] = await Promise.all([
    await page.getByRole('button', { name: 'Make Payment' }).click(),

    await page.getByRole('textbox', { name: 'Mobile Number' }).click(),
    await page.getByRole('textbox', { name: 'Mobile Number' }).fill('9157285139'),
    await page.getByRole('textbox', { name: 'Email Id' }).click(),
    await page.getByRole('textbox', { name: 'Email Id' }).fill('sample@gmail.com'),
    await page.locator('#bankID').selectOption('2001'),
    await page.getByRole('button', { name: 'Pay Now' }).click(),
    await page.getByRole('button', { name: 'Click To Complete Transaction' }).click(),

  ]);

});