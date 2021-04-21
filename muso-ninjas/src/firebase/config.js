import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBnqfWJkDhxTaLfwTcC1wtcue8O81SPYqU",
  authDomain: "muso-ninjass.firebaseapp.com",
  projectId: "muso-ninjass",
  storageBucket: "muso-ninjass.appspot.com",
  messagingSenderId: "42535419450",
  appId: "1:42535419450:web:796a608e1feea1b9a7ff03"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

