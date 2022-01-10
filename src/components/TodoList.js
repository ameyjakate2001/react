import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Todo from './Todo'

export default function TodoList({ todos }) {
  return (
    <TableContainer
      component={Paper}
      style={{ marginTop: '20px', paddingTop: '20px' }}
    >
      <h2 style={{ textAlign: 'center' }}>Todo List</h2>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Todo</TableCell>
            <TableCell align='right'>Date</TableCell>
            <TableCell align='right'>Status</TableCell>
            <TableCell align='right'>Update</TableCell>
            <TableCell align='right'>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo, index) => (
            <Todo todo={todo} index={index} key={index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
