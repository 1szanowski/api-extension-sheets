function loadData() {
    // Replace SPREADSHEET_ID with the ID of your Google Sheet
    var spreadsheetID = "1DQSPR9NjNEhUcDdc3drvYOQWpy7BnZn7JfEZuZ1R8rI";

    // Replace API_KEY with your Google API key
    var apiKey = "";

    // Build the API request URL
    var url =
        "https://sheets.googleapis.com/v4/spreadsheets/" +
        spreadsheetID +
        "/values/A1:Z1000?key=" +
        apiKey;

    // Make the API request
    $.getJSON(url, function(data) {
        var values = data.values;
        var html = "<table>";

        // Create the table headers
        html += "<tr>";
        for (var i = 0; i < values[0].length; i++) {
            html += "<th>" + values[0][i] + "</th>";
        }
        html += "</tr>";

        // Create the table rows
        for (var i = 1; i < values.length; i++) {
            html += "<tr>";
            for (var j = 0; j < values[i].length; j++) {
                html += "<td>" + values[i][j] + "</td>";
            }
            html += "</tr>";
        }

        html += "</table>";
        $("#sheetData").html(html);
    });
}

$(document).ready(function() {
    loadData();
});
