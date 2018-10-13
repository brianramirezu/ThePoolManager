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
      hello
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
