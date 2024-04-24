function recordPortfolioValue() {
  // Access the active Google Spreadsheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet(); // Access active spreadsheet
  
  // Retrieve specific sheets by name
  var portfolioSheet = sheet.getSheetByName("Portfolio"); // Access 'Portfolio' sheet
  var historySheet = sheet.getSheetByName("Portfolio History"); // Access 'Portfolio History' sheet

  // Get values from specific cells in the 'Portfolio' sheet
  var totalValue = portfolioSheet.getRange("F9").getValue(); // Get total portfolio value
  var totalCost = portfolioSheet.getRange("G9").getValue(); // Get total cost of portfolio
  var totalChange = portfolioSheet.getRange("H9").getValue(); // Get total change in portfolio value
  
  // Get the current date and time
  var today = new Date();

  // Append new data to the 'Portfolio History' sheet
  historySheet.appendRow([today, totalCost, totalValue, totalChange]); // Add new row with date, cost, value, change

}D
