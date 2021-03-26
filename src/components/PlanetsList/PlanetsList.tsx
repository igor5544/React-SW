import { Drawer, List, Card, ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Planet } from '../../api/models/planet';
import { Loader } from '../common/Loader';
import { SearchPanel } from '../SearchPanel';
import { SortControls } from '../SortControls';
import styles from './PlanetsList.module.css'

/** Props interface */
interface Props {
  /** Planets */
  planets: Planet[];
  /** Get next planets list */
  getNextPlanets: () => void;
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

/** Planets list component */
export const PlanetsList: React.FC<Props> = ({
  planets,
  getNextPlanets,
  isFetching,
  isLastPortion,
  setSearchStr,
  setSortCategory,
  setSortDirection,
}) => {
  /** Categories for sorting */
  const planetsCategories: (keyof Planet)[] = [
    'name',
    'climate',
    'diameter',
    'gravity',
    'orbitalPeriod',
    'population',
    'rotationPeriod',
    'water',
    'terrain',
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
      getNextPlanets();
    }
  }

  const loader = isFetching && <Loader />;

  /** Create planets list */
  const planetsItems = planets.map((planet) => (
    <ListItem key={planet.id}>
      <NavLink
        activeClassName="card-link-active"
        className="card-link"
        to={`/planets/${planet.id}`}
      >
        <Card className="card-item">
          <h2 className="second-title">{planet.name}</h2>
          <p>{planet.climate}</p>
        </Card>
      </NavLink>
    </ListItem>
  ));

  return (
    <>
      <h1 className="title">Planets</h1>

      <SearchPanel setSearchStr={setSearchStr} switchBar={switchBar} />

      <div className="list-wrapper">

        <List className={`cards-list ${styles.list}`} onScroll={handleScrollList}>
          {planetsItems}
          {loader}
        </List>

      </div>

      <Drawer
        anchor="left"
        open={barIsOpen}
        variant="persistent"
      >
        <SortControls
          categories={planetsCategories}
          closeBar={closeBar}
          setSortCategory={setSortCategory}
          setSortDirection={setSortDirection}
        />
      </Drawer>
    </>
  )
}
