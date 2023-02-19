import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Item from "./components/Item";


function App() {
  return (
    <div className="App">
        <Header/>
        <main >
          <Form/>
          <div className="time">
            <h1 className="time__clock">10:00 pm</h1>
            <h2 className="time__date">Monday, 20 February</h2>
          </div>
          <div className="content">
            <Item className="content__item current"/>
            <Item className="content__item"/>
            <Item className="content__item"/>
            <Item className="content__item"/>
            <Item className="content__item"/>
          </div>
        </main>
    </div>
  );
}

export default App;
