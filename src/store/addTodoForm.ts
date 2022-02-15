import {atom} from 'jotai';
import {todosAtom} from 'store/shared';

export const lastIdAtom = atom(
    (get) => {
      const todos = get(todosAtom);
      return todos.at(todos.length - 1)?.id || 0;
    },
);

export const showFormErrorsAtom = atom(false);
