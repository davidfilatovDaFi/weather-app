import React, { useEffect, useState, useCallback } from "react";
import Clock from "./components/Clock";
import Form from "./components/Form";
import Header from "./components/Header";
import List from "./components/List";
import useFetch from "./hooks/useFetch";
import useTime from "./hooks/useTime";

function App() {
  const time = useTime()
  const [city,setCity] = useState('Moscow')
  const [cityName,setCityName] = useState('Moscow')
  const [weather,setWeather] = useState([])
  const [current,setCurrent] = useState(0)
  const [fetching,loader,error] = useFetch(async () => {
    const link = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=a2cd589df125dc8cbd69ea767fbb9c3c`
    const response = await fetch(link)
    const data = await response.json()
    const lat = data[0].lat
    const lon = data[0].lon
    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a2cd589df125dc8cbd69ea767fbb9c3c&units=metric`)
    const data2 = await response2.json()
    console.log(data[0].name)
    const filterdata = data2.list.filter(el => el.dt_txt.includes('15:00:00'))
    return [filterdata,data[0].name]
  })

  const fetchWeather = useCallback(async () => {
    setWeather([...await fetching()][0])
    setCityName([...await fetching()][1])
  },[city])

  useEffect(() => {
    fetchWeather()
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
          className="content"
          error={error}>
          </List>
        </main>
    </div>
  );
}

export default App;
