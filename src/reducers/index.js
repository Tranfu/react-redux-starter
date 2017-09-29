import { combineReducers } from 'redux'
import {
  reducer as formReducer
} from 'redux-form'
import {
  syncHistoryWithStore,
  routerReducer
} from 'react-router-redux'
import app from './app'

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  app,
})

export default rootReducer
