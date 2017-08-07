import axios from 'axios'

export const ADD_TODO = 'ADD_TODO'
let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export const TOGGLE_TODO = 'TOGGLE_TODO'
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export const RECEIVE_TODOS = 'RECEIVE_TODOS'
function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  }
}

export function fetchTodos() {
  return dispatch => {
    return axios.get(`http://localhost:8080/data.json`).then(data => dispatch(receiveTodos(data.todos)))
  }
}
