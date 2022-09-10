import { useRef } from 'react'
const TodoAdd = ({ addTodo }) => {
  const inputRef = useRef(null)
  /*
  1. 使用useRef 能够创建一个ref对象，有current 属性{current:null}
  const xxRef=useRef(null)
  2.通过ref属性关联到某DOM对象上{current:DOM}
  <div ref={xxREF}></div>
  3.可以通过xxRef.current 访问对象DOM
  */
  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      addTodo(inputRef.current.value)
      console.log(inputRef.current.value)
      inputRef.current.value = ''
    }
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onKeyUp={onKeyUp}
        ref={inputRef}
      />
    </header>
  )
}

export default TodoAdd
