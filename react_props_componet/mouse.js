//定义复用
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
    return this.props.render(this.state)
  }
}
