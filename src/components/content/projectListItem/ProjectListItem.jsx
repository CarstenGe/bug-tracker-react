import './projectListItem.css';
import { Link } from 'react-router-dom';

function ProjectListItem({project}) {
	return (
		<div className='project'>
			<Link to={`/projects/${project.id}`}>{project.name}</Link>
			<div className="project-bottom">
				<p>2 issues</p>
				<div className="issues-number">
					<p className='high'>1</p>
					<p className='medium'>0</p>
					<p className='low'>1</p>
				</div>
			</div>
		</div>
	);
}

export default ProjectListItem;