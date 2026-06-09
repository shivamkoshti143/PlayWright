import { test, expect } from '@playwright/test';
import { doLogin, makePayment, selectFile } from './Login.spec';

test('IssuanceOfDeathCertificate', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Birth and Death ' }).click();
  await page.getByRole('link', { name: 'Issuance Of Death Certificate' }).click();
  await page.getByRole('textbox', { name: ': Registration Year *' }).click();
  await page.getByRole('textbox', { name: ': Registration Year *' }).fill('2015');
  await page.getByRole('textbox', { name: ': Registration Number. *' }).click();
  await page.getByRole('textbox', { name: ': Registration Number. *' }).fill('321');

  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByTitle('Issue certificate').click();
  await page.getByRole('link', { name: 'Certificate Print Details +' }).click();
  await page.getByLabel('Division').selectOption('1346');
  await page.getByRole('radio', { name: 'Online' }).check();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Submit' }).click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Proceed' }).click();
  await makePayment(page);
});