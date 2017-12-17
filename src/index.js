import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerMiddleware, push } from 'react-router-redux'

import copy from './misc/copy'
import style from './css/style'
import rootReducer from './reducers'
import IntlzProviderContainer from './components/IntlzProviderContainer'
import AppContainer from './components/AppContainer'
import Home from './pages/Home'

import toastr from 'toastr'

toastr.options = {
  positionClass: 'toast-bottom-left',
}

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

const history = syncHistoryWithStore(hashHistory, store)

const Root = ({ store }) => (
  <Provider store={store}>
    <IntlzProviderContainer>
      <Router history={history}>
        <Route path="/" component={AppContainer} >
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
        </Route>
      </Router>
    </IntlzProviderContainer>
  </Provider>
)

render(<Root store={store} />, document.getElementById('root'))

// console.log(PRODUCTION)
// console.log(SERVICE_URL)
