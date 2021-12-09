import firebase from 'firebase/compat/app'
const firebaseConfig = {
    apiKey: "AIzaSyArfN9UyRaqsLj_eg-hUZp1AUgbyXD_SGI",
    authDomain: "lostandfound-3c38d.firebaseapp.com",
    databaseURL: "https://lostandfound-3c38d-default-rtdb.firebaseio.com",
    projectId: "lostandfound-3c38d",
    storageBucket: "lostandfound-3c38d.appspot.com",
    messagingSenderId: "109506467183",
    appId: "1:109506467183:web:cd1ce2d246e666bb0d049a"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;