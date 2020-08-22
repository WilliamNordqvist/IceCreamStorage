import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyCNIhTIlzdeG16gQq_f3joXfZFxtVwUddw",
  authDomain: "storage-fb5f3.firebaseapp.com",
  databaseURL: "https://storage-fb5f3.firebaseio.com",
  projectId: "storage-fb5f3",
  storageBucket: "storage-fb5f3.appspot.com",
  messagingSenderId: "900590617987",
  // appId: "1:900590617987:web:1fa6ce67e5b1f9d76d22b6"
};
firebase.initializeApp(config);
export default firebase;