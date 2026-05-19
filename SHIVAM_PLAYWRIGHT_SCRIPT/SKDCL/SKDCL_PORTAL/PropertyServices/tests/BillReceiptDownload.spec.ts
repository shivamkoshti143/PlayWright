import { test, expect } from '@playwright/test';

test('BillReceiptDownload', async ({ page }) => {

  await page.goto('http://103.41.33.174:8069/CitizenHome.html');
  await page.getByRole('link', { name: 'English' }).click();
  await page.getByLabel('Receipt Type').selectOption('PropertyBillPayment.html');
  await page.getByRole('button', { name: 'Proceed' }).nth(1).click();
  await page.getByRole('textbox', { name: ': Property No.' }).click();
  await page.getByRole('textbox', { name: ': Property No.' }).fill('A01004918000');
  await page.getByRole('button', { name: ' Search' }).click();
await page.getByRole('button', { name: 'Proceed' }).click();
const page1Promise = page.waitForEvent('popup');
  await page.getByRole('row', { name: '1 4203 12/04/2026 Apr 2026-Mar 2027' }).getByRole('button').click();
  const page1 = await page1Promise;
const page2Promise = page.waitForEvent('popup');
  await page.getByRole('row', { name: '485214 19/05/2026 3.00' }).getByRole('button').click();
  const page2 = await page2Promise;
const page3Promise = page.waitForEvent('popup');
  await page.getByRole('row', { name: '485208 19/05/2026 6.00' }).getByRole('button').click();
  const page3 = await page3Promise;
});