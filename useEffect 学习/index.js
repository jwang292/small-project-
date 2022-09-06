import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
function App() {
  const [count, setCount] = useState(0)
  // 包括 componentDidMount componentDidUpdate
  useEffect(() => {
    document.title = `count ${count} time`
  })

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
