import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBwyVYufOEVbNJzHJKxAWHCtSMNz-37sgs",
    authDomain: "thepoolmanager-cccf1.firebaseapp.com",
    databaseURL: "https://thepoolmanager-cccf1.firebaseio.com",
    projectId: "thepoolmanager-cccf1",
    storageBucket: "thepoolmanager-cccf1.appspot.com",
    messagingSenderId: "1025093976449"
  };

const firebaseApp = firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebaseApp
}
