# Betting Tracker Application

This application helps you track your betting transactions and visualize your performance over time.

## CSV Data Format

The application expects a CSV file with the following columns:

- `Time`: Date and time of the transaction (e.g., "2023-05-01 14:30:00")
- `Type`: Transaction type - must be one of: "Bet", "Win", or "Loss"
- `Summary`: Description of the event (e.g., "Manchester United vs Liverpool")
- `Transaction Id`: Unique identifier for the transaction
- `Bet Id`: Identifier to group related transactions (optional)
- `Amount`: Transaction amount (negative for bets, positive for wins, 0 for losses)
- `Balance`: Account balance after the transaction

## Using the PowerShell Script

A PowerShell script is included to help you easily add transactions to your CSV file.

### Adding a Bet Transaction

```powershell
.\create_transaction.ps1 -Type Bet -Summary "Manchester United vs Liverpool" -BetId "BET001" -Amount 50 -Balance 950
```

### Adding a Win Transaction

```powershell
.\create_transaction.ps1 -Type Win -Summary "Manchester United vs Liverpool" -BetId "BET001" -Amount 100 -Balance 1050
```

### Adding a Loss Transaction

```powershell
.\create_transaction.ps1 -Type Loss -Summary "Arsenal vs Chelsea" -BetId "BET002" -Amount 0 -Balance 1020
```

### Specifying a Different CSV File

By default, the script uses "transactions.csv" in the current directory. You can specify a different file:

```powershell
.\create_transaction.ps1 -Type Bet -Summary "PSG vs Lyon" -BetId "BET005" -Amount 25 -Balance 975 -CsvPath "my_transactions.csv"
```

## Sample Data

A sample CSV file (`sample_transactions.csv`) is included to demonstrate the expected format. You can use this as a reference or to test the application.

## Uploading Data to the Application

1. Open the application in your web browser
2. Click on the "Upload CSV" button
3. Drag and drop your CSV file or click to select it
4. Review the preview to ensure your data is correctly formatted
5. Click "Upload" to process the data
6. Use the dashboard to analyze your betting performance

## Dashboard Features

- Filter transactions by type and date range
- View key metrics like total profit, win/loss ratio, and average bet size
- Analyze performance by event
- Visualize profit trends over time

## Troubleshooting

If your data isn't displaying correctly:

1. Check the browser console for error messages
2. Ensure your CSV file has all the required columns
3. Verify that date formats are consistent (YYYY-MM-DD HH:MM:SS is recommended)
4. Make sure amount values are numeric (can include currency symbols)
5. Confirm that transaction types are exactly "Bet", "Win", or "Loss" 