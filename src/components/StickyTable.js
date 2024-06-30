import React, { useMemo } from 'react'
import { useTable, useBlockLayout } from 'react-table'
import { useSticky } from 'react-table-sticky'
import MOCK_DATA from "./MOCK_DATA.json"
import { COLUMNS, GROUPED_COLUMNS } from './columns'
import { Styles } from "./TableStyles"
import "./table.css"


function StickyTable() {

    const columns = useMemo(() => GROUPED_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    }, useBlockLayout, useSticky)

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, footerGroups } = tableInstance

    const firstPageRows = rows.slice(0, 20)
  return (
    <Styles {...getTableProps()}>
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
                firstPageRows.map(row => {
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
        
    </Styles>
  )
}

export default StickyTable