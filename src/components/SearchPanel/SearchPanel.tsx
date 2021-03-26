import { Button, IconButton, Input } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import styles from './SearchPanel.module.css';

/** Props interface */
interface Props {
  /** Set search string function */
  setSearchStr: (string: string) => void;
  /** Toggle bar open condition */
  switchBar: () => void;
}


/** Search panel component */
export const SearchPanel: React.FC<Props> = ({setSearchStr, switchBar}) => {
  /** Search string value */
  const [searchValue, setSearchValue] = useState('');

  /** Change search string value */
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(evt.target.value);
  }

  /** Search by search string */
  const handleSearchBtn = (): void => {
    setSearchStr(searchValue);
  }

  return (
    <div className={styles.searchControls}>
      <div>
        <Input
          color="secondary"
          onChange={handleInputChange}
          placeholder="Some person.."
          type="search"
          value={searchValue}
        />
        <Button color="secondary" onClick={handleSearchBtn}>
          Search
      </Button>
      </div>
      <IconButton
        aria-label="open drawer"
        color="inherit"
        edge="start"
        onClick={switchBar}
      >
        <MenuIcon />
      </IconButton>
    </div>
  )
}
