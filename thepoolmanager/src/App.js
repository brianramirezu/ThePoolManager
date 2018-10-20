import React, { Component } from 'react';
import style from "./style.css"
import HeaderBar from "./components/header.jsx"
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { browserHistory } from '@version/react-router-v3';
import Home from "./home.jsx"
import Events from "./components/events.jsx"
import About from "./components/about.jsx";
import Calendar from "./components/calendar.jsx"
import BookAVisit from "./components/bookAVisist.jsx"
import Contacts from "./components/contacts.jsx"
import FooterPage from "./components/footer.jsx"
import { firebaseApp }  from './firebase';
import home from './home.jsx';
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import { Carousel } from 'react-responsive-carousel'

firebaseApp.auth().onAuthStateChanged(user => {
 if (user){
   console.log('user has signed in or up', user);
   browserHistory.push('/home');
 }else{
   console.log('user has signed out or still needs to sign in');
   browserHistory.replace('/SignIn');
 }
})
class App extends Component {
render() {
  return (
    <BrowserRouter>
    <div>
      <HeaderBar />
      <Switch>
        <Route exact path ='/' component={SignIn} />
        <Route path ='/SignUp' component={SignUp} />
        <Route path="/home" component={home} />
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
