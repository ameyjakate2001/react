import { createSlice } from '@reduxjs/toolkit'
let myTodos = []
if (localStorage.getItem('todos')) {
  myTodos = JSON.parse(localStorage.getItem('todos'))
}
const initialState = {
  todos: myTodos,
  edited: false,
  editedIndex: null,
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    //ADD TODO ACTIONS
    add_todo: (state, action) => {
      if (localStorage.getItem('todos')) {
        let existingTodos = JSON.parse(localStorage.getItem('todos'))
        existingTodos.push(action.payload)
        localStorage.setItem('todos', JSON.stringify(existingTodos))
      } else {
        localStorage.setItem('todos', JSON.stringify([action.payload]))
      }
      state.todos.push(action.payload)
    },

    //DELETE TODO ACTIONS
    delete_todo: (state, action) => {
      let existing = JSON.parse(localStorage.getItem('todos'))
      existing = existing.filter((todo, index) => {
        return index !== action.payload
      })
      localStorage.setItem('todos', JSON.stringify(existing))
      state.todos = state.todos.filter((todo, index) => {
        return index !== action.payload
      })
    },

    //UPDATE TODO ACTIONS
    update_todo: (state, action) => {
      state.todos[action.payload.index] = action.payload.todo
      let existing = JSON.parse(localStorage.getItem('todos'))
      existing[action.payload.index] = action.payload.todo
      localStorage.setItem('todos', JSON.stringify(existing))
    },

    //STATUS REVERSER TODO ACTIONS
    status_Reverser: (state, action) => {
      const existing = JSON.parse(localStorage.getItem('todos'))
      existing[action.payload].isCompleted =
        existing[action.payload].isCompleted === 'pending'
          ? 'completed'
          : 'pending'
      localStorage.setItem('todos', JSON.stringify(existing))
      state.todos = [...existing]
      myTodos = [...existing]
    },

    //FITERED TODOS ACTIONS
    filtered_todos: (state, action) => {
      if (action.payload === 'date') {
        state.todos = [...myTodos].sort((a, b) => {
          console.log(a, b)
          var dateA = new Date(a.date_prop).getTime()
          var dateB = new Date(b.date_prop).getTime()
          return dateA < dateB ? 1 : -1
        })
      } else if (action.payload === 'all') {
        state.todos = JSON.parse(localStorage.getItem('todos'))
      } else {
        console.log(action.payload)
        state.todos = myTodos.filter((todo) => {
          return todo.isCompleted === action.payload
        })
      }
    },

    //EDITED STATE MUTATE
    edited_todo: (state, action) => {
      state.edited = !state.edited
      state.editedIndex = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  add_todo,
  delete_todo,
  update_todo,
  status_Reverser,
  filtered_todos,
  edited_todo,
} = todoSlice.actions

export default todoSlice.reducer
