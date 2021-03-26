import React from 'react';
import { CardContent, ListItem, List } from '@material-ui/core';
import { Vehicle } from '../../../api/models/vehicle';
import styles from '../shared/listInfoTab.module.css';

/** Props interface */
interface Props {
  /** Vehicles */
  vehicles: Vehicle[];
}

/** Vehicle info component */
export const VehiclesInfo: React.FC<Props> = ({ vehicles }) => {
  /** Create vehicle list */
  const vehiclesItems = vehicles.map((vehicle) => (
    <ListItem key={vehicle.pk} className={styles.itemCard} >
      <h2>
        {vehicle.class} {vehicle.pk}
      </h2>
    </ListItem >
  ));

  return (
    <CardContent>
      <List className={styles.cardsList}>
        {vehiclesItems}
      </List>
    </CardContent >
  )
}
