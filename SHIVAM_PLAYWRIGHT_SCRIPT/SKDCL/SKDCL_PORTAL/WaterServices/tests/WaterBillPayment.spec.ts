import { test, expect } from '@playwright/test';
import { doLogin } from './Login.spec';

test('WaterBillPayment', async ({ page }) => {
  test.setTimeout(0);

  await doLogin(page);
  await page.getByRole('link', { name: ' Citizen Services' }).click();
  await page.getByRole('link', { name: 'Water Supply ' }).click();
  await page.getByRole('link', { name: 'Water Bill Payment' }).click();
  await page.locator('#connum').click();
  await page.locator('#connum').fill('A037161944');
  await page.getByRole('button', { name: ' Search' }).click();
  // await page.waitForTimeout(2000);
  await page.locator('#totalPayable').click();
  await page.locator('#totalPayable').dblclick();
  await page.locator('#totalPayable').press('ControlOrMeta+c');
  await page.locator('#payAmount').click();
  await page.locator('#payAmount').fill('35964');
  await page.getByText('Online', { exact: true }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.locator('#payeemail2').click();
  await page.locator('#payeemail2').fill('sample@gmail.com');
  await page.locator('#cbBankid').selectOption('2');
  await page.getByRole('button', { name: 'Pay' }).click();
  await page.locator('#tab-4').check();
  await page.locator('#citrusAvailableOptions').selectOption('2001:000000');

  const [paymentPage] = await Promise.all([
    // page.context().waitForEvent('page'),
    await page.getByRole('button', { name: 'Make Payment' }).click(),

    await page.getByRole('textbox', { name: 'Email Id' }).click(),
    await page.getByRole('textbox', { name: 'Email Id' }).fill('sample@gmail.com'),
    await page.locator('#bankID').selectOption('2001'),
    await page.getByRole('button', { name: 'Pay Now' }).click(),
    await page.getByRole('button', { name: 'Click To Complete Transaction' }).click(),

  ]);
});