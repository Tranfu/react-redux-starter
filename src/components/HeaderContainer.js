import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import Header from './Header'
import {
  switchLanguage,
} from '../actions/app'

const mapStateToProps = (state, ownProps) => {
  return {
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onTest: () => {
      console.log(ownProps.intl.formatMessage({id: 'hello'}));
    },
    onSwitchLanguage: language => {
      dispatch(switchLanguage(language))
    }
  }
}

export default connect()(injectIntl(connect(mapStateToProps, mapDispatchToProps)(injectIntl(Header))))
