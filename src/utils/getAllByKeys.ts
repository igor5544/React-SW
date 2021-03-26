import { Unsubscribe } from 'redux';
import { Dispatch } from 'react';

/** One portion items limit */
const PORTION_LIMIT = 10;

/** Crate one list form portions */
export const getAllbyKeysSubToggle = (
  keys: string[],
  getItems: (persKeys: string[], dispatch: Dispatch<any>) => () => void,
  dispatch: Dispatch<any>,
): () => void => {
  const subscribes: Unsubscribe[] = [];
  const keysCount = keys.length;
  const portions = Math.ceil(keysCount / PORTION_LIMIT);
  let keyPortion: string[] = [];

  /** Get all portions (maximum firestore request by array size = 10 items) */
  for (let i = 0; i < portions; i++) {
    const firstPortionItem = i * PORTION_LIMIT;
    let lastPortionItem = firstPortionItem + PORTION_LIMIT;
    lastPortionItem = lastPortionItem > keysCount ? keysCount : lastPortionItem;

    /** Portion keys */
    keyPortion = keys.slice(firstPortionItem, lastPortionItem);

    /** Get items portion */
    subscribes.push(getItems(keyPortion, dispatch));
  }

  /** Return unsubscribes function */
  return (): void => {
    subscribes.map((sub) => sub());
  }
}
