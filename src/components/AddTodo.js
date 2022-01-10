import React, { useState, useEffect } from 'react'
import DateTimePicker from '@mui/lab/DateTimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { add_todo, update_todo, edited_todo } from '../redux/todoSlice'

const AddTodo = () => {
  const dispatch = useDispatch()
  const { todos, edited, editedIndex } = useSelector(
    (state) => state.todosReducer
  )
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(new Date())
  useEffect(() => {
    if (edited) setTitle(todos[editedIndex].title)
  }, [todos, edited, setTitle, editedIndex])

  const addTodoHandler = (e) => {
    e.preventDefault()
    const todo = {
      title,
      date: value.toString().split('G')[0],
      isCompleted: 'pending',
    }
    console.log(todo)
    dispatch(add_todo(todo))
    setTitle('')
  }
  const updateDoneHandler = () => {
    const todo = {
      title,
      date: value.toString().split('G')[0],
      isCompleted: 'pending',
    }
    console.log(todo)
    setTitle('')
    dispatch(update_todo({ index: editedIndex, todo }))
    dispatch(edited_todo())
  }

  return (
    <form onSubmit={addTodoHandler} style={{ padding: '20px 0' }}>
      <h3 style={{ textAlign: 'center', margin: '30px 0 30px 0' }}>Add Todo</h3>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <TextField
            id='outlined-basic'
            label='Add Todo'
            variant='outlined'
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Grid>
        <Grid item md={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(props) => <TextField {...props} />}
              label='Pick a date'
              value={value}
              onChange={(newValue) => {
                setValue(newValue)
              }}
              required
            />
          </LocalizationProvider>
        </Grid>
        <Grid
          item
          md={3}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {!edited ? (
            <Button
              className='add'
              type='submit'
              variant='contained'
              color='success'
              style={{ textAlign: 'center' }}
            >
              ADD
            </Button>
          ) : (
            <Button
              type='button'
              onClick={updateDoneHandler}
              variant='contained'
              color='success'
              style={{ textAlign: 'center' }}
            >
              Update
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  )
}

export default AddTodo
