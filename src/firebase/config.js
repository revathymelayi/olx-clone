import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import 'firebase/compat/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAC1oGuBW1S-VRgjzaHEehm8GjPEJRxUkE",
    authDomain: "fir-3134a.firebaseapp.com",
    projectId: "fir-3134a",
    storageBucket: "fir-3134a.appspot.com",
    messagingSenderId: "169798861143",
    appId: "1:169798861143:web:5d0c0e5a67277561e63e12",
    measurementId: "G-J8KD2JC8MR"
  };

  export default firebase.initializeApp(firebaseConfig);

  