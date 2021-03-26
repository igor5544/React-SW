import React, { useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './SortControls.module.css';

/** Props interface */
interface Props {
  /** Close sidebar func */
  closeBar: () => void;
  /** Categories */
  categories: string[];
  /** Set sort category func */
  setSortCategory: (category: string) => void;
  /** Set sort direction func */
  setSortDirection: (direction: string) => void;
}

/** Sort controls component */
export const SortControls: React.FC<Props> = ({
  closeBar,
  categories,
  setSortCategory,
  setSortDirection,
}) => {
  /** Active category */
  const [category, setCategory] = useState('');
  /** Active direction */
  const [direction, setDirection] = useState('asc');

  useEffect(() => {
    setSortCategory(category);
  }, [category])

  useEffect(() => {
    setSortDirection(direction);
  }, [direction])

  /** Handle change category */
  const handleCategory = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setCategory(event.target.value as string);
  };

  /** Handle change direction */
  const handleDirection = (event: React.ChangeEvent<{ value: unknown }>): void => {
    setDirection(event.target.value as string);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <h3 className={styles.title}>Search settings</h3>
        <IconButton onClick={closeBar} >
          <ChevronLeftIcon />
        </IconButton>
      </div>

      <FormControl className={styles.control} color="secondary" fullWidth>
        <InputLabel>Sort categoty</InputLabel>
        <Select onChange={handleCategory} value={category} >
          {
            categories.map(categoryItem => (
              <MenuItem key={categoryItem} value={categoryItem}>
                {categoryItem}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>

      <FormControl color="secondary" fullWidth>
        <InputLabel>Sort direction</InputLabel>
        <Select onChange={handleDirection} value={direction}>
          <MenuItem value="asc">
            Ascending
          </MenuItem>
          <MenuItem value="desc">
            Descend
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
