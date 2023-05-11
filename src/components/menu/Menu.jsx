import './menu.css';
import { Link } from 'react-router-dom';

function Menu(props) {
	return (
		<div className='menu'>
			<Link to="/">Dashboard</Link>
			<Link to="/projects">Projects</Link>
			<Link to="/people">People</Link>
			<button className='btn btn-black-full'>Create</button>
		</div>
	);
}

export default Menu;