import React from 'react';
import {Link} from 'react-router-dom';
export default () => <h1>HI</h1>;

const  = () => {
  return (
    <div>
    <nav className="Landing Page">

    <Link className="Home" to="/"><strong>Home</strong></Link>
    <Link className="About"to="/About"><strong>About</strong></Link>
    <Link className="BookAVisit"to="/BookAVisit"><strong>BookAVisit</strong></Link>
    <Link className="Events"to="/Events"><strong>Events</strong></Link>


      </nav>
    </div>
  )
}
export default landingPage;
