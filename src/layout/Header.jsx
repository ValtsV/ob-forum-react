import { AppBar, SvgIcon } from '@mui/material'
import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PopupMenu } from '../components/PopupMenu'
import { Search } from '../components/Search'
import { UserInfo } from '../components/UserInfo'

import {ObLogo} from './../components/ObLogo'


export const Header = () => {

    const linkData = [
        {
            name: 'Configuración',
            path: '/configuration',
        }
    ]

    const buttonData = [
        {
            name: 'Cerrar Sessión',
            function: () => console.log('logging out'),
        }
    ]






    const dummyUser = {
        avatar: null,
        username: 'cool_username',
    }

    const [user, setUser] = useState(dummyUser);
    const [userInfoPopupVisiblility, setUserInfoPopupVisiblility] = useState(false);

    const showUserInfoPopup = () => {
        setUserInfoPopupVisiblility(!userInfoPopupVisiblility);
    }

  return (
    <header>
        <ObLogo />
        <Link to='/themes'>OpenBootcamp</Link>
        <Search />
        <UserInfo user={user} onClickHandler={showUserInfoPopup} />
        {
        userInfoPopupVisiblility ? <PopupMenu linkData={linkData} buttonData={buttonData} /> : null
        }
        
    </header>
  )
}
