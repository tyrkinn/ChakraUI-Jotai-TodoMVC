import {render, screen} from '@testing-library/react';
import {Header} from './Header';
import React from 'react';

test('Header should render', () => {
  render(<Header />);
  expect(screen.getByText('Todo app')).toBeInTheDocument();
});
