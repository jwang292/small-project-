import React, { Component } from 'react'
export default class TodoHeader extends Component {
  state = {
    name: '',
  }
  addTodo = (e) => {
    if (e.keyCode !== 13) return
    if (!this.state.name.trim()) return
    this.props.addTodoById(this.state.name)
    this.setState({ name: '' })
  }
  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          onKeyUp={this.addTodo}
        />
      </header>
    )
  }
}
