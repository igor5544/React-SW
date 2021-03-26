import React from 'react';
import { CardContent, List } from '@material-ui/core';
import { Species } from '../../../api/models/species';
import styles from '../shared/listInfoTab.module.css';
import { SpeciesItem } from './SpeciesItem';

/** Props interface */
interface Props {
  /** Species */
  species: Species[];
}

/** Cpecies info component */
export const SpeciesInfo: React.FC<Props> = ({ species }) => {
  /** Cpecies list */
  const speciesItems = species.map((speciesItem) => (
    <SpeciesItem key={speciesItem.id} speciesItem={speciesItem}/>
    ));

  return (
    <CardContent>
      <List className={styles.cardsList}>
        {speciesItems}
      </List>
    </CardContent >
  )
}
