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
  const [cityList,setCityList] = useState([])
  const [cityName,setCityName] = useState('Moscow')
  const [weather,setWeather] = useState([])
  const [current,setCurrent] = useState(0)
  const [selectCity,setSelectCity] = useState('')
  const [fetchingCity,loaderCity,errorCity] = useFetch(async () => {
    const link = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=a2cd589df125dc8cbd69ea767fbb9c3c`
    const response = await fetch(link)
    const data = await response.json()
    const filterdata = data.filter(el => el.name.toLowerCase() === city.toLowerCase())
    setCityList([...new Set(data.map(city => city.name))]
      .filter(el => el.toLowerCase().includes(city.toLowerCase())))
    const lat = filterdata[0].lat
    const lon = filterdata[0].lon
    console.log(data)
    return [filterdata,lat,lon]
  })
  const [fetching,loader,error] = useFetch(async () => {
    const [data,lat,lon] = await fetchingCity()
    const response2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a2cd589df125dc8cbd69ea767fbb9c3c&units=metric`)
    const data2 = await response2.json()
    const filterdata = data2.list.filter(el => el.dt_txt.includes('15:00:00'))
    return [filterdata,data[0].name]
  })

  const fetchWeather = useCallback(async () => {
    setWeather([...await fetching(city)][0])
    setCityName([...await fetching()][1])
  },[city])

  useEffect(() => {
    fetchingCity()
  }, [city])
  
  useEffect(() => {
    fetchWeather()
    setCity('')
  },[selectCity])
  
  return (
    <div className="App">
        <Header city={cityName}/>
        <main>
          <Form 
            city={city} 
            getName={setCityName} 
            getValue={setCity} 
            fetchWeather={fetchWeather} 
            cityList={cityList}
            selectCity={setSelectCity}
          />
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
