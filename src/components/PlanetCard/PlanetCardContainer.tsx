import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { compose } from 'redux';
import { Planet } from '../../api/models/planet';
import { getPlanetById } from '../../redux/planets/dispatchers';
import { getActivePlanet } from '../../redux/planets/selectors';
import { RootState } from '../../redux/redux-store';
import { PlanetCard } from './PlanetCard';

/** Props from url params */
interface UrlProps {
  /** Id */
  id: string;
}

/** Props interface */
interface Props extends RouteComponentProps<UrlProps> {
  /** Planet */
  planet: Planet;
}

/** Get planet data */
export const PlanetCardAPIComponent: React.FC<Props> = ({ planet }: any) => {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  useEffect(() => getPlanetById(id, dispatch), [id]);

  return <PlanetCard planet={planet} />
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  planet: getActivePlanet(state),
});

/**  Set props and thunks form store */
export const PlanetCardCont = compose(
  connect(mapStateToProps)
)(PlanetCardAPIComponent);
