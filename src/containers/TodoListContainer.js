//容器组件不需要结构,所以不需导入react
//导入connect从react-redux
import { connect } from 'react-redux'
//导入作为参数传进去的展示组件
import TodoList from '../components/TodoList'
//导入action creator
import { toggleTodo, delTodo } from '../actions'

const getFilterToDos = (todos, filter) => {
  if (filter === 'all') {
    return [...todos]
  } else if (filter === 'active') {
    return todos.filter(item => !item.done)
  } else if (filter === 'completed') {
    return todos.filter(item => item.done)
  } else {
    //手动抛出错误
    throw new Error('unknow filter', filter)
  }
}

//创建mapStateToProps
const mapStateToProps = (state, ownProps) => {
  console.log('state =>', ownProps)
  return {
    // todos: []
    todos: getFilterToDos(state.todos, ownProps.filter)
  }
}

//创建mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    toggleTodo(id) {
      dispatch(toggleTodo(id))
    },
    delTodo(id) {
      dispatch(delTodo(id))
    }
  }
}

//创建容器组件
const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer
