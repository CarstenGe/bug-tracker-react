import './issueItem.css';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import EditIssue from '../editIssue/EditIssue';

function IssueItem({issue, deleteIssue}) {

	const [showEditIssue, setShowEditIssue]= useState(false);
	const [showEditIssueButton, setShowEditIssueButton]= useState(true);
	const [showDeleteConfirmation, setShowDeleteConfirmation]= useState(false);

	const handleEditIssueClick = () => {
		setShowEditIssue(true);
	}
	const handleDeleteConfirmationClick = () => {
		setShowEditIssueButton(false);
		setShowDeleteConfirmation(true);
	}
	const handleDeleteIssueYes = () => {
		setShowEditIssueButton(true);
		deleteIssue();
	}
	const handleDeleteIssueNo = () => {
		setShowEditIssueButton(true);
		setShowDeleteConfirmation(false);
	}

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
				{showEditIssueButton ? 
					<button onClick={handleEditIssueClick}><EditIcon /></button>
					:
					null
				}
				{showEditIssue ? <EditIssue setShowEditIssue={setShowEditIssue} issue={issue} /> : null}
				{showDeleteConfirmation ? 
					<p className='confirmation'>Are you sure? 
						<div className='yes' onClick={handleDeleteIssueYes}>Yes</div>
						<div className='no' onClick={handleDeleteIssueNo}> No</div></p>
					: <button onClick={handleDeleteConfirmationClick}><DeleteIcon /></button>
				}
			</div>
		</div>
	);
}

export default IssueItem;