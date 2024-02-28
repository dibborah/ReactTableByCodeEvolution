import { useTable } from "react-table";
import { COLUMNS } from "./columns";
import MOCK_DATA from "./MOCK_DATA.json";
import { useMemo } from "react";
import "./table.css";

const BasicTable = () => {
  const columns = useMemo(() => COLUMNS, []); // Not memoizing column and data, react-table will think that it is receiving new data on every rednr so will recalculate a lot of logic and will re-render the data and column on every render decreasing performance since more time will be taken then
  const data = useMemo(() => MOCK_DATA, []); // useMemo ensures Data isn't recreated with every render

  // B/4 ES6
  //   useTable({
  //     columns: columns,
  //     data: data,
  //   });

  // Shorthand syntax by ES6. Object literal shorthand
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  //   tableInstance;

  // These are basically function and arrays that useTable hook has given us from react-table package to enable easy table creation
  //  getTableBodyProps , getTableBodyProps, prepareRow => These are functions
  //   headerGroups, prepareRow => These are Arrays

  // headerGroups => Array containing the column heading information which falls under the thead tag for the header section of the table
  // headerGroups is a ARRAY require us to use the map() method to render the jsx for each header group

  // <tr/> tag specifies a row
  //  In header the data is wrapped in the <th/> tag
  //   In body the body data is wrapped in the <td/> tag

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(
          (
            headerGroup // returning
          ) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(
                (
                  column // returning
                ) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                )
              )}
            </tr>
          )
        )}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {
                //This gives us access to the individual row cell
                row.cells.map((cell) => {
                  return <td {...cell.getCellProps}>{cell.render("Cell")}</td>;
                })
              }
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// # In the step 5 we will use the tableInstance with the JSX to render all the necessary UI

export default BasicTable;
