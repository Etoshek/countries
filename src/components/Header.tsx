import { useNavigate } from 'react-router-dom';

import { useContext } from 'react';
import { Logout } from './Logout';
import { ThemeContext } from '../context/ColorsContext';

import '../common/style/header.scss';
import '../common/style/button.scss';

export const Header = () => {
	const navigate = useNavigate();

	const backToHomePage = () => {
		navigate('/country');
	};
	const { theme, toggleTheme } = useContext(ThemeContext);
	const isDarkMode = theme.backgroundColor === '#202C36';

	return (
		<div className='header'>
			<button className='header-button' onClick={backToHomePage}>
				<h1 className='text'>Where in the world?</h1>
			</button>
			<div className='nav-buttons'>
				<div className='dark-light-button'>
					<button onClick={toggleTheme} className='dark-mode'>
						{isDarkMode ? (
							<>
								<span className='material-icons moon-icon'>wb_sunny</span>
								<p> Light mode</p>
							</>
						) : (
							<>
								<span className='material-icons moon-icon'>brightness_3</span>
								<p>Dark mode</p>
							</>
						)}
					</button>
				</div>
				<div className='logout-button'>
					<Logout />
				</div>
			</div>
		</div>
	);
};
