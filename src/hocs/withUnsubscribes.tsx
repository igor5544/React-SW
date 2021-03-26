import React from 'react';

/** Hoc for unsubscrives after close component */
export const withUnsubscribes = (Component: React.FC) => (props: any) => {
  /** Unsubscribes functions list */
  const subscribes: (() => void)[] = [];

  /** Function for unsubscribes */
  const unsubscribes = (): void => {
    subscribes.map((sub: () => void) => sub());
  }

  /** Add new unsubscribe function in list */
  const addSub = (sub: () => void): void => {
    subscribes.push(sub);
  }

  /** Return component with unsubscrives logic */
  return <Component addSub={addSub} unsubscribes={unsubscribes} {...props} />
}
