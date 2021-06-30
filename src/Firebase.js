import firebase from 'firebase';


// firebase firestore database api keys and connection properties
const firebaseConfig = {
  apiKey: "AIzaSyBZJU9sLJxjiAV0fRN5tvL3ho4UPF-z6U0",
  authDomain: "facebook-clone-91cd5.firebaseapp.com",
  projectId: "facebook-clone-91cd5",
  storageBucket: "facebook-clone-91cd5.appspot.com",
  messagingSenderId: "1004729886986",
  appId: "1:1004729886986:web:a7a134d0c9e2d72396f2f3",
  measurementId: "G-4P327HPHZS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);   //initialize our api key and database schema from firebase

const DB = firebaseApp.firestore();   //create a database from firebase firestore

const auth = firebase.auth();   //authorize users using firebase auth

const provider = new firebase.auth.GoogleAuthProvider();  //let google be our firebase authorization

//exports our modules
export { auth, provider };
export default DB;