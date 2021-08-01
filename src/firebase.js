import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyCBN2lzPR_19I2LokPuIZ2T4D2DOPuWfFA",
  authDomain: "vintrade-4c883.firebaseapp.com",
  databaseURL: "https://vintrade-4c883.firebaseio.com",
  projectId: "vintrade-4c883",
  storageBucket: "vintrade-4c883.appspot.com",
  messagingSenderId: "995073542226",
  appId: "1:995073542226:web:78560c8a5afbe2f66b778b",
  measurementId: "G-Y8ZZD3W02L"
});
const auth=firebase.auth();//used for authorization like login and signup 
const provider=new firebase.auth.GoogleAuthProvider();//for google authentication this step is used
export {auth,provider};

