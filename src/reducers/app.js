import {
  APP_SWITCH_LANGUAGE,
} from '../actions/app'

const initialState = {
  language: localStorage.getItem('__DEFAULT_LANGUAGE') ? localStorage.getItem('__DEFAULT_LANGUAGE') : 'en_us',
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case APP_SWITCH_LANGUAGE:
      return Object.assign({}, state, {
        language: action.language
      })
    default:
      return state
  }
}
