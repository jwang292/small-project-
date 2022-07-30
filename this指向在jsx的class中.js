import App from './react-demo/src/App'

class Hello extends React.Component {
  state = {
    msg: 'hello react',
    count: 0,
  }
  clickFn = () => {
    this.setState({
      count: this.state.count + 1,
    }) // this.setState() 先改state, 再改UI
  }
  render() {
    return (
      <div>
        <h1>this is root</h1>
        <div>{this.state.count}</div>
        <button onClick={this.clickFn}>+1</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, doucument.getElementById('root'))
// 1.  onClick ={()=>this.clickFn()}   用箭头函数解决
//2.  onClick={this.clickFn.bind(this)}   用.bind解决
//3 . class 实例语法
