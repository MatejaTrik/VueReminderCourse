import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import 'firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDEIdzESOYUm_rTTG7AceyS6kjS6r2XAz4",
    authDomain: "udemy-vue-firebase-site-5b269.firebaseapp.com",
    projectId: "udemy-vue-firebase-site-5b269",
    storageBucket: "udemy-vue-firebase-site-5b269.appspot.com",
    messagingSenderId: "729059939388",
    appId: "1:729059939388:web:95205760a1aba29555df39"
  };

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectAuth, projectFirestore, timestamp }