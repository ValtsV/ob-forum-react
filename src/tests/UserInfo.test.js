import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserInfo } from '../components/UserInfo';

// split this
it('UserInfo component shows user avatar, user name and can be clicked on', async () => {
    const dummyUser = {
        avatar: null,
        username: 'cool_username',
    }

    const funct = jest.fn();

    const user = userEvent.setup();
    
    render(<UserInfo user={dummyUser} onClickHandler={funct} />)
    
    // TODO: check avatar
    const username = screen.getByText(dummyUser.username);
    expect(username).toBeInTheDocument();

    const btn = screen.getByRole('button', dummyUser.username);
    await user.click(btn);

    expect(funct).toBeCalledTimes(1);

})