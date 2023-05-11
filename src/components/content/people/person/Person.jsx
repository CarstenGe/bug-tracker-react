import './person.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

function Person({person,deletePerson}) {

	const [showConfirmation, setShowConfirmation] = useState(false);

	const handleDelete = (value) => {
		if(value){
			deletePerson(person.id)
		}
		setShowConfirmation(false)
	}
	return (
		<div className='person'>
			{person.name}
			{!showConfirmation ?
				<DeleteIcon onClick={()=>setShowConfirmation(true)} />
				:
				<div className='confirmation'>You sure? 
					<div className='yes'onClick={() => handleDelete(true)}>Yes</div>
					<div className='no'onClick={() => handleDelete(false)}>No</div>
				</div>
			}
		</div>
	);
}

export default Person;