import React from 'react'
import wind from '../imgs/wind.png'
import humidity from '../imgs/humidity.png'
import pressure from '../imgs/pressure.png'

export default function Item({className}) {
  return (
    <div className={className}>
      <img className="content__icon" src="http://openweathermap.org/img/wn/10d@2x.png" alt="a" />
      <div className="content__body">
        <div className='content__titles'>
          <h1 className="content__day">Munday</h1>
          <h1 className="content__temp">8°C</h1>
        </div>
        <div className={className.includes('current') ? 'content__info info ' : 'none'}>
        <div className='info__item'>
            <img className='info__icon' src={wind} alt="icon" />
            <div className='info__text'>
              <h1 className='info__title'>0km/h</h1>
              <p className='info__name'>wind spped</p>
            </div>
          </div>
          <div className='info__item'>
            <img className='info__icon' src={humidity} alt="icon" />
            <div className='info__text'>
              <h1 className='info__title'>20%</h1>
              <p className='info__name'>humidity</p>
            </div>
          </div>
          <div className='info__item'>
            <img className='info__icon' src={pressure} alt="icon" />
            <div className='info__text'>
              <h1 className='info__title'>1000mb</h1>
              <p className='info__name'>pressure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
