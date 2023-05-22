import './settingsItem.css';
import Switch from '@mui/material/Switch';

function SettingsItem({text, handleClick}) {
	return (
		<div className="item">
			<p>{text}</p>
			<Switch defaultChecked onClick={handleClick({
						vertical: 'bottom',
						horizontal: 'center',
			})} />
		</div>
	);
}

export default SettingsItem;