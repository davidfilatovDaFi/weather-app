import React, { memo } from 'react'

const Form = memo(({fetchWeather,getValue,getName,city}) => {
  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (city.length !== 0) {
        fetchWeather()
        getName(city)
      } 
      getValue('')
      console.log(city)
    }} className="find">
      <input value={city} onChange={e => getValue(e.target.value)} className="find__name" type="text" placeholder="Type city..." />
      <button className="find__button">Find</button>
    </form>
  )
})


export default Form