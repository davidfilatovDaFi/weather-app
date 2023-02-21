import React from 'react'

export default function Header({city}) {
  return (
    <header className="header">
      <p className="header__text">Weather app</p>
      <h1 className="header__city">{city[0].toUpperCase()+city.slice(1)}</h1>
    </header>
  )
}
