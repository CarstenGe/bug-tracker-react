import './settings.css';
import { useState } from 'react';
import SettingsItem from './settingsItem/SettingsItem';
import Snackbar from '@mui/material/Snackbar';

function Settings(props) {
	const [state, setState] = useState({
		open: false,
		vertical: 'top',
		horizontal: 'center',
	  });
	  const { vertical, horizontal, open } = state;
	
	  const handleClick = (newState) => () => {
		setState({ open: true, ...newState });
	  };
	
	  const handleClose = () => {
		setState({ ...state, open: false });
	  };

	  

	return (
		<div className='settings'>
			<h2>Settings</h2>
			<div className="settings-container">
				<SettingsItem text="Show filters for issues" handleClick={handleClick} />
				<SettingsItem text="Show all people" handleClick={handleClick} />
			</div>

			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				onClose={handleClose}
				message="Settings updated"
				key={vertical + horizontal}
			/>

		</div>
	);
}

export default Settings;