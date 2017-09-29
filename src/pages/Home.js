import React from 'react'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <FormattedMessage id="hello" />
      </div>
    )
  }
}
