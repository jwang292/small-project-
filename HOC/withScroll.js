import { Component } from 'react'

export default function withScroll(Base) {
  class Scroll extends Component {
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
      return (
        <Base {...this.state} {...this.props}>
          {({ top, left }) => (
            <div style={{ position: 'fixed' }}>
              {top}-{left}
            </div>
          )}
        </Base>
      )
    }
  }
  return Scroll
}
