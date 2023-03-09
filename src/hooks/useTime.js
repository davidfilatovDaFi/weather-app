import { useState,useEffect } from "react";

const useTime = () => {
  const [time,setTime] = useState({})

  const getTime = () => {
    const time = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const date = time.toLocaleDateString("en-US", options)
    const hours = time.getHours()
    const minutes = time.getMinutes()
    setTime({date,hours,minutes})
  }

  useEffect(() => {
    getTime()
    const intervalId = setInterval(getTime,1000)
    return () => {
      clearInterval(intervalId)
    }
  },[])

  return time
}

export default useTime;