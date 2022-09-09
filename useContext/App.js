// import TodoHeader from './components/TodoHeader'
// import TodoMain from './components/TodoMain'
// import TodoFooter from './components/TodoFooter'

import './styles/base.css'
import './styles/index.css'
import React, { useState, useContext } from 'react'

// const todos = [
//   { id: 1, name: 'hooks', done: false },
//   { id: 2, name: 'react', done: true },
// ]
const Context = React.createContext()
const App = () => {
  // const [list, setList] = useState(todos)

  // const addTodo = (name) => {
  //   setList([{ id: Date.now(), name, done: false }, ...list])
  // }
  // return (
  //   <section className="todoapp">
  //     <TodoHeader addTodo={addTodo} />
  //     <TodoMain list={list} />
  //     <TodoFooter />
  //   </section>
  // )

  const [color, setColor] = useState('red')
  return (
    <Context.Provider value={color}>
      <div>
        <div>root</div>
        <div>color:{color}</div>
        <button onClick={() => setColor('yellow')}>edit color</button>
        <Father></Father>
      </div>
    </Context.Provider>
  )
}
const Father = () => {
  return (
    <div>
      <div>father</div>

      <Son></Son>
    </div>
  )
}
const Son = () => {
  const color = useContext(Context)
  return (
    <div>
      <div>son</div>
      <div>color :{color}</div>
    </div>
  )
}
export default App
