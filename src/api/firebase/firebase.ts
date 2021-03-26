import firebase from 'firebase';

/** Initializeate firebase */
firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJCET,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE,
  appId: process.env.REACT_APP_FIREBASE_APP
});

/** Export firebase */
export const db = firebase.firestore();
