import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBx4r2S5KKypiQVJ4nU_L977PHXHQgNjLs",
    authDomain: "musicfy-6bb8b.firebaseapp.com",
    databaseURL: "https://musicfy-6bb8b-default-rtdb.firebaseio.com",
    projectId: "musicfy-6bb8b",
    storageBucket: "musicfy-6bb8b.appspot.com",
    messagingSenderId: "167654609037",
    appId: "1:167654609037:web:a47cab4e3ae1026c2dd2c4"
  };

  export default firebase.initializeApp(firebaseConfig);