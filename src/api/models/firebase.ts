import firebase from 'firebase';

export type MainRequest = firebase.firestore.Query<firebase.firestore.DocumentData>;

export type SortDirection = 'desc' | 'asc';
