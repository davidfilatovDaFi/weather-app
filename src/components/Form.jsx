import React from 'react'

export default function Form() {
  return (
    <form className="find">
      <input className="find__name" type="text" placeholder="Type city..." />
      <button className="find__button">Find</button>
    </form>
  )
}
