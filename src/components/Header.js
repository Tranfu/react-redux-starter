import React from 'react'
import sweetalert from 'sweetalert'
import { FormattedMessage } from 'react-intl'
import cn from '../images/cn.png'
import us from '../images/us.png'

export default class Header extends React.Component {

  componentDidMount() {
    this.handleLastTheme()
  }

  handleLastTheme() {
    const theme = localStorage.getItem('__DEFAULT_THEME')
    if (theme && theme !== 'Default') {
      $('head').append($(`<link rel="stylesheet" href="vendors/bootswatch/bootstrap.${theme}.min.css" data-theme>`))
      setTimeout(() => {
        if ($('link[data-theme]').length > 1) {
          $('link[data-theme]:not(:last-of-type)').remove()
        }
      }, 1000 * 3);
    }
  }

  handleClick({target}) {
    const $target = $(target)
    if ($target.is('a')) {
      const theme = $target.text()
      $('head').append($(`<link rel="stylesheet" href="vendors/bootswatch/bootstrap.${theme}.min.css" data-theme>`))
      localStorage.setItem('__DEFAULT_THEME', theme)
      setTimeout(() => {
        if ($('link[data-theme]').length > 1) {
          $('link[data-theme]:not(:last-of-type)').remove()
        }
      }, 1000 * 3);
    }
  }

  render() {
    const {
      intl,
      onTest,
      onSwitchLanguage,
    } = this.props
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#" onClick={() => onTest()}>Brand {intl.formatMessage({id: 'hello'})}</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Link</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><FormattedMessage id="language" /> <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li onClick={() => onSwitchLanguage('en_us')}>
                    <a role="button" data-language="en_us">
                      <img src={us} /> English
                    </a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li onClick={() => onSwitchLanguage('zh_cn')}>
                    <a role="button" data-language="zh_cn">
                      <img src={cn} /> 中文
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Themes <span className="caret"></span></a>
                <ul className="dropdown-menu" onClick={e => this.handleClick(e)}>
                  <li><a role="button">Default</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a role="button">Cerulean</a></li>
                  <li><a role="button">Cosmo</a></li>
                  <li><a role="button">Cyborg</a></li>
                  <li><a role="button">Darkly</a></li>
                  <li><a role="button">Flatly</a></li>
                  <li><a role="button">Journal</a></li>
                  <li><a role="button">Lumen</a></li>
                  <li><a role="button">Paper</a></li>
                  <li><a role="button">Readable</a></li>
                  <li><a role="button">Sandstone</a></li>
                  <li><a role="button">Simplex</a></li>
                  <li><a role="button">Slate</a></li>
                  <li><a role="button">Solar</a></li>
                  <li><a role="button">Spacelab</a></li>
                  <li><a role="button">Superhero</a></li>
                  <li><a role="button">United</a></li>
                  <li><a role="button">Yeti</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                  Me <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a role="button" data-language="en_us">Help</a>
                  </li>
                  <li role="separator" className="divider"></li>
                  <li>
                    <a role="button" data-language="zh_cn">Sign Out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
