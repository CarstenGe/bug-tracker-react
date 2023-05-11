import './projects.css';
import projects from '../../../db-projects';
import ProjectListItem from '../projectListItem/ProjectListItem';

function Projects(props) {
	return (
		<div>
			<h2>All projects</h2>
			<div className="projects-container">
				{projects.map((project) => (
					<ProjectListItem key={project.id} project={project} />
				))}
			</div>
		</div>
	);
}

export default Projects;