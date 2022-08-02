import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

class Test extends React.Component {
  state = {
    list: [
      { id: 1, names: 'BMW', price: 350000, date: '2020 - 12 - 01' },
      { id: 2, names: 'BMW', price: 250000, date: '2020 - 12 - 02' },
      { id: 3, names: 'Bench', price: 320000, date: '2020 - 12 - 03' },
    ],
    names: '',
    price: '',
  }
  del(id) {
    this.setState({ list: this.state.list.filter((item) => item.id !== id) })
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  add = () => {
    const { names, price, list } = this.state
    if (!names || !price) {
      return alert('need more infor')
    }
    this.setState({
      list: [...list, { id: list.length + 1, names, price, date: Date.now() }],
      names: '',
      price: '',
    })
  }

  render() {
    return (
      <div>
        <header>add a car</header>
        <div>
          car name
          <input
            type="text"
            value={this.state.names}
            name="names"
            onChange={this.handleChange}
          />
          car price
          <input
            type="text"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <button onClick={this.add}>add</button>
          <br />
        </div>
        <table className="table">
          <tr>
            <th>#</th>
            <th>car name</th>
            <th>car price</th>
            <th>created time</th>
            <th>operation</th>
          </tr>

          {this.state.list.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.names}</td>
              <td>{item.price}</td>
              <td>{item.date}</td>
              <button onClick={() => this.del(item.id)}>delete</button>
            </tr>
          ))}
        </table>
      </div>
    )
  }
}
ReactDOM.render(<Test />, document.getElementById('root'))

reportWebVitals()
