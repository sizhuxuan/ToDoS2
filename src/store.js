import { createStore } from 'redux'
//导入reducer
import reducers from './reducers'
//导入action
// import { addTodo, toggleTodo} from './actions'
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
