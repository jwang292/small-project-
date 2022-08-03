import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Child from './child'

class Test extends React.Component {
  state = { name: '', sonwife: '' }
  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      name: value,
    })
  }
  changeName = (name) => {
    this.setState({
      sonwife: name,
    })
  }
  render() {
    return (
      <div>
        <h1>I AM TEST CONPONENT</h1>
        <div>son's wife {this.state.sonwife}</div>
        <div>
          wife:
          <input
            type="text"
            placeholder="enter a name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <Child wife={this.state.name} changeName={this.changeName}></Child>
      </div>
    )
  }
}
ReactDOM.render(<Test />, document.getElementById('root'))

reportWebVitals()
