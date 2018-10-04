import React, { Component } from 'react';
import style from "./style.css"
import Header from "./componets/header.jsx"
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./home.jsx"
import Events from "./componets/Events.jsx"
import FooterPage from "./componets/footer.jsx"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/eventos" component={Events} />
        </Switch>
        <FooterPage />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
