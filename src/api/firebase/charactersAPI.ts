import { getDataRequest } from '../../utils/getDataRequest';
import { MainRequest } from '../models/firebase';
import { PaginationSettings } from '../models/paginationSettings';
import { SearchSettings } from '../models/searchSettings';
import { db } from './firebase';

const mainRequest = db.collection('people');

/** Api for characters */
export const charactersAPI = {
  /** Get characters request */
  getCharacters(
    searchSettings: SearchSettings,
    paginationSettings: PaginationSettings,
  ): MainRequest {
    return getDataRequest(searchSettings, paginationSettings, mainRequest, 'name');
  },
  /** Get characters by id request */
  getCharactersById(id: string) {
    return mainRequest.doc(id);
  },
  /** Get all characters request */
  getFullCharacters() {
    return mainRequest;
  },
  /** Get characters by PK request */
  getCharactersByPersKeys(persKeys: string[]) {
    return mainRequest.where('pk', 'in', persKeys);
  }
}
