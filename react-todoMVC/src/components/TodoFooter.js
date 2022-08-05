import React, { Component } from 'react'
export default class TodoHeader extends Component {
  clearTodo = () => {
    this.props.clearTodo()
  }
  render() {
    const { list } = this.props
    if (list.length === 0) {
      return null
    }
    const number = list.filter((item) => !item.done).length
    const isShow = list.some((item) => item.done)
    return (
      <footer className="footer">
        {/* <!-- This should be `0 items left` by default --> */}
        <span className="todo-count">
          <strong>{number}</strong> item left
        </span>
        {/* <!-- Remove this if you don't implement routing --> */}
        <ul className="filters">
          <li>
            <a className="selected" href="#/">
              All
            </a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        {/* <!-- Hidden if no completed items are left ↓ --> */}
        {isShow && (
          <button className="clear-completed" onClick={this.clearTodo}>
            Clear completed
          </button>
        )}
      </footer>
    )
  }
}
