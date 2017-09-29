import { connect } from 'react-redux'
import IntlzProvider from './IntlzProvider'

const mapStateToProps = (state, ownProps) => {
  return {
    language: state.app.language,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IntlzProvider)
