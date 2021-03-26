import firebase from 'firebase';
import { Dispatch } from 'react';

type GetFullData = (
  api: () => firebase.firestore.CollectionReference,
  mapper: (item: any, id: string) => any,
  action: (items: any[]) => void,
) =>
  (dispatch: Dispatch<any>) => void;

/** Thunc creator for get all data from base */
export const getFullDataCreator: GetFullData = (api, mapper, action) =>
  (dispatch) =>
    api().onSnapshot((response: any) => {
      const items: any[] = [];

      response.forEach((item: any) => {
        const { id } = item;
        const itemDto = item.data();
        items.push(mapper(itemDto, id));
      });

      dispatch(action(items));
    })
