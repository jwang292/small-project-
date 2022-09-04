import { Component } from 'react'
import img from './img/logo192.png'
export default class Cat extends Component {
  state = {
    x: 0,
    y: 0,
  }

  render() {
    return (
      <div>
        <img
          src={img}
          style={{
            left: this.props.x,
            top: this.props.y,
            position: 'absolute',
          }}
          alt=""
        />
      </div>
    )
  }
}
