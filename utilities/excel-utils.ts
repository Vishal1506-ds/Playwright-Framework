import fs from 'fs';
import xlsx from 'xlsx';
// npx tsx .\utilities\excel-utils.ts
export class ExcelUtils {

    static async readExcelDataJson(filePath: string, sheetName: string) {

        // verify if the file exists
        if(!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        // read workbook from the excel file
        const workbook = xlsx.readFile(filePath);

        // get the specifc sheet from the workbook
        const sheet = workbook.Sheets[sheetName];

        // verify if the sheet exists
        if(!sheet) {
            throw new Error(`Sheet not found: ${sheetName}`);
        };

        return xlsx.utils.sheet_to_json(sheet);
       
    }

    static async readSpecificCellExcelData(filePath: string, sheetName: string,cellAddress: string) {

        // verify if the file exists
        if(!fs.existsSync(filePath)) {
            throw new Error(`File not found: ${filePath}`);
        }

        // read workbook from the excel file
        const workbook = xlsx.readFile(filePath);

        // get the specifc sheet from the workbook
        const sheet = workbook.Sheets[sheetName];

        // verify if the sheet exists
        if(!sheet) {
            throw new Error(`Sheet not found: ${sheetName}`);
        };

       
        // Read cell 
        return  sheet[cellAddress].v;
       
    }

    
}

async function main() {
const excelData =  ExcelUtils.readExcelDataJson('./files/flatFile.xlsx', 'student');

console.log(excelData);

const specificCellData =  await ExcelUtils.readSpecificCellExcelData('./files/flatFile.xlsx', 'Emp','E6');

console.log(specificCellData);

}
main();

