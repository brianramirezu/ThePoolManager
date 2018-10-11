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
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import { firebaseApp }  from 'firebase';

// firebaseApp.auth().onAuthStateChange(user => {
//   if (user){
//     console.log('user has signed in or up', user);
//   }else{
//     console.log('user has signed out or still need to sign in');
//   }
// })
class App extends Component {
 render() {
   return (
     <BrowserRouter>
     <div>
       <HeaderBar />
       <Switch>
         <Route path="/home" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/events" component={Events} />
         <Route path="/calendar" component={Calendar} />
         <Route path="/bookAVisit" component={BookAVisit} />
         <Route path="/contacts" component={Contacts} />
         <Route exact path ='/' component={SignIn} />
         <Route path ='/SignUp' component={SignUp} />
       </Switch>
       <FooterPage />
     </div>
   </BrowserRouter>
 );
}
}



export default App;
