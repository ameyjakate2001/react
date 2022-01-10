import React from 'react'
import { Button } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Chip from '@mui/material/Chip'
import { delete_todo, status_Reverser, edited_todo } from '../redux/todoSlice'
import { useDispatch } from 'react-redux'

const Todo = ({ todo, index }) => {
  // console.log(todo)
  const dispatch = useDispatch()
  // const { edited, editedIndex } = useSelector((state) => state.todosReducer)

  const deleteHandler = (index) => {
    console.log(index)
    dispatch(delete_todo(index))
  }
  const editHandler = (index) => {
    console.log(index)
    dispatch(edited_todo(index))
  }
  const statusReverser = (index) => {
    dispatch(status_Reverser(index))
  }
  const pendingStatuStyle = {
    backgroundColor: 'red',
    color: 'white',
  }
  const completedStatuStyle = {
    backgroundColor: 'green',
    color: 'white',
  }

  return (
    <TableRow
      key={todo.date}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell
        component='th'
        scope='row'
        style={{ fontWeight: 'bold', color: 'brown' }}
      >
        {todo.title}
      </TableCell>
      <TableCell align='right'>{todo.date}</TableCell>
      <TableCell align='right'>
        <Chip
          label={todo.isCompleted}
          style={
            todo.isCompleted === 'pending'
              ? pendingStatuStyle
              : completedStatuStyle
          }
          onClick={() => statusReverser(index)}
        />
      </TableCell>
      <TableCell align='right'>
        <Button onClick={() => editHandler(index)}>Edit</Button>
      </TableCell>
      <TableCell align='right'>
        <Button onClick={() => deleteHandler(index)}>delete</Button>
      </TableCell>
    </TableRow>
  )
}

export default Todo
