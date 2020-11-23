import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDDM-tuFiHFQrd0uTj3aE8KQgSQ8FxVCqw",
    authDomain: "national-park-59ee0.firebaseapp.com",
    databaseURL: "https://national-park-59ee0.firebaseio.com",
    projectId: "national-park-59ee0",
    storageBucket: "national-park-59ee0.appspot.com",
    messagingSenderId: "993209218270",
    appId: "1:993209218270:web:dbc641911540fbac7cfe4f",
    measurementId: "G-4T052D5EN9"
  };

 const fire = firebase.initializeApp(config);
 export default fire; 