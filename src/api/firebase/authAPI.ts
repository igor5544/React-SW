import firebase from 'firebase';
import { db } from './firebase';

const mainRequest = db.collection('users');

/** Api for login and registrate users */
export const authAPI = {
  /** Get user data */
  getUser(email: string): Promise<firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>> {
    return mainRequest
    .doc(email.toLowerCase()).get().then(response =>
      response
    )
  },
  /** Add new user */
  setUser(email: string, password: string): Promise<boolean> {
    return mainRequest
    .doc(email.toLowerCase()).set({ email, password }).then(() =>
      true
    )
  }
}
