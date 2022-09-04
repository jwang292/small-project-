import React from 'react'
import ReactDOM from 'react-dom/client'
import Cat from './cat'
import Position from './position'
import Mouse from './mouse'
import Scroll from './scroll'
import withMouse from './withMouse'
import withScroll from './withScroll'
const root = ReactDOM.createRoot(document.getElementById('root'))
const CatWithMouse = withMouse(Cat)
const PositionWithMouse = withMouse(withScroll(Position))
root.render(
  <div style={{ height: 10000 }}>
    {/* <Cat></Cat> */}
    {/* <Position></Position> */}
    {/* <Mouse render={({ x, y }) => <Cat x={x} y={y}></Cat>}></Mouse> */}
    {/* <Scroll>
      {({ top, left }) => (
        <div style={{ position: 'fixed' }}>
          {top}-{left}
        </div>
      )}
    </Scroll> */}
    <CatWithMouse></CatWithMouse>
    <PositionWithMouse></PositionWithMouse>
  </div>
)
