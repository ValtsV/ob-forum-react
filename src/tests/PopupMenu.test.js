import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { PopupMenu } from '../components/PopupMenu';

describe('popup menu', () => {
    it('show links',  () => {
        const dummyData = [
            {
                name: 'First Link',
                path: '/first',
            },
            {
                name: 'Second Link',
                path: '/second',
            }
        ]

        

        render(<PopupMenu linkData={dummyData} />, {wrapper: MemoryRouter})

        expect(screen.getAllByRole('link')).toHaveLength(2);
    })

    it('show links and buttons',  () => {
        const dummyData = [
            {
                name: 'First Link',
                path: '/first',
            },
            {
                name: 'Second Link',
                path: '/second',
            }
        ]

        const dummyDataBtns = [
            {
                name: 'First button',
                function: jest.fn(),
            },
            {
                name: 'Second button',
                function: jest.fn(),
            }
        ]

        

        render(<PopupMenu linkData={dummyData} buttonData={dummyDataBtns} />, {wrapper: MemoryRouter})

        expect(screen.getAllByRole('link')).toHaveLength(2);

        expect(screen.getAllByRole('button')).toHaveLength(2);
    })


    it('executes function when user clicks on button', async () => {
        const user = userEvent.setup();

        const dummyData = [
            {
                name: 'Simple button',
                function: jest.fn(),
            }
        ]

        render(<PopupMenu buttonData={dummyData} />, {wrapper: MemoryRouter})


        const btn = screen.getByRole('button', /simple button/i);
        await user.click(btn);

        expect(dummyData[0].function).toBeCalled();
    })



})