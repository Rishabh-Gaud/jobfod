import React from 'react';

const SpreadsheetPage = ({ rowData }) => {
  return (
    <div>
      <h1>5th Row Data from Excel Spreadsheet</h1>
      {rowData && (
        <ul>
          {rowData.map((cell, index) => (
            <li key={index}>{cell}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

getServerSideProps()

export default SpreadsheetPage;