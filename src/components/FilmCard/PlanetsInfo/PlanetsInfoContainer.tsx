import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { PlanetsInfo } from './PlanetsInfo';
import { getPlanetsKeys } from '../../../redux/films/selectors';
import { Planet } from '../../../api/models/planet';
import { getAllbyKeysSubToggle } from '../../../utils/getAllByKeys';
import { RootState } from '../../../redux/redux-store';
import { getActivePlanetsList as planetsListSelector } from '../../../redux/planets/selectors';
import { getActivePlanetsList, clearPlanetsData } from '../../../redux/planets/dispatchers';

/** Props interface */
interface Props {
  /** Planets keys */
  planetsKeys?: string[];
  /** Clear active planets data */
  clearPlanetsData: () => void;
  /** Planets */
  planets: Planet[];
}

/** Get planets list */
const PlanetsAPIComponent: React.FC<Props> = ({ planetsKeys, clearPlanetsData, planets }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    clearPlanetsData();

    let unsubscribes = () => { };

    if (planetsKeys) {
      unsubscribes = getAllbyKeysSubToggle(planetsKeys, getActivePlanetsList, dispatch);
    }

    return unsubscribes;
  }, [planetsKeys]);

  return <PlanetsInfo planets={planets} />;
};

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  planetsKeys: getPlanetsKeys(state),
  planets: planetsListSelector(state),
});

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  clearPlanetsData,
};

/** Set props and thunks form store */
export const PlanetsInfoCont = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(PlanetsAPIComponent);
