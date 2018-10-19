import React, { Component } from 'react';
import { firebaseApp } from './firebase';
import style from './style.css';



class Home extends React.Component {

signOut() {
 firebaseApp.auth().signOut();
 this.props.signOutChangedState();
 this.props.history.push('/');
}

 render() {
   return (
     <div>
     <button
       className='danger'
       onClick={() => this.signOut()}

       >
       Sign Out
     </button>

     </div>

   );
 }
}

export default Home;
