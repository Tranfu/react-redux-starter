import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import zh_cn from '../i18n/zh_cn'
import en_us from '../i18n/en_us'

const languageMap = {
  zh_cn, en_us,
}

addLocaleData([...en, ...zh])

export default class IntlzProvider extends React.Component {
  render() {
    const {
      language,
    } = this.props
    return (
      <IntlProvider locale={navigator.language} key={language} messages={languageMap[language]} >
        {this.props.children}
      </IntlProvider>
    )
  }
}
