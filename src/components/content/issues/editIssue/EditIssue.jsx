import './editIssue.css';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import projects from '../../../../db-projects';
import people from '../../../../db-people';

function EditIssue({setShowEditIssue, issue}) {

	const [issuePriority, setIssuePriority] = useState(issue.priority);
	const [issueDesc, setIssueDesc] = useState(issue.desc);
	const [issueProject, setIssueProject] = useState(issue.project);
	const [issueAssigned, setIssueAssigned] = useState(issue.assigned);

	const [showForm, setShowForm] = useState(true);
	const [showError, setShowError] = useState(false);

	const handleCloseButton = () => {
		setShowEditIssue(false);
	}
	const handleSubmitForm = () => {

		if ((issuePriority === '' || issueDesc === '' || issueProject === '')) {
			setShowError(true);
		}
		else if ((issuePriority !== '' || issueDesc !== '' || issueProject !== '')) {
			setShowError(false);
			setShowForm(false);
		}
	}
	const handleCheckboxChange = (name) => {
		if(issueAssigned.includes(name)){
			setIssueAssigned(issueAssigned.filter((assignedName)=>assignedName !== name));
		}
		else {
			setIssueAssigned([...issueAssigned,name])
		}
	}

	return (
		<div className='create-project'>
			<div className='create-project-box'>
				
				<div className='close' onClick={handleCloseButton}><CloseIcon /></div>
				
				{showError ? <div className='error-message'>Please check the fields and try again</div> : ''}

				{showForm ? 
					<>
						<h2>Editing issue</h2>

						<>
							<select value={issuePriority} onChange={(e)=>setIssuePriority(e.target.value)}>
								<option value="">Priority</option>
								<option value="low">Low</option>
								<option value="medium">Medium</option>
								<option value="high">High</option>
							</select>
							
							<textarea placeholder='Description' className='description' value={issueDesc} onChange={(e)=>setIssueDesc(e.target.value)}></textarea>
							
							<select value={issueProject} onChange={(e)=>setIssueProject(e.target.value)}>
								<option className='project' value=''>Select a project</option>
								{projects.map((project) => (
									<option key={project.id} className='project' value={project.id}>{project.name}</option>
								))}
							</select>
							
							<p><strong>Assign this issue to:</strong></p>
							<div className="people-container">
								{people.map((person) => (
									<label key={person.id} className='person'>
										<input 
											type="checkbox" 
											checked={issueAssigned.includes(person.firstname)}
											onChange={()=>handleCheckboxChange(person.firstname)}
										/>{person.name}
									</label>
								))}
							</div>
							
						</>
						
						<button className='btn btn-black-full' onClick={handleSubmitForm}>Edit issue</button>
					</>
					:
					<>
						<div className="success-message">Issue successfully edited</div>
						<small>But not really since this is only a frontend</small>
					</>
				}
			</div>
		</div>
	);
}

export default EditIssue;