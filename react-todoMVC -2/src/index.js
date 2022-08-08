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
    type: 'active',
  }

  delTodoById = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }
  upTodoByName = (names) => {
    const { list } = this.state
    const indexTarget = list.findIndex((item) => item.name === names)
    const indexBefore = indexTarget - 1

    // list.unshift(list.splice(indexTarget, 1)[0])
    if (indexTarget !== 0) {
      list[indexTarget] = list.splice(indexBefore, 1, list[indexTarget])[0]
    } else {
      list.push(list.shift())
    }

    this.setState({
      list,
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
  typeHandle = (type) => {
    this.setState({
      type,
    })
  }
  checkAll = (check) => {
    this.setState({
      list: this.state.list.map((item) => {
        return {
          ...item,
          done: check,
        }
      }),
    })
  }

  render() {
    const { list, type } = this.state
    return (
      <section className="todoapp">
        <TodoHeader addTodoById={this.addTodoById}></TodoHeader>
        <TodoMain
          list={list}
          delTodoById={this.delTodoById}
          updateDoneById={this.updateDoneById}
          showEditById={this.showEditById}
          type={type}
          checkAll={this.checkAll}
          upTodoByName={this.upTodoByName}
        ></TodoMain>
        <TodoFooter
          list={list}
          clearTodo={this.clearTodo}
          type={type}
          typeHandle={this.typeHandle}
        ></TodoFooter>
      </section>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
