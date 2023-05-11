import './create.css';
import CloseIcon from '@mui/icons-material/Close';
import people from '../../db-people';
import projects from '../../db-projects';
import { useState } from 'react';

function Create({creationType, setHideCreateComponent}) {

	const [projectName, setProjectName] = useState('');
	const [personName, setPersonName] = useState('');
	const [issuePriority, setIssuePriority] = useState('');
	const [issueDesc, setIssueDesc] = useState('');
	const [issueProject, setIssueProject] = useState('');
	const [showForm, setShowForm] = useState(true);
	const [showError, setShowError] = useState(false);

	const handleCloseButton = () => {
		setHideCreateComponent(true)
	}
	const handleSubmitForm = () => {
		if (creationType === 'project' && projectName === '') {
			setShowError(true);
		}
		else if (creationType === 'project' && projectName !== '') {
			setShowError(false);
			setShowForm(false);
		}
		
		if (creationType === 'person' && personName === '') {
			setShowError(true);
		}
		else if (creationType === 'person' && personName !== '') {
			setShowError(false);
			setShowForm(false);
		}

		if (creationType === 'issue' && (issuePriority === '' || issueDesc === '' || issueProject === '')) {
			setShowError(true);
		}
		else if (creationType === 'issue' && (issuePriority !== '' || issueDesc !== '' || issueProject !== '')) {
			setShowError(false);
			setShowForm(false);
		}
	}

	return (
		<div className='create-project'>
			<div className='create-project-box'>
				
				<div className='close' onClick={handleCloseButton}><CloseIcon /></div>
				
				{showError ? <div className='error-message'>Please check the fields and try again</div> : ''}

				{showForm ? 
					<>
						<h2>Create a new {creationType}</h2>

						{creationType === 'project' && (
							<input type='text' placeholder='Project Name' className='project-name' value={projectName} onChange={(e)=>setProjectName(e.target.value)} />
						)}
						{creationType === 'issue' && (
							<>
								<select value={issuePriority} onChange={(e)=>setIssuePriority(e.target.value)}>
									<option value="">Priority</option>
									<option value="low">Low</option>
									<option value="medium">Medium</option>
									<option value="high">High</option>
								</select>
								
								<textarea placeholder='Description' className='description' value={issueDesc} onChange={(e)=>setIssueDesc(e.target.value)}></textarea>
								
								<select value={issueProject} onChange={(e)=>setIssueProject(e.target.value)}>
									<option className='project'>Select a project</option>
									{projects.map((project) => (
										<option key={project.id} className='project'>{project.name}</option>
									))}
								</select>
								
								<p><strong>Assign this issue to:</strong></p>
								<div className="people-container">
									{people.map((person) => (
										<label key={person.id} className='person'><input type="checkbox" />{person.name}</label>
									))}
								</div>
								
							</>
						)}
						{creationType === 'person' && (
								<input type='text' placeholder='Person Name' className='person-name' value={personName} onChange={(e)=>setPersonName(e.target.value)} />
						)}
						<button className='btn btn-black-full' onClick={handleSubmitForm}>Create {creationType}</button>
					</>
					:
					<>
						<div className="success-message">{creationType} successfully added</div>
						<small>But not really since this is only a frontend</small>
					</>
				}
			</div>
		</div>
	);
}

export default Create;