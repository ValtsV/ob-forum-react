import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as API from '../api/temas';
import { CoursesNavigation } from '../components/CoursesNavigation';
import { LoadingData } from '../components/LoadingData';
import { ThemeHeader } from '../components/ThemeHeader';
import { ThemesPage } from '../routes/ThemesPage';

// show side menu
it('shows themes navigation', async () => {
    render(<ThemesPage />, {wrapper: MemoryRouter});

    const homeLink = await screen.findByRole('link', /Página principal/i);

    expect(homeLink).toBeInTheDocument();

    // check rendered links (depending on whic courses user is enrolled in?)


})
// show theme header
it('shows theme header', async () => {
    render(<ThemesPage />, {wrapper: MemoryRouter});


    const themeHeader = await screen.findByText(/theme header/i);

    expect(themeHeader).toBeInTheDocument();
})
 

it('shows loading component', async () => {
    render(<ThemesPage />, {wrapper: MemoryRouter});

    expect(await screen.findByText(/loading/i)).toBeInTheDocument();
})



it('shows loading, then theme modules container', async () => {

    render(<ThemesPage />, {wrapper: MemoryRouter});



    expect(await screen.findByTestId('theme-modules-container')).toBeInTheDocument();
 
})
