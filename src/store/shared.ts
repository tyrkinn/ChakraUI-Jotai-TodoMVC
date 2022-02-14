import {atomWithStorage} from 'jotai/utils';
import {Todo} from '../types/todo';

export const todosAtom = atomWithStorage<Todo[]>('todos', []);
