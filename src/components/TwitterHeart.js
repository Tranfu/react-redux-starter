import React from 'react'
import style from './TwitterHeart.css'

export default class TwitterHeart extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div data-name="TwitterHeart" className={style.TwitterHeart}>
        <input id="toggle-heart" type="checkbox"/>
        <label htmlFor="toggle-heart" aria-label="like">
          {children ? children : '❤'}
        </label>
      </div>
    )
  }
}
