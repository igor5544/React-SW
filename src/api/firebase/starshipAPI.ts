import { db } from './firebase';

const mainRequest = db.collection('starships');

/** Api for starships */
export const starshipAPI = {
  /** Get all starships request */
  getFullStarships() {
    return mainRequest;
  },
  /** Get starships by PK request */
  getStarshipsByPersKeys(persKeys: string[]) {
    return mainRequest.where('pk', 'in', persKeys);
  }
}
