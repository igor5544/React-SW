import { MainRequest } from '../api/models/firebase';
import { PaginationSettings } from '../api/models/paginationSettings';
import { SearchSettings } from '../api/models/searchSettings';


/** Create get data request */
export const getDataRequest = (
  { searchStr, sortCategory, direction }: SearchSettings,
  { limit, startAfterDoc }: PaginationSettings,
  mainRequest: MainRequest,
  searchField: string,
): MainRequest => {
  /** Default request */
  let request = mainRequest;

  /** Add orderBy to request */
  request = sortCategory ?
    request.orderBy(`fields.${sortCategory}`, direction) :
    request;

  /** Add search string to request */
  request = searchStr ?
    request.where(`fields.${searchField}`, '==', searchStr) : request;

  /** Add start after for get next data portion */
  request = startAfterDoc ?
    request.startAfter(startAfterDoc) : request;

  /** Returen full request */
  return request.limit(limit);
}
