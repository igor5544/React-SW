import { Dispatch } from 'react';
import { MainRequest } from '../api/models/firebase';

type GetByKeyCreator = (
  api: (persKeys: string[]) => MainRequest,
  mapper: (item: any, id: string) => any,
  action: (items: any[]) => void,
) =>
  (persKeys: string[], dispatch: Dispatch<any>) => () => void;

/** Thunk creator for get by keys */
export const getByKeysCreator: GetByKeyCreator = (api, mapper, action) =>
  (persKeys, dispatch) =>
    api(persKeys).onSnapshot((response: any) => {
      const items: any[] = [];

      response.forEach((item: any) => {
        const { id } = item;
        const itemDto = item.data();
        items.push(mapper(itemDto, id));
      });

      /** Set request data */
      dispatch(action(items));
    });
