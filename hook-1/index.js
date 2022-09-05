import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>root</h3>
      <div>i click {count} times</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App></App>)
