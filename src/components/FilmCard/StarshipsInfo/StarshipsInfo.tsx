import React from 'react';
import { CardContent, ListItem, List } from '@material-ui/core';
import { Starship } from '../../../api/models/starship';
import styles from '../shared/listInfoTab.module.css';
import { StarshipItem } from './StarshipItem';

/** Props interface */
interface Props {
  /** Starships */
  starships: Starship[];
}

/** Starships info component */
export const StarshipsInfo: React.FC<Props> = ({ starships }) => {
  /** Create starships list */
  const starshipsItems = starships.map((starship) => (
    <StarshipItem key={starship.id} starship={starship} />
  ));

  return (
    <CardContent>
      <List className={styles.cardsList}>
        {starshipsItems}
      </List>
    </CardContent >
  )
}
