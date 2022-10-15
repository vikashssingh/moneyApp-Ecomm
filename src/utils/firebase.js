import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBo7mHoCONaCfC48_H6vRaaFKp2aLmZemk",
    authDomain: "clone-ba948.firebaseapp.com",
    projectId: "clone-ba948",
    storageBucket: "clone-ba948.appspot.com",
    messagingSenderId: "498545950691",
    appId: "1:498545950691:web:776db79a29345f06ceead6"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();

  const auth = firebase.auth();

  export {db,auth};