import React from 'react'
import {render} from 'react-dom';
import {Link} from "./components/landingPage.jsx";
import App from './components/App.js';
import registerServiceWorker from './components/registerServiceWorker';
import { BrowserRouter, Route, Link } from "react-router-dom";

//import Form from "./components/form.js";


class Index extends React.Component {
     render() {
       return(
      <div className='Landing Page'>
        <BrowserRouter>
          <div>
            <Route path='/' component={App} />
            <Route exact path='/Home' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Events' component={Events} />
            <Route exact path='/BookAVisit' component={BookAVisit} />
         </div>
       </BrowserRouter>
      </div>
    );
  }
}








render(<App />, document.getElementById('root'));
registerServiceWorker();
