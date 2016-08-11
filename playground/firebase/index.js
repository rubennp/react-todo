import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDzYK33SHcs4j_L4oflILPdZyUNAmudci8",
    authDomain: "todo-app-d0bc4.firebaseapp.com",
    databaseURL: "https://todo-app-d0bc4.firebaseio.com",
    storageBucket: "todo-app-d0bc4.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

// firebaseRef.set({
//   app: {
//     name: 'Todo App',
//     version: '1.0.0'
//   },
//   isRunning: true,
//   user: {
//     name: 'Rubèn',
//     age: 38
//   }
// });

var todosRef = firebaseRef.child('todos');
console.log(todosRef);

// todosRef.on('child_added', (snapshot) => {
//   console.log('firebase: child_added', snapshot.key, snapshot.val());
// });
//
// todosRef.push({
//   text: 'Walk the dog'
// });
//
// todosRef.push({
//   text: 'Go for a Run'
// });

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child_added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Walk the dog'
// });
//
// newNoteRef.set({
//   text: 'Walk the dog!'
// });
//
// console.log('Todo id: ', newNoteRef.key);

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('firebase: Got value', snapshot.val());
// });
//
// firebaseRef.update({
//   'user/name': 'Mike',
//   'app/name': 'Todo Application'
// });

// var logData = (snapshot) => {
//   console.log('firebase: Got value', snapshot.val());
// });

// firebaseRef.on('value', logData);

// firebaseRef.off();

// firebaseRef.update({isRunning: false});

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('firebase: Got ', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('firebase: Unable to fetch value', e)
// });

// firebaseRef.remove();

// firebaseRef.child('user/age').remove();

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'Mike'
// }).then(() => {
//   console.log('firebase: Update worked');
// }, (e) => {
//   console.log('Update failed');
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// }).then(() => {
//   console.log('firebase: Update worked');
// }, (e) => {
//   console.log('Update failed');
// });
//
// firebaseRef.child('user').update({
//   name: 'Mike'
// }).then(() => {
//   console.log('firebase: Update worked');
// }, (e) => {
//   console.log('Update failed');
// });
