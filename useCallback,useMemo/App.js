import React, { useCallback, useMemo, useState } from 'react'
const App = () => {
  const [count, setCount] = useState(5)
  const [money, setMoney] = useState(1000)
  const total = useMemo(() => {
    return Array.from(new Array(money))
      .map((item, index) => index + 1)
      .reduce((prev, item) => prev + item, 0)
  }, [money])
  return (
    <div>
      {count > 0 ? <div>apple:{count}</div> : 'no more apple'}
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        eatting apple
      </button>
      {money > 0 ? <div>money:{money}</div> : 'no more money'}
      <button
        onClick={() => {
          setMoney(money + 100)
        }}
      >
        earn money
      </button>
      <hr />
      <div>total money:{total}</div>
      <button
        onClick={useCallback(() => {
          setCount(count + 1)
        }, [count])}
      >
        add apple
      </button>
    </div>
  )
}

export default App
