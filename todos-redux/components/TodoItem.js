import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { delTodo } from '../store/actions/todos'
import { changeDone } from '../store/actions/todos'
export default function TodoItem({ item }) {
  const dispatch = useDispatch()
  const [current, setCurrentId] = useState('')
  const inputRef = useRef(null)
  const del = (id) => {
    dispatch(delTodo(id))
  }
  const change = (id, done) => {
    dispatch(changeDone(id, done))
  }

  const showEdit = (id) => {
    setCurrentId(id)
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [current])

  return (
    <li
      className={[
        item.done ? 'completed' : '',
        item.id === current ? 'edit' : '',
      ].join(' ')}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={item.done}
          onChange={(e) => change(item.id, e.target.checked)}
        />
        <label onDoubleClick={() => showEdit(item.id)}>{item.name}</label>
        <button className="destroy" onClick={() => del(item.id)} />
      </div>
      <input
        className="edit"
        defaultValue={item.name}
        ref={inputRef}
        onBlur={() => setCurrentId('')}
      />
    </li>
  )
}
