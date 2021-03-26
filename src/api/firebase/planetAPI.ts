import { getDataRequest } from '../../utils/getDataRequest';
import { MainRequest } from '../models/firebase';
import { PaginationSettings } from '../models/paginationSettings';
import { SearchSettings } from '../models/searchSettings';
import { db } from './firebase';

const mainRequest = db.collection('planets');

/** Api for planets */
export const planetAPI = {
  /** Get planets request */
  getPlanets(
    searchSettings: SearchSettings,
    paginationSettings: PaginationSettings,
  ): MainRequest {
    return getDataRequest(searchSettings, paginationSettings, mainRequest, 'name');
  },
  /** Get planet by id request */
  getPlanetById(id: string) {
    return mainRequest.doc(id);
  },
  /** Get planet by PK request */
  getPlanetByPk(pk: string) {
    return mainRequest.where('pk', '==', pk);
  },
  /** Get all planets request */
  getFullPlanets() {
    return mainRequest;
  },
  /** Get planets by PK request */
  getPlanetsByPersKeys(persKeys: string[]) {
    return mainRequest.where('pk', 'in', persKeys);
  }
}
