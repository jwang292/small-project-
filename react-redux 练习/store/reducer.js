import { combineReducers } from 'redux'
function user(state = { name: 'manager', age: 20 }, action) {
  return state
}
function money(state = 1000, action) {
  if (action.type === 'ADD_MONEY') {
    return state + action.money
  }
  return state
}
const rootReducer = combineReducers({
  user,
  money,
})

export default rootReducer
