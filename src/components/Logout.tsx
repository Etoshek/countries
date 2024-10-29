import React from 'react';
import { useLogout } from '../context/LogoutContext';
import '../common/style/logout.scss'

export const Logout: React.FC = () => {
    const { logout } = useLogout();

    return (
        <button onClick={logout} className='logout-button'>
            Wyloguj się
        </button>
    );
};