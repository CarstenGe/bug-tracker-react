import './issueFilters.css';
import SearchIcon from '@mui/icons-material/Search';
import people from '../../../../db-people';

function IssueFilters({issueSearch,issuePriority,issueAssigned,issueReporter}) {
	return (
		<div className='issue-filters'>
			<div className="search">
				<input type="text" placeholder='Search...' onChange={issueSearch}/>
				<SearchIcon />
			</div>
			<div className="priority">
				<select onChange={issuePriority}>
					<option value="">Priority</option>
					<option value="low">Low</option>
					<option value="medium">Medium</option>
					<option value="high">High</option>
				</select>
			</div>
			<div className="assigned">
				<select onChange={issueAssigned}>
					<option value="">Assigned</option>
					{people.map((person, index)=>(
						<option key={index} value={person.name}>{person.firstname}</option>
					))}
				</select>
			</div>
			<div className="reporter">
				<select onChange={issueReporter}>
					<option value="">Reporter</option>
					{people.map((person, index)=>(
						<option key={index} value={person.name}>{person.firstname}</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default IssueFilters;