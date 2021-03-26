import React from 'react';
import { Route } from 'react-router-dom';
import { Characters } from '../../api/models/characters';
import { CharactersCardCont } from '../CharactersCard';
import { CharactersList } from '../CharactersList';

/** Props interface */
interface Props {
  /** Characters */
  characters: Characters[];
  /** Get next characters func */
  getNextCharacters: () => void;
  /** Fetching condition */
  isFetching: boolean;
  /** Last portion condition */
  isLastPortion: boolean;
  /** Set search string function */
  setSearchStr: (string: string) => void;
  /** Set sort category func */
  setSortCategory: (category: string) => void;
  /** Set sort direction func */
  setSortDirection: (direction: string) => void;
}

/** Characters page component */
export const CharactersPage: React.FC<Props> = (props) => (
  <div className="main-page">
    <div className="main-page-bar">
      <CharactersList {...props} />
    </div>

    <div className="main-page-content">
      <Route component={CharactersCardCont} path="/characters/:id" />
    </div>
  </div>
)
