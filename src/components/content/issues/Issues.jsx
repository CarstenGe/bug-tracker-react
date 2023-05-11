import './issues.css';
import { useParams } from 'react-router-dom';
import issues from '../../../db-issues';
import IssueItem from '../issueItem/IssueItem';
import { Link } from 'react-router-dom';

function Issues() {
	const { id } = useParams();
	const projectIssues = issues.filter((issue) => (issue.project === Number(id)));

	return (
		<div className='issues'>
			<Link to='/projects'><button className='btn btn-black-empty'>Back to projects</button></Link>
			<div className="filters">
				filters coming soon
			</div>
			
			<div className="issues-container">
				<div className="issues-heading">
					<div className='priority'>Priority</div>
					<div className='desc'>Description</div>
					<div className='assigned'>Assigned</div>
					<div className='reporter'>Reporter</div>
					<div className='actions'>Actions</div>
				</div>
				{projectIssues.map((issue)=>(
					<IssueItem key={issue.id} issue={issue} />
				))}
			</div>

		</div>
	);
}

export default Issues;