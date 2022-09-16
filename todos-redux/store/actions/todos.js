import axios from 'axios'
//同步
export const getList = (list) => {
  return {
    type: 'GET_LIST',
    list,
  }
}
//异步
export const getListAsync = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:8888/todos')
    dispatch(getList(res.data))
  }
}

export const addTodo = (name) => {
  return async (dispatch) => {
    const res = await axios.post('http://localhost:8888/todos', {
      name,
      done: false,
    })
    dispatch(getListAsync())
  }
}

//delete
export const delTodo = (id) => {
  return async (dispatch) => {
    await axios.delete('http://localhost:8888/todos/' + id)
    dispatch(getListAsync())
  }
}

export const changeDone = (id, done) => {
  return async (dispatch) => {
    //发请求
    await axios.patch('http://localhost:8888/todos/' + id, {
      done,
    })
    dispatch(getListAsync())
  }
}
