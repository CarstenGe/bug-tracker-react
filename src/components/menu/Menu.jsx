import { useState } from 'react';
import './menu.css';
import { Link, useLocation } from 'react-router-dom';
import Create from '../create/Create';


function Menu(props) {

	const location = useLocation();

	const [hideSubmenu,setHideSubmenu] = useState(true);
	const [hideCreateComponent,setHideCreateComponent] = useState(true);
	const [creationType,setCreationType] = useState();

	const toggleSubmenu = () => {
		setHideSubmenu(!hideSubmenu);
	}
	const handleCreation = (type) => {
		setHideSubmenu(true);
		setHideCreateComponent(false);
		setCreationType(type);
	}

	return (
		<div className='menu'>
			
			<Link to="/" className={location.pathname === '/' ? 'active' : ''}>Dashboard</Link>
     		<Link to="/projects" className={location.pathname.includes('/projects') ? 'active' : ''}>Projects</Link>
      		<Link to="/people" className={location.pathname === '/people' ? 'active' : ''}>People</Link>
     
			<button className='btn btn-black-full' onClick={toggleSubmenu}>Create</button>

			<div className={`create-submenu ${hideSubmenu ? 'hidden' : ''}`}>
				<p onClick={() => handleCreation('project')}>Project</p>
				<p onClick={() => handleCreation('issue')}>Issue</p>
				<p onClick={() => handleCreation('person')}>Person</p>
			</div>

			{!hideCreateComponent && <Create creationType={creationType} setHideCreateComponent={setHideCreateComponent} />}
		</div>
	);
}

export default Menu;