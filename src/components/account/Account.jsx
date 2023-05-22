import './account.css';
import people from '../../db-people';
import { useState } from 'react';

function Account(props) {

	const [firstName, setFirstName] = useState(people[0].firstname);
	const [name, setName] = useState(people[0].lastname);
	const [email, setEmail] = useState(people[0].email);
	const [phone, setPhone] = useState(people[0].phone);
	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setShowConfirmation(true);

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
			{showConfirmation && <div className='success-message'>Account settings successfully updated</div>}
		</div>
	);
}

export default Account;