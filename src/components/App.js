import React from 'react'
import NProgress from 'nprogress'
import classnames from 'classnames'

import Header from './Header'

export default class App extends React.Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children, child => React.cloneElement(child, {data: 'react-redux-starter'}));
    return (
      <div data-app="App" className="row">
        <header className="col-lg-12">
          <Header />
        </header>
        <div className="col-lg-12">
          {childrenWithProps}
        </div>
        <footer className="col-lg-12"></footer>
      </div>
    )
  }
}
