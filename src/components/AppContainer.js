import React from 'react'
import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = state => {
  return {
    // language: state.app.language,
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
