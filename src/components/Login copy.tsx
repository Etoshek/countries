import React, { useState } from 'react';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const validateEmail = (email: string) => {
		return email.includes('@');
	};

	const validatePassword = (password: string) => {
		return password.length >= 6 && /[A-Z]/.test(password);
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setError('');

		if (!validateEmail(email)) {
			setError('Email must contain an "@" sign.');
			return;
		}

		if (!validatePassword(password)) {
			setError(
				'Password must be at least 6 characters long and contain at least one uppercase letter.'
			);
			return;
		}

		console.log('Login successful:', { email, password });

		setEmail('');
		setPassword('');
	};

	return (
		<div className='form-div'>
			<h2 className='form-header'>Login</h2>
			<form className='form' onSubmit={handleSubmit}>
				<div className='form-email'>
					<label className='form-label email'>Email:</label>
					<input
						className='form-input email'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
				{error && <p className='error-message'>{error}</p>}
				<button className='submit-button' type='submit'>Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
