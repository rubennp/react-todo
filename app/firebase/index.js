import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDzYK33SHcs4j_L4oflILPdZyUNAmudci8",
      authDomain: "todo-app-d0bc4.firebaseapp.com",
      databaseURL: "https://todo-app-d0bc4.firebaseio.com",
      storageBucket: "todo-app-d0bc4.appspot.com",
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
