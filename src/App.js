// App.js
import React, { useState } from 'react';
import FileInput from './Components/FileInput';
import parseExcel from './Components/ParseExcel';
import ExcelGenerator from './Components/ExcelGenerator';
import NetworkStatus from './Components/NetworkStatus';


const App = () => {
  const [excelData, setExcelData] = useState(null);

  const handleFileSelect = async (file) => {
    const data = await parseExcel(file);
    console.log("data>>>", data);
    setExcelData(data);
  };

  return (
    <>
      <div>
        <h1>Excel Importer</h1>
        <FileInput onFileSelect={handleFileSelect} />
        {excelData && (
          <div>
            <h2>Excel Data</h2>
            <pre>{JSON.stringify(excelData, null, 2)}</pre>
          </div>
        )}
      </div>
      <div>
        <ExcelGenerator />
      </div>
      <div>
        <NetworkStatus />
      </div>
    </>
  );
};

export default App;
