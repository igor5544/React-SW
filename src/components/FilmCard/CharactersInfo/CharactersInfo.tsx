import React from 'react';
import { CardContent, List } from '@material-ui/core';
import { Characters } from '../../../api/models/characters';
import styles from '../shared/listInfoTab.module.css';
import { CharacterItem } from './CharacterItem';

/** Props interface */
interface Props {
  /** Characters */
  characters: Characters[];
}

/** Characters info componet */
export const CharactersInfo: React.FC<Props> = ({ characters }) => {
  /** Create characters list */
  const charactersItems = characters.map((person) => (
    <CharacterItem key={person.id} character={person} />
  ));

  return (
    <CardContent>
      <List className={styles.cardsList}>
        {charactersItems}
      </List>
    </CardContent >
  )
}
