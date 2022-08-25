import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



const firebaseConfig = {
   
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();


  export default db;