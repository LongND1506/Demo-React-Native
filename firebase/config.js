import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCx7-fIC7TgswQJ225Po5XSyuxZFlDv_94',
  authDomain: 'saving-money-cf83e.firebaseapp.com',
  databaseURL: 'https://saving-money-cf83e.firebaseio.com',
  projectId: 'saving-money-cf83e',
  storageBucket: 'saving-money-cf83e.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: '1:745040901085:android:748c074e40633c5ae53c34',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
