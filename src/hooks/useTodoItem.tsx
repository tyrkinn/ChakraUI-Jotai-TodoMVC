import {useAtom} from 'jotai';
import {todosAtom} from 'store/shared';

export const useTodoItem = (id: number) => {
  const [, setTodos] = useAtom(todosAtom);

  const deleteTodo = () =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const completeTodo = () =>
    setTodos((p) => p.map((t) => t.id === id ? {...t, completed: true} : t));

  return {
    deleteTodo,
    completeTodo,
  };
};
