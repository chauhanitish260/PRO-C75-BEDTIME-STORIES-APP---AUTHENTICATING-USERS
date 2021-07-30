import firebase from 'firebase';
require('@firebase/firestore');

 const firebaseConfig = {
    apiKey: "AIzaSyDvVJ1NO67ru0ierTLPS0MtcPn3ztyF-nQ",
    authDomain: "stories-search-functionality.firebaseapp.com",
    projectId: "stories-search-functionality",
    storageBucket: "stories-search-functionality.appspot.com",
    messagingSenderId: "352623977609",
    appId: "1:352623977609:web:0904e151e5dc1550aed258"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
