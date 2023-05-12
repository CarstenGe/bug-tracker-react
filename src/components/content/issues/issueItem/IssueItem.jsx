import './issueItem.css';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

function IssueItem({issue, deleteIssue}) {

	const [showDeleteConfirmation, setShowDeleteConfirmation]= useState(false);

	return (
		<div className='issue-item'>
			<div className='priority'>
				<div className={`color ${issue.priority}`}></div>
			</div>
			
			<div className='desc'>{issue.desc}</div>
			
			<div className='assigned'>
				{issue.assigned.map((assigned, index)=>(
					<div key={index} className='person'>
						<PersonIcon />
						<p>{assigned}</p>
					</div>
				))}
			</div>
			
			<div className='reporter'>
				<div className='person'>
					<PersonIcon />
					{issue.reporter}
				</div>
			</div>
			
			<div className='actions'>
				{showDeleteConfirmation ? 
					<p className='confirmation'>Are you sure? 
						<div className='yes' onClick={deleteIssue}>Yes</div>
						<div className='no' onClick={()=>setShowDeleteConfirmation(false)}> No</div></p>
					: <><button><EditIcon /></button><button onClick={()=>setShowDeleteConfirmation(true)}><DeleteIcon /></button></>
				}
			</div>
		</div>
	);
}

export default IssueItem;