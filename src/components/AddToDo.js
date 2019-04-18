import React from 'react'

//创建任务添加表单组件
class AddToDO extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      txt: ''
    }
  }
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          //非空校验
          if (this.state.txt.trim() === '') return
          this.props.add(this.state.txt)
          //清空文本框
          this.setState({
            txt: ''
          })
        }}
      >
        <input
          type="text"
          value={this.state.txt}
          onChange={e => this.setState({ txt: e.target.value })}
        />
        <button type="submit">Add ToDo</button>
      </form>
    )
  }
}

export default AddToDO
