import './issueItem.css';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function IssueItem({issue}) {
	return (
		<div className='issue-item'>
			<div className='priority'>
				<div className={`color ${issue.priority}`}></div>
			</div>
			
			<div className='desc'>{issue.desc}</div>
			
			<div className='assigned'>{issue.assigned.map((assigned)=>(
				<div className='person'>
					<PersonIcon />
					<p>{assigned}</p>
				</div>
			))}</div>
			
			<div className='reporter'>
				<div className='person'>
					<PersonIcon />
					{issue.reporter}
				</div>
			</div>
			
			<div className='actions'>
				<button><EditIcon /></button>
				<button><DeleteIcon /></button>
			</div>
		</div>
	);
}

export default IssueItem;