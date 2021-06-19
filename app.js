// preprocessing csv data
function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr[headers[j]] = data[j];
            }
            lines.push(tarr);
        }
    }

    fillTable(lines);
}

// add a row to the table
function addRow(rowData) {
    var table = document.getElementById("talkDataTable");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= rowData['date'];
    row.insertCell(1).innerHTML= rowData['time'];
    row.insertCell(2).innerHTML= rowData['title'];
    row.insertCell(3).innerHTML= rowData['speaker'];
    row.insertCell(4).innerHTML= rowData['link']; 
}

// loop and add all the data
function fillTable(tableData) {
    tableData.forEach((tableRow) => {
        addRow(tableRow);
    });
}

// loading the csv file
$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "data/data.csv",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});