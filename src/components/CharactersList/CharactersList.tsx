import { Card, Drawer, List, ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Characters } from '../../api/models/characters';
import { Loader } from '../common/Loader';
import { SearchPanel } from '../SearchPanel';
import { SortControls } from '../SortControls';
import styles from './CharactersList.module.css';

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

/** Characters list component */
export const CharactersList: React.FC<Props> = ({
  characters,
  getNextCharacters,
  isFetching,
  isLastPortion,
  setSearchStr,
  setSortCategory,
  setSortDirection,
}) => {
  /** Categories for sorting */
  const charactersCategories: (keyof Characters)[] = [
    'name',
    'birth',
    'eyes',
    'gender',
    'hair',
    'height',
    'home',
    'mass',
    'skin',
  ];
  /** Condition for sidebar */
  const [barIsOpen, setBarIsOpen] = useState(false);

  /** Toggle sidebar condition */
  const switchBar = (): void => {
    setBarIsOpen(!barIsOpen);
  }

  /** Close siderbar */
  const closeBar = (): void => {
    setBarIsOpen(false);
  }

  /** Handle scrolling for get next protion */
  function handleScrollList(evt: React.UIEvent<HTMLElement>) {
    const scrollBottom = evt.currentTarget.scrollTop +
      evt.currentTarget.offsetHeight === evt.currentTarget.scrollHeight;

    if (scrollBottom && !isLastPortion) {
      getNextCharacters();
    }
  }

  const loader = isFetching && <Loader />;

  /** Create films list */
  const charactersItems = characters.map((person) => (
    <ListItem key={person.id}>
      <NavLink
        activeClassName="card-link-active"
        className="card-link"
        to={`/characters/${person.id}`}
      >
        <Card className="card-item">
          <h2 className="second-title">{person.name}</h2>
          <p>{person.gender}</p>
        </Card>
      </NavLink>
    </ListItem>
  ));

  return (
    <>
      <h1 className="title" >Characters</h1>

      <SearchPanel setSearchStr={setSearchStr} switchBar={switchBar} />

      <div className="list-wrapper">

        <List className={`cards-list ${styles.list}`} onScroll={handleScrollList}>
          {charactersItems}
          {loader}
        </List>

      </div>

      <Drawer anchor="left" open={barIsOpen} variant="persistent" >
        <SortControls
          categories={charactersCategories}
          closeBar={closeBar}
          setSortCategory={setSortCategory}
          setSortDirection={setSortDirection}
        />
      </Drawer>
    </>
  )
}
