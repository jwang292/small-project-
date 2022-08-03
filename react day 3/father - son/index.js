import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Child from './child'

class Test extends React.Component {
  state = { name: '' }
  handleChange = (e) => {
    const { value } = e.target
    this.setState({
      name: value,
    })
  }
  render() {
    return (
      <div>
        <h1>I AM TEST CONPONENT</h1>
        <div>
          wife:
          <input
            type="text"
            placeholder="enter a name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <Child wife={this.state.name}></Child>
      </div>
    )
  }
}
ReactDOM.render(<Test />, document.getElementById('root'))

reportWebVitals()
