import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

// const isLogin = true
// const test = () => {
//   return isLogin ? <div>welcome</div> : <div>fail login</div>
// }
const list = [
  { id: 1, name: 'aiden', salary: 15000 },
  { id: 2, name: 'carol', salary: 10000 },
  { id: 3, name: 'cylor', salary: 10000 },
]
const element = (
  <div>
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <h3>name:{item.name}</h3>
          <p>salary:{item.salary}</p>
        </li>
      ))}
    </ul>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(element)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
