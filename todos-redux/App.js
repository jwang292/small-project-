import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'

import './styles/base.css'
import './styles/index.css'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getListAsync } from './store/actions/todos'

const App = () => {
  //发送请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListAsync())
  }, [dispatch])
  return (
    <section className="todoapp">
      <TodoHeader />
      <TodoMain />
      <TodoFooter />
    </section>
  )
}

export default App
