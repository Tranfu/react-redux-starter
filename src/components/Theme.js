import React from 'react'
import moment from 'moment'
import TwitterHeart from './TwitterHeart'
import style from './Theme.css'

export default class Theme extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      theme: 'slate'
    }
  }

  // componentDidMount() {
  //   const hour = moment().hour()
  //   // if (hour > 9 && hour < 18) {
  //   if (false) {
  //     this.setState({theme: 'default'})
  //     $('link[data-theme="black"]').remove()
  //   } else {
  //     this.setState({theme: 'slate'})
  //     $('link[data-theme="white"]').remove()
  //   }
  // }

  // handleChange({target}) {
  //   this.setState({theme: target.value})
  //   const theme = target.value
  //   let url = ''
  //   if (theme === 'default') {
  //     url = 'https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css'
  //   } else {
  //     url = `https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/${theme}/bootstrap.min.css`
  //   }
  //   let $prelink = $('link[data-theme]')
  //   setTimeout(function () {
  //     $prelink.remove()
  //   }, 3000);
  //   const $link = $(`<link rel="stylesheet" href=${url} data-theme>`)
  //   $link.appendTo($('head'))
  // }

  handleClick() {
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.setState((prevState, props) => {
        if (prevState.theme === 'slate') {
          $('head').append($(`<link rel="stylesheet" href="vendors/bootstrap/css/bootstrap.min.css" data-theme="white">`))
          setTimeout(() => {
            $('link[data-theme="black"]').remove()
          }, 500)
        } else {
          $('head').append($(`<link rel="stylesheet" href="vendors/bootstrap/css/bootstrap-slate.min.css" data-theme="black">`))
          setTimeout(() => {
            $('link[data-theme="white"]').remove()
          }, 500)
        }
        return {
          theme: prevState.theme === 'default' ? 'slate' : 'default'
        }
      })
    }, 1000)
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
        <div className={style.lightBox} title={this.state.theme === 'default' ? '关灯' : '开灯'}>
          <TwitterHeart>
            <i className="fa fa-lightbulb-o fa-6" aria-hidden="true" style={{fontSize:'30px'}} onClick={() => this.handleClick()}></i>
          </TwitterHeart>
        </div>
        {
          // <select
          //   className="form-control"
          //   value={this.state.theme}
          //   onChange={e => this.handleChange(e)}>
          //   {themes.map((theme, index) => <option key={index} value={theme}>{theme}</option>)}
          // </select>
        }
      </div>
    )
  }
}
