import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import base from './styles/base.css'
import index from './styles/index.css'
import TodoHeader from './components/TodoHeader'
import TodoFooter from './components/TodoFooter'
import TodoMain from './components/TodooMain'
class App extends React.Component {
  state = {
    list: [
      { id: 1, name: 'HTML', done: false },
      { id: 2, name: 'CSS', done: false },
      { id: 3, name: 'JS', done: false },
      { id: 4, name: 'REACT', done: false },
    ],
  }
  delTodoById = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }
  updateDoneById = (id) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          }
        } else {
          return item
        }
      }),
    })
  }
  addTodoById = (name) => {
    this.setState({
      list: [{ id: Date.now(), name, done: false }, ...this.state.list],
    })
  }
  showEditById = (id, name) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return { ...item, name }
        } else {
          return item
        }
      }),
    })
  }
  clearTodo = () => {
    this.setState({
      list: this.state.list.filter((item) => !item.done),
    })
  }
  render() {
    const { list } = this.state
    return (
      <section className="todoapp">
        <TodoHeader addTodoById={this.addTodoById}></TodoHeader>
        <TodoMain
          list={list}
          delTodoById={this.delTodoById}
          updateDoneById={this.updateDoneById}
          showEditById={this.showEditById}
        ></TodoMain>
        <TodoFooter list={list} clearTodo={this.clearTodo}></TodoFooter>
      </section>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
