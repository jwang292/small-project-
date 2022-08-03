import { Component } from 'react'
import { render } from 'react-dom'
export default class Child extends Component {
  state = { wname: '' }
  handelChange = (e) => {
    this.setState({
      wname: e.target.value,
    })
    this.props.changeName(e.target.value)
  }
  render() {
    return (
      <div>
        <h1>I am a child component</h1>
        <div>
          my wife is
          <input
            type="text"
            value={this.state.wname}
            onChange={this.handelChange}
          />
        </div>
        <div> my mother is {this.props.wife}</div>
      </div>
    )
  }
}
