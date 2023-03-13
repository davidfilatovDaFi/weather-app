import React, { memo } from 'react'

const Form = memo(({fetchWeather,getValue,getName,city,cityList,selectCity}) => {
  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (city.length !== 0) {
        fetchWeather()
      } 
      getValue('')
      console.log(city)
    }} className="form">
      <div className="form__find find">
        <input value={city} onChange={e => {
          console.log(city)
          getValue(e.target.value)
        }} className="find__name" type="text" placeholder="Type city..." />
        <button className="find__button">Find</button>
      </div>
      <ul className={(city.length && cityList.length) === 0 ? 'form__list none' : 'form__list'}>
        {cityList.map(city => <li 
        key={city}
        className='form__item'
        onClick={() => {
          getValue(city)
          selectCity(city)
        }}
        >{city}</li>)}
      </ul>
    </form>
  )
})


export default Form