//导入connect
import { connect } from 'react-redux'
//导入action creator
import { addTodo } from '../actions'
//导入AddToDo展示组件
import AddToDO from '../components/AddToDo'

//创建mapStateToProps(此处不需要获取状态数据,故可以不写)
// const mapStateToProps = () => {
//   return {}
// }

//创建mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    add(name) {
      dispatch(addTodo(name))
    }
  }
}

//创建AddTodo容器组件
const AddToDoContainer = connect(
  null,
  mapDispatchToProps
)(AddToDO)

export default AddToDoContainer
