import React from 'react'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <FormattedMessage id="hello" />
      </div>
    )
  }
}
