import React from 'react'
import {Component} from 'react-dom';
import {Link} from "./component/landingPage.jsx";
import App from './component/App.js';
import registerServiceWorker from './component/registerServiceWorker';

//import Form from "./components/form.js";


class Index extends React.Component {
     render() {
      <div className='Landing Page'>
        <BrowserRouter>
          <div>
            <Route path='/' component={App} />
            <Route path='/Home' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Events' component={Events} />
            <Route exact path='/BookAVisit' component={BookAVisit} />
            <Route exact path='/registerServiceWorker' component={registerServiceWorker} />
         </div>
       </BrowserRouter>
      </div>









ReactDOM.render(<App />, document.getElementById('root'));
