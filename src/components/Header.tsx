import { useContext } from 'react';
import { ThemeContext } from '../context/ColorsContext';
import '../common/style/header.scss';

export const Header = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const isDarkMode = theme.backgroundColor === '#202C36';
	return (
		<div className='header'>
			<h1 className='text'>Where in the world?</h1>
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
	);
};
