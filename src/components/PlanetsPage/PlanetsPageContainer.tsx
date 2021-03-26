import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { PaginationSettings } from '../../api/models/paginationSettings';
import { Planet } from '../../api/models/planet';
import { SearchSettings } from '../../api/models/searchSettings';
import { withAuthRedirect } from '../../hocs/withAuthRedirect';
import { withUnsubscribes } from '../../hocs/withUnsubscribes';
import {
  getNextPlanetsData,
  getPlanetsData,
  setSearchPlanet,
  setSortDirectionPlanets,
  setSortPlanets
} from '../../redux/planets/dispatchers';
import {
  getIsFetchingPlanets,
  getIsLastPortion,
  getPaginationSettings,
  getPlanets,
  getSearchSettings
} from '../../redux/planets/selectors';
import { RootState } from '../../redux/redux-store';
import { PlanetsPage } from './PlanetsPage';

/** Props interface */
interface Props {
  /** Planets */
  planets: Planet[];
  /** Fetching condition */
  isFetching: boolean;
  /** Pagination settings */
  paginationSettings: PaginationSettings;
  /** Add sub func */
  addSub: (sub: () => void) => void;
  /** Unsubscribe func */
  unsubscribes: () => void;
  /** Last portion condition */
  isLastPortion: boolean;
  /** Search settings */
  searchSettings: SearchSettings;
  /** Set search string function */
  setSearchStr: (string: string) => void;
  /** Set sort category func */
  setSortCategory: (category: string) => void;
  /** Set sort direction func */
  setSortDirection: (direction: string) => void;
}

/** Get planet data */
const PlanetsPageAPIComponent: React.FC<Props> = ({
  searchSettings,
  paginationSettings,
  addSub,
  unsubscribes,
  ...props
}) => {
  const dispatch = useDispatch();

  useEffect((): any => (
    getPlanetsData(searchSettings, paginationSettings, dispatch)
  ), [searchSettings]);

  useEffect(() => unsubscribes, []);

  /** Get next planet portion */
  const getNextPlanets = (): void => {
    const sub = getNextPlanetsData(searchSettings, paginationSettings, dispatch);

    addSub(sub);
  }

  return <PlanetsPage {...props} getNextPlanets={getNextPlanets} />
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  planets: getPlanets(state),
  isFetching: getIsFetchingPlanets(state),
  searchSettings: getSearchSettings(state),
  paginationSettings: getPaginationSettings(state),
  isLastPortion: getIsLastPortion(state),
})

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  setSearchStr: setSearchPlanet,
  setSortCategory: setSortPlanets,
  setSortDirection: setSortDirectionPlanets,
}

/**
 * Add auth redirect logc
 * Ad unsubscribes logic
 * Set props and thunks form store
 */
export const PlanetsPageCont = compose<React.FC>(
  withAuthRedirect,
  withUnsubscribes,
  connect(mapStateToProps, mapDispatchToProps)
)(PlanetsPageAPIComponent);
