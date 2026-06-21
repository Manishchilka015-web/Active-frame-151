# Google Sheets Integration Setup

Follow these steps to automatically save form submissions from your website directly into your Google Sheet without requiring your website visitors to log in.

### Step 1: Create the Google Sheet
1. Open [Google Sheets](https://docs.google.com/spreadsheets/u/0/) and create a new Blank spreadsheet.
2. Name your sheet **"Active Frame - Campaign Submissions"**.
3. In the first row, add the following exact column headers starting from column **A to G**:
   - A: `Timestamp`
   - B: `Name`
   - C: `Brand Name`
   - D: `Contact No`
   - E: `Email`
   - F: `Website`
   - G: `Details`

### Step 2: Add the Apps Script Code
1. In your Google Sheet, click on **Extensions** -> **Apps Script** in the top menu.
2. Delete any code in the editor and paste the following code exactly as it is:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    
    // Parse the JSON data received from the website
    const data = JSON.parse(e.postData.contents);
    
    // Create a new row with the data
    const row = [
      new Date().toLocaleString(), // Timestamp
      data.name || '',
      data.brandName || '',
      data.contactNo || '',
      data.email || '',
      data.website || '',
      data.details || ''
    ];
    
    // Append the row to the sheet
    sheet.appendRow(row);
    
    // Return a success JSON response
    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Needed to allow CORS preflight requests
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

### Step 3: Deploy as a Web App
1. Click the blue **Deploy** button at the top right of the Apps Script editor, and select **"New deployment"**.
2. Click the gear icon next to "Select type" and check **"Web app"**.
3. Use the following settings:
   - **Description**: Add form integration
   - **Execute as**: Me (Your Google Account)
   - **Who has access**: **Anyone** *(This is required so your public website can send data to it)*
4. Click **Deploy**.
5. Google will ask you to authorize access. Click **Authorize access**, select your Google account.
   *(You might see a warning saying "Google hasn't verified this app" — click "Advanced" and then "Go to... (unsafe)" to proceed and click Allow.)*

### Step 4: Link to Your App
1. After deployment, copy the **Web app URL** (it should start with `https://script.google.com/macros/s/...`).
2. Go back to your **AI Studio Settings**.
3. Open the **Environment Variables** menu.
4. Add a new variable:
   - Name: `VITE_GOOGLE_SHEETS_WEBHOOK_URL`
   - Value: *(Paste your Web app URL here)*
5. The form is now fully connected! Try submitting a test submission.
