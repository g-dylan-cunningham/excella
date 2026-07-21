# Deploying the contact-form Apps Script

The contact form sends these fields to the Apps Script web app, in this order:

1. `id`
2. `name`
3. `phone`
4. `email`
5. `message`
6. `received`

The Apps Script creates the `received` value when it writes the row. The timestamp sent by the website is not used by the script.

## 1. Prepare the Google Sheet

Open the spreadsheet that receives contact-form submissions. The first sheet/tab must use these columns:

| Column | Header |
| --- | --- |
| A | ID |
| B | Name |
| C | Phone |
| D | Email |
| E | Message |
| F | Received |

If the current sheet has `Email` in column C, insert a new column C and name it `Phone`. This preserves the existing Email, Message, and Received data by moving those columns to D, E, and F.

The script writes to the first tab in the spreadsheet. If submissions belong on another tab, move that tab into the first position before deploying.

## 2. Update the script

1. In the spreadsheet, select **Extensions → Apps Script**.
2. Open `Code.gs` in the Apps Script editor.
3. Replace its contents with the contents of this directory's `Code.gs` file.
4. Click **Save project** (the disk icon), or press `Command+S` on macOS / `Ctrl+S` on Windows.

## 3. Test access to the spreadsheet

1. In the function selector at the top of the Apps Script editor, choose `testAppendRow`.
2. Click **Run**.
3. The first run will request authorization. Choose the Google account that owns or can edit the sheet, review the permissions, and click **Allow**.
4. Return to the spreadsheet and confirm a test row was added with a phone number in column C.
5. Delete the test row after confirming it is correct.

If the test row goes to the wrong tab, make the intended destination tab the first tab and run the test again.

## 4. Deploy the updated web app

Updating the editor is not enough; Apps Script web apps continue running the previously deployed version until a new version is deployed.

1. In the Apps Script editor, click **Deploy → Manage deployments**.
2. Find the existing **Web app** deployment used by the website.
3. Click its **Edit** pencil icon.
4. In the **Version** menu, choose **New version**.
5. Optionally enter a description such as `Add phone number to contact submissions`.
6. Confirm **Execute as** is set to **Me**.
7. Confirm **Who has access** is set to the same public access option used by the current deployment (normally **Anyone** for a public contact form).
8. Click **Deploy**.
9. Copy the displayed **Web app URL** and keep it for verification.

Editing the existing deployment normally keeps the same web app URL. If Google gives the deployment a different URL, update the website's `GAS_API_URL` environment variable to that new URL and redeploy the website.

Use the deployed URL ending in `/exec`, not the development URL ending in `/dev`.

## 5. Verify the complete form flow

1. Open the deployed website's contact page.
2. Submit a clearly identifiable test, including a phone number.
3. Open the Google Sheet and confirm the new row contains:
   - the generated ID in column A;
   - the submitted name in column B;
   - the submitted phone number in column C;
   - the submitted email in column D;
   - the message in column E; and
   - the received timestamp in column F.
4. Delete the test row when finished.

## Troubleshooting

- **The phone cell is blank:** Confirm the website containing the updated contact page and API route has also been deployed, then submit a new test. Older submissions cannot be backfilled automatically.
- **Rows have shifted values:** Recheck the sheet column order. It must be ID, Name, Phone, Email, Message, Received.
- **No row appears:** Open **Executions** in the Apps Script sidebar and inspect the latest `doPost` execution. Also confirm the site's `GAS_API_URL` is the deployed `/exec` URL.
- **The old behavior remains:** Return to **Deploy → Manage deployments** and verify that the web app deployment uses the newest version, rather than only saving the editor changes.
