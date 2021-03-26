import React from 'react';
import { Route } from 'react-router-dom';
import { Planet } from '../../api/models/planet';
import { PlanetCardCont } from '../PlanetCard';
import { PlanetsList } from '../PlanetsList';

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

/** Planet page component */
export const PlanetsPage: React.FC<Props> = (props) => (
  <div className="main-page">
    <div className="main-page-bar">
      <PlanetsList {...props} />
    </div>

    <div className="main-page-content">
      <Route component={PlanetCardCont} path="/planets/:id" />
    </div>
  </div>
)

