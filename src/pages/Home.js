import React from 'react'
import classnames from 'classnames'
import { FormattedMessage } from 'react-intl'
import toastr from 'toastr'

export default class Home extends React.Component {

  componentDidMount() {
    toastr.info('Are you the 6 fingered man?', 'Inigo Montoya')
  }

  render() {
    return (
      <div>
        <FormattedMessage id="hello" />
      </div>
    )
  }
}
