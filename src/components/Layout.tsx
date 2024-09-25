import { ReactNode } from 'react';

type LayoutProps = {
	children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => <div>{children}</div>;
