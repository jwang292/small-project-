import { Component } from 'react'

export default class Scroll extends Component {
  state = {
    top: 0,
    left: 0,
  }

  scroll = () => {
    this.setState({
      top: window.pageXOffset,
      left: window.pageYOffset,
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll)
  }
  render() {
    return this.props.children(this.state)
  }
}
