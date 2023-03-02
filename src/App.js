import React, { useEffect, useState, useCallback } from "react";
import Clock from "./components/Clock";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";



function App() {
  const [time,setTime] = useState({date:'Monday, February 20, 2023',hours:'12',minutes:'00'})
  const [city,setCity] = useState('Moscow')
  const [cityName,setCityName] = useState('Moscow')
  const [weather,setWeather] = useState([])
  const [current,setCurrent] = useState(0)
  const [loader,setLoader] = useState(false)

  const getTime = () => {
    const time = new Date()
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const date = time.toLocaleDateString("en-US", options)
    const hours = time.getHours()
    const minutes = time.getMinutes()
    setTime({date,hours,minutes})
  }

  const fetchWeather = useCallback(async () => {
    setLoader(true)
    const link = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a2cd589df125dc8cbd69ea767fbb9c3c`
    const response = await fetch(link)
    const data = await response.json()
    const lat = data[0].lat
    const lon = data[0].lon
    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a2cd589df125dc8cbd69ea767fbb9c3c&units=metric`)
    const data2 = await response2.json()
    const filterdata2 = [...data2.list.filter(el => el.dt_txt.includes('15:00:00'))]
    setLoader(false)
    setWeather(filterdata2)
    console.log(data)
  },[city])

  useEffect(() => {
    getTime()
    const intervalId = setInterval(getTime,1000)
    fetchWeather()
    return () => {
      clearInterval(intervalId)
    }
  },[])

  return (
    <div className="App">
        <Header city={cityName}/>
        <main>
          <Form city={city} getName={setCityName} getValue={setCity} fetchWeather={fetchWeather}/>
          <Clock time={time}/>
          <List 
          setCurrent={setCurrent} 
          weather={weather} 
          loader={loader} 
          current={current} 
          className="content">
          </List>
        </main>
    </div>
  );
}

export default App;
