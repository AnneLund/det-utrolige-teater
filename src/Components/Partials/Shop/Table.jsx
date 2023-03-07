import React from "react";
import styled from "styled-components";

export const MyTable = styled.table`
  width: 100%;
  margin: 4em 0;
  th {
    text-transform: uppercase;
  }

  tbody {
    border-top: 1px solid #999999;
  }
`;

const Table = (props) => {
  return (
    <MyTable>
      <thead>
        <tr>
          <th>Sæde</th>
          <th>Række</th>
          <th>Pris</th>
        </tr>
      </thead>
      {/* <tbody>
        {props.data.map((row) => (
          <tr key={row.id}>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            <td>{row.column3}</td>
            <td>Pris i alt: {row.column3}</td>
          </tr>
        ))}
      </tbody> */}
    </MyTable>
  );
};

export default Table;
