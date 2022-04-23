import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Header } from '../layout/Header';

it('renders oblogo', () => {
  render(<Header />, {wrapper: MemoryRouter});
  const oblogo = screen.getByLabelText("OpenBootcamp logo");

  expect(oblogo).toBeInTheDocument();
});

it('renders "OpenBootcamp"', () => {
  render(<Header />, {wrapper: MemoryRouter});

  const openBootcamp = screen.getByRole('link', /openbootcamp/i);

  expect(openBootcamp).toBeInTheDocument();
});

it('renders search input', async () => {
  const user = userEvent.setup();
  render(<Header />, {wrapper: MemoryRouter});
  const search = screen.getByRole('searchbox');

  expect(search).toBeInTheDocument();
  expect(search).toHaveAttribute('placeholder', 'Buscar');
  expect(search).toHaveDisplayValue('');

  await user.type(search, 'searchtext');

  expect(search).toHaveDisplayValue('searchtext');
});

it('renders user info', () => {
  render(<Header />, {wrapper: MemoryRouter});
  const userInfo = screen.getByRole('button');

  expect(userInfo).toBeInTheDocument();
});

it('popup appears/disappears when clicking userinfo', async () => {
  const user = userEvent.setup();
  render(<Header />, {wrapper: MemoryRouter});
  
  const btn = screen.getByRole('button');

  await user.click(screen.getByRole('button'));


  const userInfoPopup = screen.getByTestId('popup-menu');

  expect(userInfoPopup).toBeInTheDocument();
 
})



