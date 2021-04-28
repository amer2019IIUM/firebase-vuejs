  import firebase from 'firebase'
  import firestore from 'firebase/firestore'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCMY_KWG1GDTYsV2glkwyM_ri0INjroIiE",
    authDomain: "udemy-ninja-c0d3b.firebaseapp.com",
    projectId: "udemy-ninja-c0d3b",
    storageBucket: "udemy-ninja-c0d3b.appspot.com",
    messagingSenderId: "7094791590",
    appId: "1:7094791590:web:7f857c968b78b75fa6b367"
  };
  // Initialize Firebase
 const firebaseApp= firebase.initializeApp(firebaseConfig);
 firebaseApp.firestore().settings({timestampsInSnapshots:true})

 export default firebaseApp.firestore()