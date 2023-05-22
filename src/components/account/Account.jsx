import './account.css';
import { useEffect, useState } from 'react';

function Account({person}) {

	const [firstName, setFirstName] = useState(person.firstname);
	const [name, setName] = useState(person.lastname);
	const [email, setEmail] = useState(person.email);
	const [phone, setPhone] = useState(person.phone);
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [confirmPasswordClass, setConfirmPasswordClass] = useState('');
	const [error, setError] = useState('');
	const [showError, setShowError] = useState(false);
	const [showConfirmation, setShowConfirmation] = useState(false);

	useEffect(() => {
		if(password === ''){
			setConfirmPasswordClass('');
			setError(false);
		}
		else if (password === confirmPassword) {
			setConfirmPasswordClass('identical');
			setError(false);
		} else {
			setConfirmPasswordClass('not-identical');
			setError('Passwords don\'t match');			
		}
	},[password, confirmPassword]);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if(error){
			setShowError(true);
		}
		else {
			setShowError(false);
			setShowConfirmation(true);
		}

		setTimeout(() => {
			setShowConfirmation(false);
		}, 3000);
	}

	return (
		<div className='account'>
			<h2>Account settings</h2>
			<div className="account-container">
				<form className='account-form' onSubmit={handleFormSubmit}>
					<div className='form-item'>
						<label htmlFor='firstname'>
							First Name<br />
							<input
							type='text'
							id='firstname'
							placeholder='First Name'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							/>
						</label>
					</div>
					<div className='form-item'>
						<label htmlFor='name'>
							Name<br />
							<input
							type='text'
							id='name'
							placeholder='Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							/>
						</label>
					</div>
					<div className='form-item'>
						<label htmlFor='password'>
							New Password<br />
							<input
							type='password'
							id='password'
							className={confirmPasswordClass}
							placeholder='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							/>
						</label>
					</div>
					<div className='form-item'>
						<label htmlFor='confirmPassword'>
							Confirm Password<br />
							<input
							type='password'
							id='confirmPassword'
							className={confirmPasswordClass}
							placeholder='confirm password'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</label>
					</div>
					<div className='form-item'>
						<label htmlFor='email'>
							Email<br />
							<input
							type='text'
							id='email'
							placeholder='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							/>
						</label>
					</div>
					<div className='form-item'>
						<label htmlFor='phone'>
							Phone<br />
							<input
							type='text'
							id='phone'
							placeholder='phone'
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							/>
						</label>
					</div>
					<button type='submit' className='btn btn-black-full'>Update</button>
				</form>
			</div>
			{showError && <div className='error-message'>Passwords don't match</div>}
			{showConfirmation && <div className='success-message'>Account settings successfully updated</div>}
		</div>
	);
}

export default Account;