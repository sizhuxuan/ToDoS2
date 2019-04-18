// 导入类型
import { ADD_TODO, TOGGLE_TODO, DEL_TODO, SET_FILTER } from '../actionTypes'
// 导入combineReducers
import { combineReducers } from 'redux'
let nextId = 0

// 创建todos的reducers
// 根据原来的状态得到新的状态
// 添加: [] ==> [{}]
const todos = (state = [], action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // 添加
    case ADD_TODO:
      return [
        {
          id: nextId++,
          name: action.name,
          done: false
        },
        ...state
      ]

    // 切换
    case TOGGLE_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return { ...item, done: !item.done }
        }
        return { ...item }
      })

    //删除
    case DEL_TODO:
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}

//创建一个新的reducer来单独处理任务状态 这个数据
const filter = (state = 'all', action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter
    default:
      return state
  }
}

//通过 combineReducers 方法,来将多个reducer合并成一个根 reducer, 最终只要将根 reducer传递给 store即可
//注意: combineReducers 方法的参数是一个对象,这个对象就是store中 最终 state 的结构
export default combineReducers({
  todos,
  filter
})
