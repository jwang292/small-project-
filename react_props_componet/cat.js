import { Component } from 'react'
import img from './img/logo192.png'
export default class Cat extends Component {
  state = {
    x: 0,
    y: 0,
  }
  move = (e) => {
    this.setState({ x: e.pageX, y: e.pageY })
  }
  componentDidMount() {
    document.addEventListener('mousemove', this.move)
  }
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.move)
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
