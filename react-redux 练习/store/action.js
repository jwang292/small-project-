export const addMoney = (money) => {
  return {
    type: 'ADD_MONEY',
    money,
  }
}
// 同步的直接返回对象，异步返回一个异步函数，需要dispatch
export const buyAsync = (money) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addMoney(money))
    }, 3000)
  }
}
