import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { Planet } from '../../api/models/planet';
import { PlanetInfo } from './PlanetInfo';
import { getHomeWorldPk } from '../../redux/characters/selectors';
import { RootState } from '../../redux/redux-store';
import { getPlanetByPk } from '../../redux/planets/dispatchers';
import { getActivePlanet } from '../../redux/planets/selectors';

/** Props interface */
interface Props {
  /** Planet */
  planet: Planet;
  /** Planet key */
  planetKey: string;
}

/** Get planet data */
const PlanetAPIComponent: React.FC<Props> = ({ planet, planetKey }) => {
  const dispatch = useDispatch();

  useEffect((): any => {
    let unsubscribes = () => { };

    if (planetKey) {
      unsubscribes = getPlanetByPk(planetKey, dispatch);
    }

    return unsubscribes;
  }, [planetKey])

  return <PlanetInfo planet={planet} />
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  planet: getActivePlanet(state),
  planetKey: getHomeWorldPk(state),
});

/**  Set props and thunks form store */
export const PlanetInfoCont = compose(
  connect(mapStateToProps)
)(PlanetAPIComponent);
