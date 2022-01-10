import AddTodo from './components/AddTodo'
import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header'
import Filter from './components/Filters'
import TodoList from './components/TodoList'
import { filtered_todos } from './redux/todoSlice'

function App() {
  const dispatch = useDispatch()
  let { todos } = useSelector((state) => state.todosReducer)
  const sort = (parameter) => {
    dispatch(filtered_todos(parameter))
  }

  return (
    <div className='App'>
      <Header />
      <div className='wrapper'>
        <Filter sort={sort} />
        <AddTodo />
        {todos && todos.length === 0 ? (
          <h4>No todos</h4>
        ) : (
          <TodoList todos={todos} />
        )}
      </div>
    </div>
  )
}

export default App
