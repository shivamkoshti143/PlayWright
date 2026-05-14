import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';
import { doLogin } from './Login.spec';

test('NoDueCertificate - Loop from Excel', async ({ page }) => {
  test.setTimeout(0);
  // Read Excel
  const workbook = XLSX.readFile('tests/assets/SKDCL_Detail Defaulter Register.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data: any[] = XLSX.utils.sheet_to_json(sheet);

  await doLogin(page);

  await page.getByRole('link', { name: 'Citizen Services' }).click();
  await page.getByRole('link', { name: 'Water Supply' }).click();
  await page.getByRole('link', { name: 'Water-No Dues Certificate' }).click();
  await page.getByRole('textbox', { name: ': Address Line1 *' }).click();
  await page.getByRole('textbox', { name: ': Address Line1 *' }).fill('MHADA');
  await page.getByLabel('Div').selectOption('300000001');
  await page.getByLabel('Ward').selectOption('500000003');
  await page.getByLabel('Zone').selectOption('600000003');
  await page.getByRole('link', { name: 'No Dues Information +' }).click();
  // for (let i = 0; i < data.length; i++) {

  // const connectionNo = data[i]['Connection No.']; // match column name

  const connectionNo = 'A010013126' // match column name A010013126,A010013219
  console.log(`Trying: ${connectionNo}`);

  await page.locator('#consumerNo').fill(''); // clear first
  await page.locator('#consumerNo').fill(connectionNo);

  await page.getByRole('button', { name: 'View Dues' }).click();

  await page.locator('#noOfCopies').click();
  await page.locator('#noOfCopies').fill('1');
  await page.getByRole('button', { name: 'Submit' }).click();


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



  // Wait a bit for response
  // await page.waitForTimeout(2000);

  // Check error message
  // const errorLocator = page.locator('text=Due Exists against connection');

  // if (await errorLocator.isVisible()) {
  //   console.log(`❌ Skipping ${connectionNo}`);
  //   continue; // go next
  // }

  // If no error → success
  console.log(`✅ Success on ${connectionNo}`);

  // You can add next steps here (submit form etc.)
  // break;
  // }
});