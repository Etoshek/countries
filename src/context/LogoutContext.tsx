import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

export type LogoutContextProps = {
	userName: string;
	email: string;
	password: string;
};

type LogoutContextType = {
	user: LogoutContextProps | null;
	logout: () => void;
};

export const LogoutContext = createContext<LogoutContextType | undefined>(
	undefined
);

export const LogoutProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const navigate = useNavigate();

	const [user, setUser] = useState<LogoutContextProps | null>(null);

	const logout = () => {
		setUser(null);
		navigate('/');
        
	};

	return (
		<LogoutContext.Provider value={{ user, logout }}>
			{children}
		</LogoutContext.Provider>
	);
};
export const useLogout = () => {
	const context = useContext(LogoutContext);
	if (!context) {
		throw new Error('useLogout must be used within a LogoutProvider');
	}
	return context;
};
