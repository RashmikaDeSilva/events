// convert data to object
function processData(data) {
    console.log(JSON.parse(data));
    fillTable(JSON.parse(data)['data']);
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
    // get the current date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;

    $.ajax({
        type: "GET",
        url: "https://drawing-room-disadv.000webhostapp.com/api/getData.php?date=" + today,
        dataType: "text",
        success: function(data) {processData(data);}
     });
});