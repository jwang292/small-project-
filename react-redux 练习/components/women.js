import { useSelector, useDispatch } from 'react-redux'
import { addMoney, buyAsync } from '../store/action'
export default function Women() {
  const money = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>women compnent</h3>
      <div>money</div>
      <button onClick={() => dispatch(addMoney(-20))}>cost money</button>
      {/* 异步请求 redux thunk*/}
      <button onClick={() => dispatch(buyAsync(-20))}>hair</button>
    </div>
  )
}
