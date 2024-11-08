import React from 'react';
import { useUser } from '../context/UserContext';
import '../common/style/logout.scss';

export const Logout: React.FC = () => {
	const { logout } = useUser();

	return (
		<button onClick={logout} className='logout-button'>
			<p> Wyloguj się</p>
		</button>
	);
};
