import React from 'react'
import style from './Theme.css'

export default class Theme extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      theme: 'slate'
    }
  }

  handleChange({target}) {
    this.setState({theme: target.value})
    const theme = target.value
    let url = ''
    if (theme === 'default') {
      url = 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'
    } else {
      url = `https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/${theme}/bootstrap.min.css`
    }
    let $prelink = $('link[data-theme]')
    setTimeout(function () {
      $prelink.remove()
    }, 1000);
    const $link = $(`<link rel="stylesheet" href=${url} data-theme>`)
    $link.appendTo($('head'))
  }

  render() {
    const themes = [
      'default',
      'cerulean',
      'cosmo',
      'cyborg',
      'darkly',
      'flatly',
      'journal',
      'lumen',
      'paper',
      'readable',
      'sandstone',
      'simplex',
      'slate',
      'solar',
      'spacelab',
      'superhero',
      'united',
      'yeti',
    ]
    return (
      <div data-name="Theme" className={style.Theme}>
        <select
          className="form-control"
          value={this.state.theme}
          onChange={e => this.handleChange(e)}>
          {themes.map((theme, index) => <option key={index} value={theme}>{theme}</option>)}
        </select>
      </div>
    )
  }
}
