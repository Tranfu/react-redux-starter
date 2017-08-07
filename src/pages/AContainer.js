import { connect } from 'react-redux'
import A from './A'

const mapStateToProps = state => {
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(A)
