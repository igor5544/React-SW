import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { Film } from '../../api/models/film';
import { Characters } from '../../api/models/characters';
import { Planet } from '../../api/models/planet';
import { Species } from '../../api/models/species';
import { Starship } from '../../api/models/starship';
import { Vehicle } from '../../api/models/vehicle';
import { getFullStarships } from '../../redux/starships/dispatchers';
import { addNewFilm, editFilm } from '../../redux/films/dispatchers';
import { getFullStarshipsList } from '../../redux/starships/selectors';
import { getFullCharactersList } from '../../redux/characters/selectors';
import { getFullPlanetsList } from '../../redux/planets/selectors';
import { FilmForm } from './FilmForm';
import { RootState } from '../../redux/redux-store';
import { getFullCharacters } from '../../redux/characters/dispatchers';
import { getFullPlanet } from '../../redux/planets/dispatchers';
import { getFullVehiclesList } from '../../redux/vehicles/selectors';
import { getFullVehicle } from '../../redux/vehicles/dispatchers';
import { getFullSpeciesList } from '../../redux/species/selectors';
import { getFullSpecies } from '../../redux/species/dispatchers';

/** Props interface */
interface Props {
  /** Start values */
  startValues?: Film;
  /** Characters */
  characters: Characters[];
  /** Planet */
  planets: Planet[];
  /** Species */
  species: Species[];
  /** Starship */
  starships: Starship[];
  /** Vehicle */
  vehicles: Vehicle[];
  /** Add new film function */
  addNewFilm: (film: Film) => void;
  /** Edit film function */
  editFilm: (film: Film, id: string) => void;
}

/** Get items for film form */
export const FilmFormAPIComponent: React.FC<Props> = ({
  startValues,
  addNewFilm,
  editFilm,
  ...props
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getFullCharacters(dispatch);
    getFullPlanet(dispatch);
    getFullSpecies(dispatch);
    getFullStarships(dispatch);
    getFullVehicle(dispatch);
  }, []);

  return (
    <>
      {startValues && startValues.id &&
        <FilmForm onSaveFilm={editFilm} startValues={startValues} {...props} />
      }
      {!startValues && <FilmForm onSaveFilm={addNewFilm} {...props} />}
    </>
  )
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  characters: getFullCharactersList(state),
  planets: getFullPlanetsList(state),
  species: getFullSpeciesList(state),
  starships: getFullStarshipsList(state),
  vehicles: getFullVehiclesList(state)
});

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  addNewFilm,
  editFilm,
}

/** Set props and thunks form store */
export const FilmFormCont = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(FilmFormAPIComponent);
