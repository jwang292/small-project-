import { Component } from 'react'
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
        {this.state.x},{this.state.y}
      </div>
    )
  }
}
