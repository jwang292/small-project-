import { Component } from 'react'
export default class Position extends Component {
  state = {
    x: 0,
    y: 0,
  }

  render() {
    return (
      <div>
        {this.props.x},{this.props.y}
      </div>
    )
  }
}
