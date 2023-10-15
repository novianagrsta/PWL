import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders header text', () => {
  render(<Header />);
  const headerElement = screen.getByText(/Header/i);
  expect(headerElement).toBeInTheDocument();
});