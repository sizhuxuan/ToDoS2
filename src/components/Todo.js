import React from 'react'

//导入组件类型检查包
import propTypes from 'prop-types'
// 创建任务项组件
const Todo = ({ name, done, toggleTodo, delTodo }) => (
  <div>
    <li>
      <span
        onClick={toggleTodo}
        style={{ textDecoration: done ? 'line-through' : 'none' }}
      >
        {name}
      </span>
      <span onClick={delTodo} style={{ marginLeft: '10px', color: 'blue' }}>
        ×
      </span>
    </li>
  </div>
)
//props类型校验
Todo.propTypes = {
  //必须提供name属性,并且name属性是字符串类型
  name: propTypes.string.isRequired,
  done: propTypes.bool.isRequired,
  toggleTodo: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired
}

export default Todo
