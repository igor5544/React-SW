import { db } from './firebase';

const mainRequest = db.collection('species');

/** Api for species */
export const speciesAPI = {
  /** Get all species request */
  getFullSpecies() {
    return mainRequest;
  },
  /** Get species by PK request */
  getSpeciesByPersKeys(persKeys: string[]) {
    return mainRequest.where('pk', 'in', persKeys);
  }
}
