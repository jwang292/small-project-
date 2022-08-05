import React, { Component } from 'react'
import classnames from 'classnames'
export default class TodoMain extends Component {
  state = { currentId: '', currentName: '' }
  delTodo = (id) => {
    this.props.delTodoById(id)
  }
  updateDone = (id) => {
    this.props.updateDoneById(id)
  }
  showEdit = (id, name) => {
    this.setState({
      currentId: id,
      currentName: name,
    })
  }
  keyUp = (e) => {
    if (e.keyCode === 13) {
      this.props.showEditById(this.state.currentId, this.state.currentName)
      this.setState({
        currentId: '',
        currentName: '',
      })
    }
    if (e.keyCode === 27) {
      this.setState({
        currentId: '',
        currentName: '',
      })
    }
  }

  render() {
    const { list } = this.props
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {/* <!-- These are here just to show the structure of the list items --> */}
          {/* <!-- List items should get the class `editing` when editing and `completed` when marked as completed --> */}
          {list.map((item) => (
            <li
              className={classnames({
                completed: item.done,
                editing: item.id === this.state.currentId,
              })}
              key={item.id}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={item.done}
                  onChange={() => this.updateDone(item.id)}
                />
                <label onDoubleClick={() => this.showEdit(item.id, item.name)}>
                  {item.name}
                </label>
                <button
                  className="destroy"
                  onClick={() => this.delTodo(item.id)}
                ></button>
              </div>
              <input
                className="edit"
                value={this.state.currentName}
                onChange={(e) => {
                  this.setState({ currentName: e.target.value })
                }}
                onKeyUp={this.keyUp}
              />
            </li>
          ))}
        </ul>
      </section>
    )
  }
}
