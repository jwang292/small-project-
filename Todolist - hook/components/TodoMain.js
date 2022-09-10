import TodoItem from './TodoItem'
const TodoList = ({ list }) => {
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {list.map((item) => (
          <TodoItem key={item.id} item={item}></TodoItem>
        ))}
        {/* <li className="completed">
          <div className="view">
            <input className="toggle" type="checkbox" />
            <label>吃饭</label>
            <button className="destroy" />
          </div>
          <input className="edit" defaultValue="Create a TodoMVC template" />
        </li> */}
      </ul>
    </section>
  )
}

export default TodoList
