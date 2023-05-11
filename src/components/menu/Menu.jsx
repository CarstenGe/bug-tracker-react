import { useState } from 'react';
import './menu.css';
import { Link } from 'react-router-dom';
import Create from '../create/Create';


function Menu(props) {
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
			
			<Link to="/">Dashboard</Link>
			<Link to="/projects">Projects</Link>
			<Link to="/people">People</Link>
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