import { useSelector, useDispatch } from 'react-redux'
import { addMoney } from '../store/action'
export default function Man() {
  const money = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div>
      <h3>man compnent</h3>
      <div>money</div>
      <button onClick={() => dispatch(addMoney(10))}>earn money +10</button>
    </div>
  )
}
