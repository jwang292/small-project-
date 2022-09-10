import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

import './styles/base.css'
import './styles/index.css'
import React, { useState, useContext, useEffect } from 'react'
export const Context = React.createContext()
const { Provider } = Context

// const todos = [
//   { id: 1, name: 'hooks', done: false },
//   { id: 2, name: 'react', done: true },
// ]
const todos = JSON.parse(localStorage.getItem('todos'))
const App = () => {
  const [list, setList] = useState(todos)
  //saving local store 属于副作用 用useEffect
  //第二个参数用于优化，如果发现不一样，则重新rend useEffect 否则跳过rend
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list))
  }, [list])
  //adding
  const addTodo = (name) => {
    setList([{ id: Date.now(), name, done: false }, ...list])
  }

  //delete
  const delTodo = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  //change done
  const changeDone = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          }
        } else {
          return item
        }
      })
    )
  }
  return (
    <Provider value={{ delTodo, changeDone }}>
      <section className="todoapp">
        <TodoHeader addTodo={addTodo} />
        <TodoMain list={list} />
        <TodoFooter />
      </section>
    </Provider>
  )
}

export default App
