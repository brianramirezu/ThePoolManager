import React, { Component } from 'react';
import style from "./style.css"
import HeaderBar from "./components/header.jsx"
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./home.jsx"
import Events from "./components/events.jsx"
//import FooterPage from "./footer.jsx"
import About from "./components/about.jsx";
import Calendar from "./components/calendar.jsx"
import BookAVisit from "./components/bookAVisist.jsx"
import Contacts from "./components/contacts.jsx"
import FooterPage from "./components/footer.jsx"

class App extends Component {
 render() {
   return (
     <BrowserRouter>
     <div>
       <HeaderBar />
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/events" component={Events} />
         <Route path="/calendar" component={Calendar} />
         <Route path="/bookAVisit" component={BookAVisit} />
         <Route path="/contacts" component={Contacts} />
       </Switch>
       <FooterPage />
     </div>
   </BrowserRouter>
 );
}
}



export default App;
