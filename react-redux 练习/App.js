import Women from './components/women'
import Man from './components/man'
import { useSelector } from 'react-redux'

function App() {
  const money = useSelector((state) => state.money)
  const user = useSelector((state) => state.user)
  return (
    <div>
      <h1>root</h1>
      <div>family money :{money}</div>
      <hr />
      <Women></Women>
      <hr />
      <Man></Man>
      <hr />
      <hr />
      <div>user name:{user.name}</div>
      <div>user age:{user.age}</div>
    </div>
  )
}
export default App
