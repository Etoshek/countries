import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../context/ColorsContext';
import '../common/style/button.scss';

type LayoutProps = {
	children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	const { theme } = useContext(ThemeContext);

	return (
		<div
			style={{
				backgroundColor: theme.backgroundColor,
				color: theme.textColor,
			}}
		>
			<div>{children}</div>
		</div>
	);
};
