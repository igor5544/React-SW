import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect, useDispatch } from 'react-redux';
import { getActiveSpeciesList, clearSpeciesData } from '../../../redux/species/dispatchers';
import { SpeciesInfo } from './SpeciesInfo';
import { getSpeciesKeys } from '../../../redux/films/selectors';
import { Species } from '../../../api/models/species';
import { getAllbyKeysSubToggle } from '../../../utils/getAllByKeys';
import { RootState } from '../../../redux/redux-store';
import { getActiveSpeciesList as getActiveSpeciesListSelect } from '../../../redux/species/selectors';

/** Props interface */
interface Props {
  /** Species keys */
  speciesKeys?: string[];
  /** Clear active species data */
  clearSpeciesData: () => void;
  /** Species */
  species: Species[];
}

/** Get species list */
const SpeciesAPIComponent: React.FC<Props> = ({ speciesKeys, clearSpeciesData, species }) => {
  const dispatch = useDispatch();

  useEffect((): any => {
    clearSpeciesData();

    let unsubscribes = () => { };

    if (speciesKeys) {
      unsubscribes = getAllbyKeysSubToggle(speciesKeys, getActiveSpeciesList, dispatch);
    }

    return unsubscribes;
  }, [speciesKeys]);

  return <SpeciesInfo species={species} />
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  speciesKeys: getSpeciesKeys(state),
  species: getActiveSpeciesListSelect(state),
});

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  clearSpeciesData,
}

/** Set props and thunks form store */
export const SpeciesInfoCont = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(SpeciesAPIComponent);
