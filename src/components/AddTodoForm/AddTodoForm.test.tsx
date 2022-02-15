import React from 'react';
import {render, screen} from '@testing-library/react';
import {AddTodoForm} from 'components/AddTodoForm/AddTodoForm';
import userEvent from '@testing-library/user-event';
import {Todo} from 'types/todo';

test('Error message should be displayed when focusing empty input', () => {
  render(<AddTodoForm />);
  userEvent.click(screen.getByPlaceholderText('Новая задача...'));
  expect(screen.getByText('Поле обязательно')).toBeInTheDocument();
});

test('Helper message should be displayed when focusing not empty input', () => {
  render(<AddTodoForm />);
  const input = screen.getByPlaceholderText('Новая задача...');
  userEvent.click(input);
  userEvent.keyboard('New todo');
  expect(screen.getByText('Введите понятное вам название задачи'))
      .toBeInTheDocument();
});

test('Todo should be added to local storage when valid input', () => {
  render(<AddTodoForm />);
  userEvent.click(screen.getByPlaceholderText('Новая задача...'));
  userEvent.keyboard('Новая задача');
  userEvent.click(screen.getByText('Add todo'));
  const todos = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
  expect(todos[0]).toEqual({id: 1, completed: false, title: 'Новая задача'});
  localStorage.setItem('todos', '[]');
});

test(`Todo shouldn't be added to local storage when input invalid`, () => {
  render(<AddTodoForm />);
  userEvent.click(screen.getByPlaceholderText('Новая задача...'));
  userEvent.keyboard('       ');
  userEvent.click(screen.getByText('Add todo'));
  const todos = JSON.parse(localStorage.getItem('todos') || '[]') as Todo[];
  expect(todos).toEqual([]);
  localStorage.setItem('todos', '[]');
});
