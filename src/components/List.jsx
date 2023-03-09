import React, { memo } from 'react'
import Item from './Item'
import Loader from './Loader'

const List = memo(({setCurrent,weather,loader,current,className,error}) => {
  return (
    <div className={className}>
      {error
      ? <div className='error'>data is not correct</div> 
      : loader ? <Loader/> : weather.map((e,i) => <Item 
      key={i} 
      onClick={() => setCurrent(i)}
      className={i === current ? "content__item current" : "content__item"}
      day={['Saturday','Monday','Tuesday','Wensday','Thursday','Friday','Sunday'][new Date(e.dt_txt).getDay()]}
      temp={e.main.temp}
      humidity={e.main.humidity}
      pressure={e.main.pressure}
      windspeed={e.wind.speed}
      icon={e.weather[0].icon}
    />)
      }
    </div>
  )
})

export default List
