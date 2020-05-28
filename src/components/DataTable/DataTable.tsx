import React from 'react'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@material-ui/core'

interface DataTableHeader {
    title: string;
    property: string;
}

interface DataTableRow {
    id: string|number;
    data: { [key: string]: any };
    actions?: { [key: string]: any };
}

interface DataTableProps {
    headers: DataTableHeader[];
    actions?: DataTableHeader[]; 
    rows: DataTableRow[];
}

export const DataTable = ({ headers, rows, actions }: DataTableProps) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {headers.map(header => <TableCell key={header.property}>{header.title}</TableCell>)}
                        {actions && actions.map(action=> <TableCell key={action.property}>{action.title}</TableCell> ) }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            {headers.map(header => <TableCell key={header.property}>{row.data[header.property]}</TableCell>)}
                            {actions && actions.map(action=> row.actions && <TableCell key={action.property}>{row.actions[action.property]}</TableCell> ) }
                        </TableRow>
                    ))}
                   
                </TableBody>
            </Table>
        </TableContainer>
    )
}


interface Book{
    id: number;
    name: string;
    price: string;
}

export const DataTableExample = () => {

    const books: Book[] = [
        {
            id: 1,
            name: 'React',
            price: '15.00'
        },
        {
            id: 2,
            name: 'Redux',
            price: '12.50'
        }
    ]



    return (
        <DataTable
            headers={[
                { title: 'Book', property: 'name' },
                { title: 'Price', property: 'price' }
            ]}
            actions={[
                { title: 'Actions', property: 'delete' }
            ]}
            rows={books.map(book=>{
                const {id, ...data} = book;
                const actions = {
                    delete: <Button variant="outlined" onClick={()=>console.log(id)}>Log</Button>
                }
                return { id, data, actions}
            })}

        />
    )
}

