import { test, expect, Page } from '@playwright/test';

export async function doProdLogin(page: Page) {
  test.setTimeout(0);
  await page.goto('https://kdmc.gov.in/MainetService/Home.html');
  await page.getByTitle('English ').click();
  await page.getByRole('textbox', { name: 'User ID' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).fill('cocfc110');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Pass@123');
  await page.getByRole('button', { name: 'Submit' }).click();
  
  await page.getByRole('textbox', { name: 'OTP' }).click();
  
  const otpBox = page.getByRole('textbox', {
    name: 'OTP'
  });

  await otpBox.click();

  await page.waitForFunction(() => {
  const otpInput = document.querySelector('#adminEmployee\\.mobNoOtp');

  if (otpInput) {
    const value = otpInput.value.trim();

    // Wait until exactly 6 digits are entered
    if (/^\d{6}$/.test(value)) {
      return true;
    }
  }

  return false;
}, { timeout: 0 });


  await page.locator('#submitOTP').click();
}