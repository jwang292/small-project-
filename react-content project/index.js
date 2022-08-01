import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// const isLogin = true
// const test = () => {
//   return isLogin ? <div>welcome</div> : <div>fail login</div>
// }
class Test extends React.Component {
  state = {
    list: [
      { id: 1, name: 'wang', content: 'hello' },
      { id: 2, name: 'li', content: 'hello world' },
    ],
    user: '',
    content: '',
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  clearContent = () => {
    this.setState({
      list: [],
    })
  }
  del = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }
  add = () => {
    const { user, content, list } = this.state
    if (!user || !content) {
      return alert('need more information')
    }
    this.setState({
      list: [{ id: Date.now(), user, content }, ...list],
      user: '',
      content: '',
    })
  }
  renderList() {
    // return this.state.list.length === 0 ? (
    //   <div className="no-content">no content</div>
    // ) : (
    //   <ul>
    //     {this.state.list.map((item) => (
    //       <li key={item.id}>
    //         <h3>user : {item.name}</h3>
    //         <p>contents: {item.content}</p>
    //         <button>delete comment</button>
    //       </li>
    //     ))}
    //   </ul>
    // )
    if (this.state.list.length === 0)
      return <div className="no-content">no content</div>
    return (
      <ul>
        {this.state.list.map((item) => (
          <li key={item.id}>
            <h3>user : {item.name}</h3>
            <p>contents: {item.content}</p>
            <button onClick={() => this.del(item.id)}>delete comment</button>
            {/* <button onClick={() => this.del.bind(this,item.id)}>delete comment</button> */}
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="app">
        <h3>user name</h3>
        <input
          type="text"
          name="user"
          id="users"
          placeholder="enter user name"
          value={this.state.user}
          onChange={this.handleChange}
        />
        <h3>content</h3>
        <textarea
          name="content"
          id="content"
          cols="30"
          rows="10"
          placeholder="enter contents"
          value={this.state.content}
          onChange={this.handleChange}
        ></textarea>
        <button onClick={this.add}>submit comment</button>
        <button onClick={this.clearContent}>clear comment</button>
        {this.renderList()}
      </div>
    )
  }
}
ReactDOM.render(<Test />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
