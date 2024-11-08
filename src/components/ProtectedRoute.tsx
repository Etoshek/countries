import { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
	isAllowed: boolean;
	redirectPath?: string;
	children?: ReactNode;

};

export const ProtectedRoute = ({
	isAllowed,
	redirectPath = '/login',
	children,
}: ProtectedRouteProps) => {
	if (!isAllowed) {
		return <Navigate to={redirectPath} replace />;
	}

	return <Outlet />;
};
