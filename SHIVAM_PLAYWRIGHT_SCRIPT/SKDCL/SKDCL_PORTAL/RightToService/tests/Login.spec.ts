import { test, expect } from '@playwright/test';
import { Page } from '@playwright/test';
import path from 'path';

export async function doLogin(page: Page) {
  test.setTimeout(0);

  await page.goto('http://uat-mainet.kdmc.gov.in/CitizenHome.html');

  await page.getByRole('link', { name: 'लॉगिन' }).click();
  await page.getByRole('link', { name: 'नागरिक लॉगइन' }).click();
  await page.getByRole('textbox', { name: 'Login id' }).click();
  await page.getByRole('textbox', { name: 'Login id' }).fill('9762977870');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Pass@123');

  console.log('Please enter captcha manually...');

  const captchaBox = page.getByRole('textbox', {
    name: 'Enter Captcha Value'
  });

  await captchaBox.click();

  // Wait until user types captcha
  await page.waitForFunction(() => {
    const inputs = document.querySelectorAll('input');
    for (const input of inputs) {
      if (input.value && input.value.trim().length === 4) {
        if (
          input.getAttribute('aria-label')?.includes('Captcha') ||
          input.placeholder?.includes('Captcha')
        ) {
          return true;
        }
      }
    }
    return false;
  }, { timeout: 0 });
  await page.getByRole('button', { name: 'प्रस्तुत करा' }).click();

  // Wait for next page
  await page.waitForLoadState('networkidle');
  console.log('Login clicked successfully');
  await page.getByRole('link', { name: 'English' }).click();
  console.log('Language changed to English Successfully');
  await page.waitForTimeout(2000);
  // Continue your next steps here
}
export function selectFile(fileName: string): string {
    return path.join(__dirname, 'assets', fileName);
}