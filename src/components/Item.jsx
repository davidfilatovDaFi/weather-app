import React from 'react'
import windicon from '../imgs/wind.png'
import humidityicon from '../imgs/humidity.png'
import pressureicon from '../imgs/pressure.png'

export default function Item({className,temp,windspeed,humidity,pressure,day,icon,onClick}) {
  return (
    <div onClick={onClick} className={className}>
      <img className="content__icon" src={"http://openweathermap.org/img/wn/"+icon+"@2x.png"} alt="a" />
      <div className="content__body">
        <div className='content__titles'>
          <h1 className="content__day">{day}</h1>
          <h1 className="content__temp">{temp}°C</h1>
        </div>
        <div className={className.includes('current') ? 'content__info info ' : 'none'}>
        <div className='info__item'>
            <img className='info__icon' src={windicon} alt="icon" />
            <div className='info__text'>
              <h1 className='info__title'>{windspeed}km/h</h1>
              <p className='info__name'>wind spped</p>
            </div>
          </div>
          <div className='info__item'>
            <img className='info__icon' src={humidityicon} alt="icon" />
            <div className='info__text'>
              <h1 className='info__title'>{humidity}%</h1>
              <p className='info__name'>humidity</p>
            </div>
          </div>
          <div className='info__item'>
            <img className='info__icon' src={pressureicon} alt="icon" />
            <div className='info__text'>
              <h1 className='info__title'>{pressure}mb</h1>
              <p className='info__name'>pressure</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
