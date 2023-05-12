import './dashboard.css';
import DashboardItem from './dashboardItem/DashboardItem';
import projects from '../../../db-projects';
import people from '../../../db-people';

function Dashboard(props) {
	return (
		<div className='dashboard'>
			<DashboardItem title="Projects" content={projects} hasLink={true} />
			<DashboardItem title="People" content={people} hasLink={false} />
		</div>
	);
}

export default Dashboard;