import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React " },
    // { id: 2, name: "Watching Youtube" }
  ])
  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
        />
        :
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      }
    </div >
  )
}

export default App
