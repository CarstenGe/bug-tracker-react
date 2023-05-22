import './dashboardItem.css';
import {Link} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Create from '../../../create/Create';
import '../../../create/create.css';
import { useEffect, useState } from 'react';

function DashboardItem({title, content, hasLink}) {

	const [hideCreateComponent,setHideCreateComponent] = useState(true);
	const [creationType, setCreationType] = useState('')

	const handleAddItem = (title) => {
		setHideCreateComponent(false);
	}
	useEffect(()=>{
		if(title === 'Projects'){ 
			setCreationType('project');
		}
		else if(title === 'People'){
			setCreationType('person')
		}
	},[title]);
	

	return (
		<div className='dashboard-item'>
			
			{!hideCreateComponent && <Create creationType={creationType} setHideCreateComponent={setHideCreateComponent} />}

			<div className="head">
				<h2>{title}</h2>
				<AddIcon onClick={()=>handleAddItem({title})} />
			</div>
			<div className="body">
				{content.map((cont)=>(
					<p key={cont.id}>
						{hasLink ? <Link to={`/${title.toLowerCase()}/${cont.id}`}>{cont.name}</Link> : cont.firstname}
					</p>
				))}
			</div>
			<div className="footer">
				<div className="total">{content.length} {title.toLowerCase()} in total</div>
				<div className="btn-container">
					<Link to={`/${title.toLowerCase()}`}>View all</Link>
				</div>
			</div>
		</div>
	);
}

export default DashboardItem;