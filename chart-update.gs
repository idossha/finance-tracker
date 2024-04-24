function updateChart() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getRange("A2:D" + sheet.getLastRow());
  
  // Remove previous charts to avoid duplicates
  var charts = sheet.getCharts();
  for (var i = 0; i < charts.length; i++) {
    sheet.removeChart(charts[i]);
  }
  
  // Create a new chart and set the desired options
  var chart = sheet.newChart()
     .setChartType(Charts.ChartType.LINE)
     .addRange(dataRange)
     .setPosition(5, 6, 0, 0) // Adjust position to where you want the chart
     .setOption('title', 'Daily Data Overview')
     .setOption('hAxis', {
       format: 'MM/dd/yyyy', // Explicitly formats the horizontal axis to show date only
       title: 'Date'
     })
     .setOption('vAxis', {
       title: 'Value'
     })
     // Add text to labels for each series
     .setOption('series', {
       0: {labelInLegend: 'Total Cost'},
       1: {labelInLegend: 'Total Value'},
       2: {labelInLegend: 'Total Change'}
     })
     .build();
  
  // Add the new chart to the sheet
  sheet.insertChart(chart);
}

function createDailyTrigger() {
  // Set the trigger to run the updateChart function every day
  ScriptApp.newTrigger('updateChart')
      .timeBased()
      .atHour(1) // Set the hour you prefer the update to occur
      .everyDays(1)
      .create();
}

