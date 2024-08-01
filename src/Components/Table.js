import React from "react";
import Data from "./dummyData.json";

function Table() {
  return (
    <div>
      {/* Table Heading */}
      <h1 className="heading">Table</h1>
      <div>
        {/* Table Start */}
        <table className="table_align">
          {/* Table Header */}
          <thead>
            <tr>
              <th>id</th>
              <th>Year</th>
              <th>Medals</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {Data.map((dummyData) => {
              console.log(dummyData);
              return (
                <tr key={dummyData.Id}>
                  <td>{dummyData.Id}</td>
                  <td>{dummyData.Year}</td>
                  <td>{dummyData.Medals}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
