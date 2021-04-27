import firebase from "firebase";

//firebase app configuraion 

const firebaseConfig = {
    apiKey: "AIzaSyC6GIHOU6BZ75KEmMexFBaOc5kF7kPA5Cg",
    authDomain: "disney-plus-ab82e.firebaseapp.com",
    projectId: "disney-plus-ab82e",
    storageBucket: "disney-plus-ab82e.appspot.com",
    messagingSenderId: "696870854002",
    appId: "1:696870854002:web:64b9a7ba8d324b310991eb",
    measurementId: "G-LLFFVJ3CPT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export { auth, provider, storage };
  
  export default db;