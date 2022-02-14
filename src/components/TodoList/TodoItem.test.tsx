import React from 'react';
import {render, screen} from '@testing-library/react';
import {TodoItem} from './TodoItem';
import {List} from '@chakra-ui/react';
import '@testing-library/jest-dom';

test('TodoItem should render valid Todo', () => {
  render(
      <TodoItem todo={{id: 0, completed: false, title: 'New Todo'}} />,
      {wrapper: List},
  );
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test(`TodoItem shouldn't have check icon when completed`, async () => {
  render(
      <TodoItem todo={{id: 0, title: 'New todo', completed: true}} />,
      {wrapper: List},
  );

  const completeButton = await screen
      .findByLabelText('Complete todo button')
      .catch(() => null);

  expect(
      completeButton,
  ).toBeNull();
});
