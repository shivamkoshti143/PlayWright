import { test, expect } from '@playwright/test';

test('QuickPayPropertyTax', async ({ page }) => {
    test.setTimeout(0);
  await page.goto('http://103.41.33.174:8069/CitizenHome.html');
  await page.getByRole('link', { name: 'English' }).click();
  await page.getByLabel('Bill Type').selectOption('PropertyBillPayment.html');
  await page.getByRole('button', { name: 'Proceed' }).first().click();
  console.log('Clicked on Proceed button');
  await page.getByRole('textbox', { name: ': Property No.' }).click();
  await page.getByRole('textbox', { name: ': Property No.' }).fill('A01004918000');
  await page.getByRole('button', { name: ' Search' }).click();
  await page.getByRole('radio', { name: 'Online' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();


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

    await page.getByRole('textbox', { name: 'Email Id' }).click(),
    await page.getByRole('textbox', { name: 'Email Id' }).fill('sample@gmail.com'),
    await page.locator('#bankID').selectOption('2001'),
    await page.getByRole('button', { name: 'Pay Now' }).click(),
    await page.getByRole('button', { name: 'Click To Complete Transaction' }).click(),

  ]);
});