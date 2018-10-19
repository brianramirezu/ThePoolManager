import React, { Component } from 'react';
import style from "./style.css"
import { firebaseApp } from './firebase';


class Home extends Component {

signOut() {
 firebaseApp.auth().signOut();
}

 render() {
   return (
     <div>
     <h1><strong>HOME PAGE</strong></h1>
     <button

       className='btn btn-danger'
       onClick={() => this.signOut()}

       >
       Sign Out
     </button>

     </div>

   );
 }
}

export default Home;
