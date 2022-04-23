import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

it('renders header', () => {
  render(<App />, {wrapper: MemoryRouter});
  const header = screen.getByRole('banner');

  expect(header).toBeInTheDocument();
});




