/* eslint-disable */
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux'

import style from './css/style'
import rootReducer from './reducers'
import AppContainer from './components/AppContainer'
import Home from './pages/Home'

const loggerMiddleware = createLogger({
  predicate: (getState, action) => !action.type.includes('@@'),
  collapsed: (getState, action, logEntry) => !logEntry.error,
})
const middleware = routerMiddleware(hashHistory)

const store = createStore(
  rootReducer,
  applyMiddleware(
    middleware,
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)
// store.dispatch(push('/todo'))

const history = syncHistoryWithStore(hashHistory, store)
history.listen(location => console.log(location.pathname))

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={AppContainer} >
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
      </Route>
    </Router>
  </Provider>
)

render(<Root store={store} />, document.getElementById('root'))

console.log(PRODUCTION) // eslint-disable-line
console.log(SERVICE_URL) // eslint-disable-line
