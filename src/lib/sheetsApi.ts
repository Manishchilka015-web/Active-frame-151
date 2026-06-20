export async function createSpreadsheet(accessToken: string, title: string): Promise<string> {
  const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: { title },
      sheets: [
        {
          properties: { title: 'Submissions' },
        },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Sheets API Error:', errorText);
    throw new Error('Failed to create spreadsheet: ' + errorText);
  }

  const data = await response.json();
  const spreadsheetId = data.spreadsheetId;

  // Add header row
  await appendRow(accessToken, spreadsheetId, [
    'Date', 'Name', 'Brand Name', 'Contact No', 'Email', 'Website', 'Campaign Details'
  ]);

  return spreadsheetId;
}

export async function appendRow(accessToken: string, spreadsheetId: string, values: string[]) {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Submissions!A1:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [values],
      }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error('Sheets API Append Error:', errorText);
    throw new Error('Failed to append row: ' + errorText);
  }
}
