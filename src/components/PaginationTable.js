import React, { useMemo } from 'react'
import { usePagination, useTable } from 'react-table'
import MOCK_DATA from "./MOCK_DATA.json"
import { COLUMNS, GROUPED_COLUMNS } from './columns'
import "./table.css"
function PaginationTable() {

    const columns = useMemo(() => GROUPED_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    }, usePagination)

    const { getTableProps, getTableBodyProps, headerGroups, page, nextPage, previousPage, canNextPage, canPreviousPage, gotoPage, pageCount, pageOptions, state, prepareRow, setPageSize } = tableInstance

    const { pageIndex, PageSize } = state


  return (
    <div>
        <table {...getTableProps()}>
        <thead>
            {
                headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))
                        }
                    </tr>
                ))
            }
            
        </thead>
        <tbody {...getTableBodyProps()}>
            {
                page.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                })
                            }
                        </tr>
                    )
                })
            }
            
        </tbody>
        
    </table>
    <div>
        <span>Page {" "}
            <strong>{pageIndex + 1} of {pageOptions.length}</strong>
        </span>
        <span>
            | Go to page {" "}
            <input type="number" name="" defaultValue={pageIndex + 1} onChange={e => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
            }}

            id="" />
        </span>
        <select onChange={e => setPageSize(Number(e.target.value))} name="" value={PageSize} id="">
            {
                [10, 25, 50].map(pageSize => (
                    <option value={pageSize} key={pageSize}>
                        Show {pageSize}
                    </option>
                ))
            }
        </select>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{"<<"}</button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{">>"}</button>
    </div>
    </div>
  )
}

export default PaginationTable