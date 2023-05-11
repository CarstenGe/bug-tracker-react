import { useState } from 'react';
import './sidebar.css';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';

function Sidebar(props) {
	const [collapsed, setCollapsed] = useState(true);

	return (
		<div className={`sidebar ${collapsed ? 'collapsed' : 'expanded'} `}>
			<div className="toggle-sidebar">
				<button onClick={()=>setCollapsed(!collapsed)}>{collapsed ? <ArrowCircleRightIcon /> : <ArrowCircleLeftIcon /> }</button>
			</div>
			<div className="sidebar-content">
				<ul>
					<li>a link</li>
					<li>another one</li>
				</ul>
			</div>
			<div className="sidebar-bottom">
				<div className="account">
					<Link to="/account"><PersonIcon /></Link>
					<Link to="/account"><p className='icon-text'>Account</p></Link>
				</div>
				<div className="settings">
					<Link to="/settings"><SettingsIcon /></Link>
					<Link to="/settings"><p className='icon-text'>Settings</p></Link>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;