import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../common/style/login-form.scss';
import { useUser } from '../context/UserContext';

export const LoginForm = () => {
	const [identifier, setIdentifier] = useState('');
	const [email, setEmail] = useState('');
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const navigate = useNavigate();

	const { login, user } = useUser();

	const handleLogin = (e: any) => {
		const userCheck = e.target.value;
		setIdentifier(userCheck);

		if (userCheck.includes('@')) {
			setEmail(userCheck);
			setUserName('');
		} else {
			setUserName(userCheck);
			setEmail('');
		}
	};
	const identifierCheck = () => {
		const payload = {
			email: email || null,
			username: userName || null,
			password: password,
		};
		return payload;
	};
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setError('');
		login({ email, userName, password });
		if (user) {
			setIsMessageVisible(true);
			setTimeout(() => {
				navigate('/country');
				setIsLoggedIn(true);
				setIsMessageVisible(false);
			}, 2000);
		} else {
			setIsMessageVisible(false);
		}
	};

	return (
		<div>
			{isLoggedIn ? null : (
				<div className='form-div'>
					<h2 className='form-header'>Login</h2>
					<form className='form' onSubmit={handleSubmit}>
						<div className='form-email'>
							<label className='form-label email'>Email:</label>
							<input
								className='form-input email'
								type='text'
								value={identifier}
								onChange={handleLogin}
								required
							/>
						</div>
						<div className='form-password'>
							<label className='form-label password'>Password:</label>
							<input
								className='form-input password'
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<button
							className='submit-button'
							type='submit'
							onClick={identifierCheck}
						>
							Login
						</button>
						{error && <p className='error-message'>error</p>}
						{isMessageVisible && (
							<>
								<h1>
									Welcome {''}
									{identifier.charAt(0).toUpperCase() +
										identifier.slice(1).toLowerCase()}
								</h1>
								<p>In a moment you will be transferred to the application</p>
							</>
						)}
					</form>
				</div>
			)}
		</div>
	);
};
