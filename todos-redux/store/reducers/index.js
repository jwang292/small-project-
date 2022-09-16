import filter from './filter'
import todos from './todos'
import { combineReducers } from 'redux'

export default combineReducers({
  filter,
  todos,
})
