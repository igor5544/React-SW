import { SearchSettings } from '../models/searchSettings';
import { FilmDto } from '../dtos/film-dto';
import { PaginationSettings } from '../models/paginationSettings';
import { db } from './firebase';
import { EntityContainerDtoWithoutPk } from '../dtos/container-dto';
import { getDataRequest } from '../../utils/getDataRequest';
import { MainRequest } from '../models/firebase';

const mainRequest = db.collection('films');

/** Api for films */
export const filmsAPI = {
  /** Get film request */
  getFilms(
    searchSettings: SearchSettings,
    paginationSettings: PaginationSettings,
  ): MainRequest {
    return getDataRequest(searchSettings, paginationSettings, mainRequest, 'title');
  },
  /** Get film by id request */
  getFilmById(id: string) {
    return mainRequest.doc(id);
  },
  /** Add film request */
  addFilm(film: EntityContainerDtoWithoutPk<FilmDto>) {
    return mainRequest.add(film);
  },
  /** Edit film request */
  editFilm(film: EntityContainerDtoWithoutPk<FilmDto>, id: string): Promise<void> {
    return mainRequest.doc(id).set(film);
  },
  /** Delete film request */
  deleteFilm(id: string): Promise<void> {
    return mainRequest.doc(id).delete();
  }
}
