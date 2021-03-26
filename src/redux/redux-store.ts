import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { AppState, appReducer } from './app/reducer';
import { AuthState, authReducer } from './auth/reducer';
import { CharactersState, charactersReducer } from './characters/reducer';
import { FilmsState, filmsReducer } from './films/reducer';
import { PlanetsState, planetsReducer } from './planets/reducer';
import { SpeciesStater, speciesReducer } from './species/reducer';
import { StarshipsState, starshipsReducer } from './starships/reducer';
import { VehiclesState, vehiclesReducer } from './vehicles/reducer';

/** Main reducer */
const rootReducer = combineReducers({
  initial: appReducer,
  films: filmsReducer,
  characters: charactersReducer,
  planets: planetsReducer,
  species: speciesReducer,
  vehicles: vehiclesReducer,
  starships: starshipsReducer,
  auth: authReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    store?: any;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/** Main store */
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

/** Global state interface */
export interface RootState {
  /** Initila app state */
  initial: AppState,
  /** Films state */
  films: FilmsState,
  /** Characters state */
  characters: CharactersState,
  /** Planets state */
  planets: PlanetsState,
  /** Vehicles state */
  species: SpeciesStater,
  /** Vehicles state */
  vehicles: VehiclesState,
  /** Starships state */
  starships: StarshipsState,
  /** Auth state */
  auth: AuthState,
}
