import { ReactNode,useContext } from 'react';
import { ThemeContext } from '../context/ColorsContext';
import '../common/style/button.scss';

type LayoutProps = {
	children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const isDarkMode = theme.backgroundColor === '#202C36';

	return (
		<div
			style={{
				backgroundColor: theme.backgroundColor,
				color: theme.textColor,
			}}
		>
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

			<div>{children}</div>
		</div>
	);
};
