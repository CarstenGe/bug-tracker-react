import './projectListItem.css';
import { Link } from 'react-router-dom';
import issues from '../../../db-issues';

function ProjectListItem({project}) {
	const numberOfIssues = issues.filter((issue)=> (issue.project === project.id));
	const numberOfHighIssues = numberOfIssues.filter((issue)=> (issue.priority === 'high'));
	const numberOfMediumIssues = numberOfIssues.filter((issue)=> (issue.priority === 'medium'));
	const numberOfLowIssues = numberOfIssues.filter((issue)=> (issue.priority === 'low'));

	return (
		<div className='project'>
			<Link to={`/projects/${project.id}`}>{project.name}</Link>
			<div className="project-bottom">
				<p>{numberOfIssues.length} issues</p>
				<div className="issues-number">
					<p className='high'>{numberOfHighIssues.length}</p>
					<p className='medium'>{numberOfMediumIssues.length}</p>
					<p className='low'>{numberOfLowIssues.length}</p>
				</div>
			</div>
		</div>
	);
}

export default ProjectListItem;