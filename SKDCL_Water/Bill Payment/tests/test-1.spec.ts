import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://103.41.33.174/Skdcl/MainetService/Home.html');
  await page.getByTitle('English ').click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Mba@1234');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'Citizen Facilitation Centre' }).click();
  await page.getByRole('link', { name: 'Water Bill Payment' }).click();
  await page.getByRole('textbox', { name: ': Connection Number *' }).click();
  await page.getByRole('textbox', { name: ': Connection Number *' }).fill('A010013096');
  await page.getByRole('button', { name: ' Search' }).click();
  await page.goto('http://103.41.33.174/Skdcl/MainetService/WaterBillPayment.html?serachWaterBillPayment');
  await page.locator('div').filter({ hasText: 'Kalyan Dombivli Municipal' }).nth(4).click();
  await page.getByText('Collection Type* Pay @ Counter Challan Mode PAY BY CHALLAN@BANK PAY BY CHALLAN@').click();
  await page.locator('#payAmount').click();
  await page.locator('#payAmount').fill('5066');
  await page.getByLabel('Collection Mode').selectOption('119');
  await page.getByRole('button', { name: 'Submit' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Proceed' }).click();
  const page1 = await page1Promise;
});