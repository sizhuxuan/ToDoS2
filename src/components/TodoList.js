import React from 'react'
//导入列表子组件todo
import Todo from './Todo'
//导入props类型校验
import propTypes from 'prop-types'

//创建任务列表组件
const TodoList = ({ todos, toggleTodo, delTodo }) => {
  // console.log(todos)
  return (
    <ul>
      {todos.map(item => {
        return (
          <Todo
            key={item.id}
            name={item.name}
            done={item.done}
            toggleTodo={() => toggleTodo(item.id)}
            delTodo={() => delTodo(item.id)}
          />
        )
      })}
    </ul>
  )
}

//类型校验
TodoList.propTypes = {
  toggleTodo: propTypes.func.isRequired,
  todos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      done: propTypes.bool.isRequired
    }).isRequired
  ).isRequired
}

//导出TodoList组件
export default TodoList
