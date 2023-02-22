import React, { useCallback, useEffect, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Item from "./components/Item";


function App() {
  const [time,setTime] = useState({date:'Monday, February 20, 2023',hours:'12',minutes:'00'})
  const [city,setCity] = useState('Moscow')
  const [cityName,setCityName] = useState('Moscow')
  const [weather,setWeather] = useState([])

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

  async function fetchWeather () {
    const link = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a2cd589df125dc8cbd69ea767fbb9c3c`
    const response = await fetch(link)
    const data = await response.json()
    const lat = data[0].lat
    const lon = data[0].lon
    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a2cd589df125dc8cbd69ea767fbb9c3c&units=metric`)
    const data2 = await response2.json()
    const filterdata2 = [...data2.list.filter(el => el.dt_txt.includes('15:00:00'))]
    setWeather(filterdata2)
    console.log(filterdata2)
  }
  
  useEffect(() => {
    fetchWeather()
  }, [])

  return (
    <div className="App">
        <Header city={cityName}/>
        <main >
          <Form city={city} getName={setCityName} getValue={setCity} fetchWeather={fetchWeather}/>
          <div className="time">
            <h1 className="time__clock">
              {time.hours}:{(time.minutes+'').length === 1 ? '0'+time.minutes : time.minutes}
            </h1>
            <h2 className="time__date">{time.date}</h2>
          </div>
          <div className="content">
            {weather.map((e,i) => <Item 
            key={i} 
            className={i === 0 ? "content__item current" : "content__item"}
            day={['Saturday','Monday','Tuesday','Wensday','Thursday','Friday','Sunday'][new Date(e.dt_txt).getDay()]}
            temp={e.main.temp}
            humidity={e.main.humidity}
            pressure={e.main.pressure}
            windspeed={e.wind.speed}
            icon={e.weather[0].icon}
            />)}

          </div>
        </main>
    </div>
  );
}

export default App;
