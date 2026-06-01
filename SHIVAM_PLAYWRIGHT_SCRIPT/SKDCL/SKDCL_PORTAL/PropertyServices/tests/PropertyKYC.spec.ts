import { test, expect } from '@playwright/test';
import { doLogin, selectFile } from './Login.spec';

test('PropertyKYC', async ({ page }) => {
  test.setTimeout(0);
  // Read Excel

  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Property Tax ' }).click();
  await page.getByRole('link', { name: 'Property KYC' }).click();
  await page.getByRole('textbox', { name: ': Property No.' }).click();
  await page.getByRole('textbox', { name: ': Property No.' }).fill('A01004918000');
  await page.getByRole('button', { name: ' Search' }).click();
  await page.locator('input[name="mobileNo"]').click();
  await page.locator('input[name="mobileNo"]').fill('9157285139');
  await page.getByRole('button', { name: 'Get Otp' }).click();
  await page.locator('input[name="userOtp"]').click();

  await page.waitForFunction(() => {
    const inputs = document.querySelectorAll('input');
    for (const input of inputs) {
      if (input.value && input.value.trim().length === 6) {
        if (
          input.getAttribute('name')?.includes('userOtp')
        ) {
          return true;
        }
      }
    }
    return false;
  }, { timeout: 0 });

  await page.locator('#isUnderGroundDrainConAvail_chosen a').filter({ hasText: 'select' }).click();
  await page.locator('#isUnderGroundDrainConAvail_chosen').getByText('Yes').click();

  await page.locator('#connectionDate').click();
  await page.getByRole('link', { name: '1', exact: true }).click();
  const uploadContainer = page.locator('#file_list_0');
  await page.locator('#checkList0').setInputFiles(selectFile('sample file.pdf'));
  await expect(uploadContainer.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer.getByText('sample file.pdf')).toBeVisible();

  const uploadContainer1 = page.locator('#file_list_1');
  await page.locator('#checkList1').setInputFiles(selectFile('sample file 1.pdf'));
  await expect(uploadContainer1.getByText('File uploaded successfully')).toBeVisible();
  await expect(uploadContainer1.getByText('sample file 1.pdf')).toBeVisible();

  await page.locator('#displayCaptcha').dblclick();
  await page.locator('#displayCaptcha').press('ControlOrMeta+c');
  await page.locator('#userCaptcha').click();
  await page.locator('#userCaptcha').press('ControlOrMeta+v');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'proceed' }).click();
});