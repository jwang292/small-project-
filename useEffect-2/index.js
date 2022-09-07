import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import img from './logo192.png'
import useMouse from './useMouse'
import useScroll from './useScroll'
function Cat() {
  const { x, y } = useMouse()
  const { top, left } = useScroll()
  return (
    <div style={{ wide: 10000, height: 10000 }}>
      <img src={img} style={{ position: 'absolute', left: x, top: y }} alt="" />
      <div>
        scroll :{top}----{left}
      </div>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Cat></Cat>)
