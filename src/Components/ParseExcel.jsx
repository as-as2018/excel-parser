// ExcelParser.js
import * as XLSX from 'xlsx';

const ParseExcel = async (file) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            console.log('data', data);
            console.log('workbook', workbook);
            console.log('sheetName', sheetName);
            console.log('sheet', sheet);
            console.log('jsonData', jsonData);
            resolve(jsonData);
        };
        reader.readAsArrayBuffer(file);
    });
};

export default ParseExcel;
