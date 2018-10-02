import React, { Component } from 'react';
import Header from "./componets/header.jsx"
import Calendar from "./componets/calendar.jsx"
import Events from "./componets/Events.jsx"
import style from "./style.css"





class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>This is the landing page</p>
      </div>
    );
  }
}

export default App;
