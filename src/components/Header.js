import React from 'react'
import TwitterHeart from './TwitterHeart'

export default class Header extends React.Component {

  componentDidMount() {
    const classNames = [
      'bounce',
      'flash',
      'pulse',
      'rubberBand',
      'shake',
      'headShake',
      'swing',
      'tada',
      'wobble',
      'jello',
      'bounceIn',
      'bounceInDown',
      'bounceInLeft',
      'bounceInRight',
      'bounceInUp',
      'bounceOut',
      'bounceOutDown',
      'bounceOutLeft',
      'bounceOutRight',
      'bounceOutUp',
      'fadeIn',
      'fadeInDown',
      'fadeInDownBig',
      'fadeInLeft',
      'fadeInLeftBig',
      'fadeInRight',
      // 'fadeInRightBig',
      'fadeInUp',
      // 'fadeInUpBig',
      'fadeOut',
      'fadeOutDown',
      'fadeOutDownBig',
      'fadeOutLeft',
      'fadeOutLeftBig',
      'fadeOutRight',
      'fadeOutRightBig',
      'fadeOutUp',
      'fadeOutUpBig',
      'flipInX',
      'flipInY',
      'flipOutX',
      'flipOutY',
      'lightSpeedIn',
      'lightSpeedOut',
      'rotateIn',
      'rotateInDownLeft',
      'rotateInDownRight',
      'rotateInUpLeft',
      'rotateInUpRight',
      'rotateOut',
      'rotateOutDownLeft',
      'rotateOutDownRight',
      'rotateOutUpLeft',
      'rotateOutUpRight',
      'hinge',
      'jackInTheBox',
      'rollIn',
      'rollOut',
      'zoomIn',
      'zoomInDown',
      'zoomInLeft',
      'zoomInRight',
      'zoomInUp',
      'zoomOut',
      'zoomOutDown',
      'zoomOutLeft',
      'zoomOutRight',
      'zoomOutUp',
      'slideInDown',
      'slideInLeft',
      'slideInRight',
      'slideInUp',
      'slideOutDown',
      'slideOutLeft',
      'slideOutRight',
      'slideOutUp',
    ]
    setInterval(() => {
      const random = this.getRandomInt(0, 75)
      $('#redheart').removeClass().addClass('animated').addClass(classNames[random])
    }, 1000 * 10);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min //The maximum is exclusive and the minimum is inclusive
  }

  handleClick({target}) {
    const theme = $(target).text()
    $('head').append($(`<link rel="stylesheet" href="vendors/bootswatch/bootstrap.${theme}.min.css" data-theme>`))
    setTimeout(() => {
      if ($('link[data-theme]').length > 1) {
        $('link[data-theme]:not(:last-of-type)').remove()
      }
    }, 1000 * 3);
  }

  render() {
    return (
      <nav data-header="Header" className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              Brand <span className="animated zoomIn" id="redheart" style={{display:'inline-block',color:'rgb(233, 50, 45)'}}>❤</span>
            </a>
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
              <li><a href="#">Link</a></li>
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
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
