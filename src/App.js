import React, { Component } from 'react'
//导入任务列表容器组件
import TodoListContainer from './containers/TodoListContainer'
//导入添加任务容器组件
import AddToDoContainer from './containers/AddToDoContainer'
// 导入FooterContainer容器组件
import Footer from './components/Footer'

class App extends Component {
  render() {
    console.log('APP组件props: ', this.props)
    return (
      <div className="App">
        <AddToDoContainer />
        <TodoListContainer filter={this.props.match.params.filter || 'all'} />
        <Footer />
      </div>
    )
  }
}

export default App
