//adds 'table' class to all tables to apply bootstrap formatting
document.addEventListener("DOMContentLoaded", function(event) {
    var tables = document.querySelectorAll('table');
    for (var i = 0; i < tables.length; i++) {
        tables[i].className = "table";
    }
});