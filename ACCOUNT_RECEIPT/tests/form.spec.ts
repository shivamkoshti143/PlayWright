import { test } from '@playwright/test';
import * as XLSX from 'xlsx';
import { doLogin } from './uatLogin.spec';

test('Read Excel and Fill Account Receipt Form', async ({ page }) => {
  test.setTimeout(0);

  await doLogin(page);

  // Open page
  await page.getByRole('link', { name: 'Citizen Facilitation Centre' }).click();
  await page.getByRole('link', { name: 'Receipts Entry' }).click();

  // Read Excel file
  const workbook = XLSX.readFile('tests/DatasheetKDMC 12.xlsx');
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet);
  function formatDate(value: any): string {
    if (!value) return '';

    const str = String(value).trim();

    // Case 1: Already DDMMYYYY like 20022026
    if (/^\d{8}$/.test(str)) {
      const day = str.substring(0, 2);
      const month = str.substring(2, 4);
      const year = str.substring(4, 8);
      return `${day}/${month}/${year}`;
    }

    // Case 2: Excel serial date
    if (!isNaN(Number(value))) {
      const d = XLSX.SSF.parse_date_code(Number(value));

      if (d) {
        return `${String(d.d).padStart(2, '0')}/${String(d.m).padStart(2, '0')}/${d.y}`;
      }
    }
    // Case 3: Already text date
    return str;
  }
  console.log('Loop starting');
  for (const row of data) {
    console.log('Loop Started...');
    await page.getByRole('button', { name: ' Add' }).click();
    console.log('Processing row:', row);

    // Fill Receipt Date
    await page.locator('#transactionDateId').fill(
      formatDate(row['Receipt Date'])
    );
    await page.waitForTimeout(1000);
    await page.getByRole('heading', { name: 'Account Receipts' }).click();


    // Receipt Category Dropdown
    const category = String(row['Receipt Category']).trim();

    await page.locator('#receiptCategoryId').selectOption({
      label: category
    });


    // Received From
    // await page.locator('a').filter({ hasText: 'Select Vendor' }).click();
    // await page.locator('#vm_VendorId_chosen').getByRole('textbox').click();
    if (category != 'Miscellaneous Receipt') {
      await page.$eval('#vm_VendorId', (el: any) => { el.style.display = 'block'; });
      await page.locator('#vm_VendorId').selectOption({ label: String(row['Received From']) });
    }
    // await page.getByRole('emphasis').click();

    // await page.locator('#vm_VendorId').selectOption({
    //   label: String(row['Received From'])
    // });

    // Payer Name
    await page.locator('#rm_Receivedfrom').fill(String(row['Payer Name']));

    // Mobile No
    await page.getByRole('textbox', { name: ': Mobile No.' }).click();
    await page.getByRole('textbox', { name: ': Mobile No.' }).fill(String(row['Mobile No.'] || ''));
    // await page.locator('#mobile_Number').fill(String(row['Mobile No.'] || ''));
    row['Mobile No.'] = row['Mobile No.'];

    // Email
    await page.locator('#email_Id').fill(String(row['Email Id'] || ''));
    row['Email Id'] = row['Email Id'];

    // Narration
    await page.locator('#rmNarration').fill(String(row['Narration']));

    // RECEIPTNO
    await page.locator('#manual_ReceiptNo').fill(String(row['RECEIPTNO']));


    // Receipt Head
    await page.$eval('#budgetCode0', (el: any) => { el.style.display = 'block'; });
    await page.locator('#budgetCode0').selectOption({ label: String(row['Receipt Head']) });

    // Amount

    await page.locator('#rfFeeamount0').fill(String(row['Receipt Amount']));
    await page.locator('#rfFeeamount0').dispatchEvent('keyup');
    await page.locator('#rfFeeamount0').dispatchEvent('change');

    const mode = String(row['Mode']).trim();

    // Select Mode
    await page.locator('#cpdFeemode').selectOption({ label: mode });

    // Wait UI update
    // await page.waitForTimeout(1000);

    // =============================
    // CASH
    // =============================
    if (mode === 'Cash') {
      console.log('Cash selected');

      // Only mode needed
    }

    // =============================
    // DEMAND DRAFT / CHEQUE / PAY ORDER
    // =============================
    else if (
      mode === 'Demand Draft' ||
      mode === 'Cheque' ||
      mode === 'Pay Order'
    ) {
      // Bank Name
      await page.locator('#bankId').evaluate((el: any) => {
        el.style.display = 'block';
      });
      await page.locator('#bankId').selectOption({
        label: String(row['Bank Name *'])
      });


      // Account Number (if field exists)
      // await page.locator('#accountNumber').fill(
      //   String(row['Account Number'] || '')
      // );

      // Order/Cheque/DD No
      await page.locator('#rdchequeddno').fill(
        String(row['OrderChequeDDNoUTINo'])
      );

      // Date
      await page.locator('#rdchequedddatetemp').fill(
        formatDate(row['OrderChequeDDDate'])
      );
      await page.getByRole('heading', { name: 'Account Receipts' }).click();

    }

    // =============================
    // BANK
    // =============================
    else if (mode === 'Bank') {
      await page.locator('#baAccountId').evaluate((el: any) => {
        el.style.display = 'block';
      });

      // Bank Name
      await page.locator('#baAccountId').selectOption({
        label: String(row['Bank Name *'])
      });

      // Ref No
      await page.locator('#tranRefNumber1').fill(
        String(row['OrderChequeDDNoUTINo'])
      );

      // Date
      await page.locator('#tranRefDate1').fill(
        formatDate(row['OrderChequeDDDate'])
      );
      await page.getByRole('heading', { name: 'Account Receipts' }).click();

    }

    await page.getByRole('button', { name: 'Save' }).click();

    await page.waitForSelector('input[value="Yes"]');
    await page.locator('input[value="Yes"]').click();

    // Success popup text
    await page.waitForSelector('.msg-dialog-box h5');

    const message = await page.locator('.msg-dialog-box h5').innerText();

    const match = message.match(/Receipt no:\s*(\S+)/i);
    const receiptNo = match ? match[1] : '';

    row['Receipt No'] = receiptNo;

    await page.waitForSelector('input[value="Proceed"]');
    await page.locator('input[value="Proceed"]').click();

    await page.locator('input[value="Back"]').click();
  }
  const headers = [
    'Receipt Date',
    'Receipt Category',
    'Received From',
    'Payer Name',
    'Mobile No.',
    'Email Id',
    'RECEIPTNO',
    'Narration',
    'Receipt Head',
    'Receipt Amount',
    'Mode',
    'Bank Name *',
    'OrderChequeDDNoUTINo',
    'OrderChequeDDDate',
    'Total Amount ',
    'Receipt No'
  ];
  const updatedSheet = XLSX.utils.json_to_sheet(data, {
    header: headers
  }); workbook.Sheets[workbook.SheetNames[0]] = updatedSheet;

  XLSX.writeFile(workbook, 'tests/DatasheetKDMC Updated.xlsx');
});