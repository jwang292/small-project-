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
    msg: 'hi',
    msg1: '',
    check: false,
  }
  handleChange = (e) => {
    const { name, type } = e.target
    this.setState({
      [name]: type === 'checkbox' ? e.target.checked : e.target.value,
    })
    // this.setState({
    //   msg: e.target.value,
  }
  // handleArea = (e) => {
  //   this.setState({
  //     msg1: e.target.value,
  //   })
  // }
  // handleClick = (e) => {
  //   this.setState({
  //     check: e.target.checked,
  //   })
  // }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.msg}
            onChange={this.handleChange}
            name="msg"
          />
        </div>
        <div>
          <textarea
            value={this.state.msg1}
            onChange={this.handleChange}
            name="msg1"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <input
            type="checkbox"
            checked={this.state.check}
            onChange={this.handleChange}
            name="check"
            id=""
          />
          male
        </div>
      </div>
    )
  }
}
ReactDOM.render(<Test />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
