import React from 'react'

const Clock = ({time}) => {
  return (
    <div className="time">
      <h1 className="time__clock">
        {time.hours}:{(time.minutes+'').length === 1 ? '0'+time.minutes : time.minutes}
      </h1>
      <h2 className="time__date">{time.date}</h2>
    </div>
  )
}

export default Clock
