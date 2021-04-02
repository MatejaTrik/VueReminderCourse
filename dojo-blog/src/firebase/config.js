

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEIdzESOYUm_rTTG7AceyS6kjS6r2XAz4",
  authDomain: "udemy-vue-firebase-site-5b269.firebaseapp.com",
  projectId: "udemy-vue-firebase-site-5b269",
  storageBucket: "udemy-vue-firebase-site-5b269.appspot.com",
  messagingSenderId: "729059939388",
  appId: "1:729059939388:web:52e381c68a59178155df39"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp()

// export firestore
export default {projectFirestore,timestamp}