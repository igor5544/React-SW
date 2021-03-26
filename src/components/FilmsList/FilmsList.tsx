import { Drawer, List, Card, ListItem, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Film } from '../../api/models/film';
import { Loader } from '../common/Loader';
import { SearchPanel } from '../SearchPanel';
import { SortControls } from '../SortControls';

/** Props interface */
interface Props {
  /** Films */
  films: Film[];
  /** Get next films func */
  getNextFilms: () => void;
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

/** Films list component */
export const FilmsList: React.FC<Props> = ({
  films,
  getNextFilms,
  isFetching,
  isLastPortion,
  setSearchStr,
  setSortCategory,
  setSortDirection,
}) => {
  /** Categories for sorting */
  const filmCategories: (keyof Film)[] = [
    'title',
    'director',
    'opening',
    'producer',
    'release'
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
      getNextFilms();
    }
  }

  const loader = isFetching && <Loader />;

  /** Create films list */
  const filmsItems = films.map((film) => (
    <ListItem key={film.id}>
      <NavLink
        activeClassName="card-link-active"
        className="card-link"
        to={`/films/${film.id}`}
      >
        <Card className="card-item">
          <h2 className="second-title">{film.title}</h2>
          <p>{film.producer}</p>
        </Card>
      </NavLink>
    </ListItem>
  ));

  return (
    <>
      <h1 className="title" >Films</h1>

      <SearchPanel setSearchStr={setSearchStr} switchBar={switchBar} />

      <div className="list-wrapper">

        <List className="cards-list" onScroll={handleScrollList}>
          {filmsItems}
          {loader}
        </List>
      </div>

      <Button
        className="add-btn"
        color="secondary"
        component={NavLink}
        to="/films/form"
        variant="outlined"
        fullWidth
      >
        Add new film
        </Button>

      <Drawer anchor="left" open={barIsOpen} variant="persistent" >
        <SortControls
          categories={filmCategories}
          closeBar={closeBar}
          setSortCategory={setSortCategory}
          setSortDirection={setSortDirection}
        />
      </Drawer>
    </>
  )
}
