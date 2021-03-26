/** Create new items list */
export const createNewItemsList = <T extends { id: string }>(oldItems: T[], newItems: T[]): T[] => {
  const items = [...oldItems];

  newItems.map(newItem => {
    /** Same item index */
    let changeItemIndex = 0;

    /** Check same items */
    const notUnicFilm = items.some((item, Inedex): boolean => {
      const sameId = item.id === newItem.id;

      /** Save same item index */
      if (sameId) {
        changeItemIndex = Inedex;
      }

      return sameId;
    });

    /** Update item */
    if (notUnicFilm) {
      items[changeItemIndex] = newItem;
      return null;
    }

    /** Add new item */
    return items.push(newItem);
  });

  return items;
}

/** Delete item from list */
export const deleteItem = <T extends { id: string }>(items: T[], id: string): T[] => {
  const newItems = [...items];

  newItems.forEach((item, i) => {
    if (item.id === id) {
      newItems.splice(i, i);
    }
  });

  return newItems;
}
