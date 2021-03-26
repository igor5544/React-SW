import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { Characters } from '../../../api/models/characters';
import { getActiveCharactersList as charactersListSelector } from '../../../redux/characters/selectors';
import { getActiveCharactersList } from '../../../redux/characters/dispatchers';
import { clearCharactersData } from '../../../redux/films/dispatchers';
import { getCharactersKeys } from '../../../redux/films/selectors';
import { RootState } from '../../../redux/redux-store';
import { getAllbyKeysSubToggle } from '../../../utils/getAllByKeys';
import { CharactersInfo } from './CharactersInfo';

/** Props interface */
interface Props {
  /** Characters keys */
  charactersKeys?: string[];
  /** Clear active characters data */
  clearCharactersData: () => void;
  /** Characters */
  characters: Characters[];
}

/** Get characters list */
const CharactersAPIComponent: React.FC<Props> = ({ charactersKeys, clearCharactersData, characters }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    clearCharactersData();

    let unsubscribes = () => { };

    if (charactersKeys) {
      unsubscribes = getAllbyKeysSubToggle(charactersKeys, getActiveCharactersList, dispatch);
    }

    return unsubscribes;
  }, [charactersKeys]);

  return <CharactersInfo characters={characters} />
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  charactersKeys: getCharactersKeys(state),
  characters: charactersListSelector(state),
});

/** Get thunk from dispatcher */
const mapDispatchToProps = {
  clearCharactersData,
}

/** Set props and thunks form store */
export const CharactersInfoCont = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(CharactersAPIComponent);
