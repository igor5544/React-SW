import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { compose } from 'redux';
import { Characters } from '../../api/models/characters';
import { getCharactersById } from '../../redux/characters/dispatchers';
import { getActiveCharacters } from '../../redux/characters/selectors';
import { RootState } from '../../redux/redux-store';
import { CharactersCard } from './CharactersCard';

/** Props from url params */
interface UrlProps {
  /** Id */
  id: string;
}

/** Props interface */
interface Props extends RouteComponentProps<UrlProps> {
  /** Peopple */
  characters: Characters;
}

/** Get characters data */
export const CharactersCardAPIComponent: React.FC<Props> = ({ characters }) => {
  const dispatch = useDispatch();
  const {id} = useParams<{ id: string }>();

  useEffect(() => (
    getCharactersById(id, dispatch)
  ), [id]);

  return <CharactersCard characters={characters} />
}

/** Get props from redux store */
const mapStateToProps = (state: RootState) => ({
  characters: getActiveCharacters(state),
});

/**  Set props and thunks form store */
export const CharactersCardCont = compose(
  connect(mapStateToProps)
)(CharactersCardAPIComponent);
