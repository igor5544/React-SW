import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { compose } from 'redux';
import { Film } from '../../api/models/film';
import { deleteFilm, getFilmById } from '../../redux/films/dispatchers';
import { getActiveFilm } from '../../redux/films/selectors';
import { RootState } from '../../redux/redux-store';
import { FilmCard } from './FilmCard';

/** Props from url params */
interface UrlProps {
  /** Id */
  id: string;
}

/** Props interface */
interface Props extends RouteComponentProps<UrlProps> {
  /** Film */
  film: Film;
  /** Delete film func */
  deleteFilm: (id: string) => void;
}

/** Get active film */
const FilmCardAPIComponent: React.FC<Props> = ({ film, deleteFilm }) => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => (
    getFilmById(id, dispatch)
  ), [id]);

  return <FilmCard deleteFilm={deleteFilm} film={film} />
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  film: getActiveFilm(state),
});

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  deleteFilm,
}

/** Set props and thunks form store */
export const FilmCardCont = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(FilmCardAPIComponent);
