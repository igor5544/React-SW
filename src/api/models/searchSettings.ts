import { SortDirection } from './firebase';

/** Search setting interfase */
export interface SearchSettings {
  /** Search string */
  searchStr: string;
  /** Sort category */
  sortCategory: string;
  /** Sort direction */
  direction: SortDirection;
}
