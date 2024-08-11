const fs = require('fs');
const XLSX = require('xlsx');

// Read JSON file
const jsonData = fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(jsonData);

// Convert JSON to Excel sheet
const worksheet = XLSX.utils.json_to_sheet(data);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Save Excel file
const excelFilePath = 'output.xlsx';
XLSX.writeFile(workbook, excelFilePath);
console.log(`Data has been saved to ${excelFilePath}`);
