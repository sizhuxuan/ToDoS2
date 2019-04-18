// 导入类型
import { ADD_TODO, TOGGLE_TODO, DEL_TODO, SET_FILTER } from '../actionTypes'

//创建action creator
// 添加
export const addTodo = name => ({ type: ADD_TODO, name })

// 切换
export const toggleTodo = id => ({ type: TOGGLE_TODO, id })

//删除
export const delTodo = id => ({ type: DEL_TODO, id })

//显示不同状态任务
//参数filter表示当前要真是任务的状态
export const setFilter = filter => ({ type: SET_FILTER, filter })
