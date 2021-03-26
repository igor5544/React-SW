import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { getActiveStarshipsList, clearStarshipsData } from '../../../redux/starships/dispatchers';
import { StarshipsInfo } from './StarshipsInfo';
import { getStarshipsKeys } from '../../../redux/films/selectors';
import { Starship } from '../../../api/models/starship';
import { getAllbyKeysSubToggle } from '../../../utils/getAllByKeys';
import { RootState } from '../../../redux/redux-store';
import { getActiveStarshipsList as getActiveStarshipsListSelect } from '../../../redux/starships/selectors';

/** Props interface */
interface Props {
  /** Starships keys */
  starshipsKeys?: string[];
  /** Clear active starships data */
  clearStarshipsData: () => void;
  /** Starships */
  starships: Starship[];
}

/** Get starships list */
const StarshipsAPIComponent: React.FC<Props> = ({ starshipsKeys, clearStarshipsData, starships }) => {
  const dispatch = useDispatch();

  useEffect((): any => {
    clearStarshipsData();

    let unsubscribes = () => { };

    if (starshipsKeys) {
      unsubscribes = getAllbyKeysSubToggle(starshipsKeys, getActiveStarshipsList, dispatch);
    }

    return unsubscribes;
  }, [starshipsKeys]);

  return <StarshipsInfo starships={starships} />
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  starshipsKeys: getStarshipsKeys(state),
  starships: getActiveStarshipsListSelect(state),
});

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  clearStarshipsData,
}

/** Set props and thunks form store */
export const StarshipsInfoCont = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(StarshipsAPIComponent);
