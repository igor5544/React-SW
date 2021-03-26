import firebase from 'firebase';

/** Pagination setting interface */
export interface PaginationSettings {
  /** Items in one data portion */
  limit: number;
  /** Start after doc for get next portion data */
  startAfterDoc: firebase.firestore.QueryDocumentSnapshot | null;
}
