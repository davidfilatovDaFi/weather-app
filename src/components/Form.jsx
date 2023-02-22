import React from 'react'

export default function Form({fetchWeather,getValue,getName,city}) {
  return (
    <form onSubmit={e => {
      e.preventDefault()
      fetchWeather()
      getName(city)
      getValue('')
      console.log(e.target.value)
    }} className="find">
      <input value={city} onChange={e => getValue(e.target.value)} className="find__name" type="text" placeholder="Type city..." />
      <button className="find__button">Find</button>
    </form>
  )
}
