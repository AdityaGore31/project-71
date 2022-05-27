import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyB7HjNle8QOGgqHfVxu88pLibKKgiVi-kA",
    authDomain: "project-71-5f185.firebaseapp.com",
    projectId: "project-71-5f185",
    storageBucket: "project-71-5f185.appspot.com",
    messagingSenderId: "607239046005",
    appId: "1:607239046005:web:56659ac4229b4fccaa893c"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
