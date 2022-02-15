import React, {useEffect} from 'react';
import {render, screen} from '@testing-library/react';
import {TodoItem} from './TodoItem';
import {List} from '@chakra-ui/react';
import '@testing-library/jest-dom';
import {todosAtom} from '../../store/shared';
import {useAtom} from 'jotai';
import {Todo} from '../../types/todo';
import userEvent from '@testing-library/user-event';

test('TodoItem should render valid Todo', () => {
  render(
      <TodoItem todo={{id: 0, completed: false, title: 'New Todo'}} />,
  );
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test(`TodoItem shouldn't have check icon when completed`, async () => {
  render(
      <TodoItem todo={{id: 0, title: 'New todo', completed: true}} />,
  );

  const completeButton = await screen
      .findByLabelText('Complete todo button')
      .catch(() => null);

  expect(
      completeButton,
  ).toBeNull();
});


const MockTodoList = () => {
  const [todos, setTodos] = useAtom(todosAtom);
  useEffect(
      () => setTodos([{id: 0, title: 'New Todo', completed: false}]),
      [],
  );
  return (
    <List>
      {todos.map((t) => <TodoItem todo={t} key={t.id} />)}
    </List>
  );
};

test('Complete todo button should work properly', () => {
  render(<MockTodoList/>);
  userEvent.click(screen.getByLabelText('Complete todo button'));

  const todos: Todo[] =
      JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];

  expect(todos[0].completed).toEqual(true);
});

test('Delete todo button should work properly', () => {
  render(<MockTodoList/>);
  userEvent.click(screen.getByLabelText('Delete todo button'));

  const todos: Todo[] =
      JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];

  expect(todos).toEqual([]);
});
