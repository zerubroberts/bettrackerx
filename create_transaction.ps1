param (
    [Parameter(Mandatory=$true)]
    [ValidateSet("Bet", "Win", "Loss")]
    [string]$Type,
    
    [Parameter(Mandatory=$true)]
    [string]$Summary,
    
    [Parameter(Mandatory=$true)]
    [string]$BetId,
    
    [Parameter(Mandatory=$true)]
    [decimal]$Amount,
    
    [Parameter(Mandatory=$true)]
    [decimal]$Balance,
    
    [Parameter(Mandatory=$false)]
    [string]$CsvPath = "transactions.csv"
)

# Format the current time
$Time = Get-Date -Format "yyyy-MM-dd HH:mm:ss"

# Generate a transaction ID
$TransactionId = "TX" + (Get-Random -Minimum 100000 -Maximum 999999)

# Format the amount based on transaction type
$FormattedAmount = $Amount
if ($Type -eq "Bet") {
    # Bets are negative amounts
    $FormattedAmount = -[Math]::Abs($Amount)
} elseif ($Type -eq "Loss") {
    # Losses are typically shown as 0.00
    $FormattedAmount = 0.00
}

# Create the new transaction row
$NewTransaction = [PSCustomObject]@{
    "Time" = $Time
    "Type" = $Type
    "Summary" = $Summary
    "Transaction Id" = $TransactionId
    "Bet Id" = $BetId
    "Amount" = $FormattedAmount
    "Balance" = $Balance
}

# Check if the CSV file exists
$FileExists = Test-Path $CsvPath
if (-not $FileExists) {
    # Create the file with headers
    $NewTransaction | Export-Csv -Path $CsvPath -NoTypeInformation
    Write-Host "Created new CSV file: $CsvPath with initial transaction"
} else {
    # Append to the existing file
    $NewTransaction | Export-Csv -Path "$($CsvPath).tmp" -NoTypeInformation -Append
    # Remove the header from the temporary file
    (Get-Content "$($CsvPath).tmp" | Select-Object -Skip 1) | Add-Content -Path $CsvPath
    Remove-Item "$($CsvPath).tmp"
    Write-Host "Added new transaction to: $CsvPath"
}

# Display the transaction that was added
Write-Host "`nTransaction added:"
Write-Host "Time: $Time"
Write-Host "Type: $Type"
Write-Host "Summary: $Summary"
Write-Host "Transaction Id: $TransactionId"
Write-Host "Bet Id: $BetId"
Write-Host "Amount: $FormattedAmount"
Write-Host "Balance: $Balance"

# Show a preview of the CSV file
Write-Host "`nCurrent transactions in $($CsvPath):"
if (Test-Path $CsvPath) {
    Import-Csv $CsvPath | Format-Table
} 