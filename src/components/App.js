import React from 'react'
import classnames from 'classnames'
import HeaderContainer from './HeaderContainer'

export default class App extends React.Component {
  render() {
    // const childrenWithProps = React.Children.map(this.props.children, child => React.cloneElement(child, {data: 'react-redux-starter'}));
    return (
      <div>
        <HeaderContainer />
        <main>
          {
            // childrenWithProps
          }
          {this.props.children}
        </main>
        <footer></footer>
      </div>
    )
  }
}
