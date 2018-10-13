import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'


class Routes extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path ='/' component={SignIn} />
            <Route path ='/SignUp' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
