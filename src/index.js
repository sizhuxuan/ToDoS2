import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//导入store
import store from './store'
//从react-redux导入provider
import { Provider } from 'react-redux'
//导入路由
import { HashRouter as Router, Route } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/:filter?" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
