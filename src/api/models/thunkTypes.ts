import { Dispatch } from 'redux';
import { SortDirection } from './firebase';

export type VoidThunk = () =>
  (dispatch: Dispatch<any>) => void;

export type AsyncVoidThunk = () =>
  (dispatch: Dispatch<any>) => Promise<void>;

export type SortDirectionThunk = (sortDirection: SortDirection) =>
  (dispatch: Dispatch<any>) => void;

export type SortCategoryThunk = (sortCategory: string) =>
  (dispatch: Dispatch<any>) => void;

export type SearchThunk = (searchStr: string) =>
  (dispatch: Dispatch<any>) => void;

export type GetByIdThunk = (id: string, dispatch: Dispatch<any>) =>
  () => void;

export type GetByPkThunk = (pk: string, dispatch: Dispatch<any>) =>
  () => void;
