import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
	useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { userData } from '../data/userData';

export type UserProps = {
	userName: string;
};

type LoginFn = {
	email: string;
	userName: string;
	password: string;
};

type UserContextType = {
	user: UserProps | null;
	logout: () => void;
	login: (props: LoginFn) => void;
	isLoading: boolean;
};

export const UserContext = createContext<UserContextType | undefined>(
	undefined
);

export const UserProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const navigate = useNavigate();

	const [user, setUser] = useState<UserProps | null>(null);

	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const user = localStorage.getItem('token');
		user ? setUser({ userName: user }) : setUser(null);
		setIsLoading(false)
	}, []);

	const login = ({ email, userName, password }: LoginFn) => {
		const user = userData.find(
			(user) =>
				(email === user.email || userName === user.userName) &&
				password === user.password
		);
		if (user) {
			setUser(user);
			const person = { name: user.userName };
			localStorage.setItem('token', JSON.stringify(person));
		}
	};

	const logout = () => {
		setUser(null);
		navigate('/login');
		localStorage.removeItem('token');
	};

	return (
		<UserContext.Provider value={{ user, logout, login, isLoading }}>
			{children}
		</UserContext.Provider>
	);
};
export const useUser = () => {
	const context = useContext(UserContext);
	if (!context) {
		throw new Error('useLogout must be used within a UserProvider');
	}
	return context;
};
