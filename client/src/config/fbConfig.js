      import firebase from 'firebase/app';
      // import 'firebase/firestore';
      import 'firebase/auth';
      
      
      // Your web app's Firebase configuration
      var firebaseConfig = {
        apiKey: "AIzaSyBMjrAi9BlTddfxietdgeYqGVQn07HxZH4",
        authDomain: "relay-393e8.firebaseapp.com",
        databaseURL: "https://relay-393e8.firebaseio.com",
        projectId: "relay-393e8",
        storageBucket: "",
        messagingSenderId: "918066751727",
        appId: "1:918066751727:web:029a3c7a4168b3c2"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);


// This stuff is from firebase, but was not in the tutorial; not sure if we need it...
      // firebase
      // .auth()
      // .createUserWithEmailAndPassword(email, password)
      // .catch(function(error) {
      //   // Handle Errors here.
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   // ...
      // });

      export default firebase;