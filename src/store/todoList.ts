import {atom} from 'jotai';
import {todosAtom} from './shared';
import {Filter} from '../types/filter';

export const completedTodosAtom = atom(
    (get) => get(todosAtom).filter((t) => t.completed),
);
export const activeTodosAtom = atom(
    (get) => get(todosAtom).filter((t) => !t.completed),
);
export const filterAtom = atom<Filter>(Filter.ALL);
export const filteredTodosAtom = atom(
    (get) => {
      const filter = get(filterAtom);
      switch (filter) {
        case Filter.ALL:
          return get(todosAtom);
        case Filter.COMPLETED:
          return get(completedTodosAtom);
        case Filter.ACTIVE:
          return get(activeTodosAtom);
      }
    },
);
