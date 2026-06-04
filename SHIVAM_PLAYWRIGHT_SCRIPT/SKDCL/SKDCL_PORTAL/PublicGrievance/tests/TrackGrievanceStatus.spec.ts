import { test, expect } from '@playwright/test';
import { doLogin, selectFile } from './Login.spec';

test('TrackGrievanceStatus', async ({ page }) => {
  test.setTimeout(0);
  await doLogin(page);
  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Public Grievances ' }).click();
  await page.getByRole('link', { name: 'Track Grievance Status' }).click();
  await page.locator('#tokenNumber').click();
  await page.locator('#tokenNumber').fill('CN2026002798');
  await page.getByRole('button', { name: 'Submit' }).click();
});