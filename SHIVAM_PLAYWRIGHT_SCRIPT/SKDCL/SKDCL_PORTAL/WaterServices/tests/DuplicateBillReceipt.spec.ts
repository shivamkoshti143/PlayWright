import { test, expect } from '@playwright/test';
import { doLogin } from './Login.spec';

test('DuplicateBillReceipt', async ({ page }) => {
  test.setTimeout(0);

  await doLogin(page);
  await page.getByRole('link', { name: ' Citizen Services' }).click();
  await page.getByRole('link', { name: 'Water Supply ' }).click();
  await page.getByRole('link', { name: 'Water- Duplicate Bill' }).click();

  await page.getByRole('textbox', { name: ': Address Line1 *' }).click();
  await page.getByRole('textbox', { name: ': Address Line1 *' }).fill('Mhada');
  await page.getByLabel('Div').selectOption('300000001');
  await page.getByLabel('Ward').selectOption('500000003');
  await page.getByLabel('Zone').selectOption('600000003');
  await page.locator('#conNum').click();
  await page.locator('#conNum').fill('A037161944');
  await page.locator('#bill').click();
  // Wait for bill dropdown to be populated
  await page.waitForFunction(async () => {

    const select = document.querySelector('#bill') as HTMLSelectElement;
    return select && select.options.length > 1; // more than default option
  });
  await page.locator('#bill').selectOption('854908');
  await page.locator('#noOfCopies').click();
  await page.locator('#noOfCopies').fill('1');
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('radio', { name: 'Online' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();


  await page.getByRole('button', { name: 'Proceed' }).click();
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