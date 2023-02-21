import React from 'react'

export default function Form({fetchWeather,getValue}) {
  return (
    <form onSubmit={e => {
      e.preventDefault()
      fetchWeather()
      console.log(e.target.value)
    }} className="find">
      <input onChange={e => getValue(e.target.value)} className="find__name" type="text" placeholder="Type city..." />
      <button className="find__button">Find</button>
    </form>
  )
}
