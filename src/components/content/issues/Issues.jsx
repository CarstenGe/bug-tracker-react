import './issues.css';
import { useParams } from 'react-router-dom';
import issues from '../../../db-issues';
import IssueItem from './issueItem/IssueItem';
import { Link } from 'react-router-dom';
import IssueFilters from './issueFilters/IssueFilters';
import { useState, useEffect } from 'react';

function Issues() {
	const { id } = useParams();
	const [projectIssues, setProjectIssues] = useState(issues.filter((issue) => (issue.project === Number(id))));
	const [search, setSearch] = useState('');
	const [priority, setPriority] = useState('');
	const [assigned, setAssigned] = useState('');
	const [reporter, setReporter] = useState('');

	// filter logic
	useEffect(() => {

		const filteredIssues = issues.filter((issue) => {
		  	const hasMatchingProject = issue.project === Number(id);
		  	const hasMatchingSearch = issue.desc.toLowerCase().includes(search.toLowerCase());
		  	const hasMatchingPriority = issue.priority === priority;
		  	const hasMatchingAssigned = issue.assigned.includes(assigned);
		  	const hasMatchingReporter = issue.reporter === reporter;
	
		  	return (
				hasMatchingProject &&
				(search === '' || hasMatchingSearch) &&
				(priority === '' || hasMatchingPriority) &&
				(assigned === '' || hasMatchingAssigned) &&
				(reporter === '' || hasMatchingReporter)
		  	);
		});
		setProjectIssues(filteredIssues);

	}, [id, search, priority, assigned, reporter]);

	// handle input updates
	const handleIssueSearch = (e) => {
		setSearch(e.target.value);
	}
	const handleIssuePriority = (e) => {
		setPriority(e.target.value);
	}
	const handleIssueAssigned = (e) => {
		setAssigned(e.target.value);
	}
	const handleIssueReporter = (e) => {
		setReporter(e.target.value);
	}

	return (
		<div className='issues'>

			<div className="issue-header">
				<Link to='/projects'><button className='btn btn-black-empty'>Back to projects</button></Link>
				<div className="filters">
					<IssueFilters 
						issueSearch={handleIssueSearch}
						issuePriority={handleIssuePriority}
						issueAssigned={handleIssueAssigned}
						issueReporter={handleIssueReporter}
					 />
				</div>
			</div>
			
			<div className="issues-container">
				<div className="issues-heading">
					<div className='priority'>Priority</div>
					<div className='desc'>Description</div>
					<div className='assigned'>Assigned</div>
					<div className='reporter'>Reporter</div>
					<div className='actions'>Actions</div>
				</div>
				{(projectIssues.length) ? projectIssues.map((issue)=>(
					<IssueItem key={issue.id} issue={issue} />
				)) : 
				<p>No issues found</p>}
			</div>

		</div>
	);
}

export default Issues;