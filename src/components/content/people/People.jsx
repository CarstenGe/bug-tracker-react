import './people.css';
import people from '../../../db-people';
import Person from './person/Person';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

function People(props) {

	const [addPerson, setAddPerson] = useState('');
	const [allPeople, setAllPeople] = useState(people);

	const handleAddPerson = () => {
		if(addPerson !== '') {
			const newPerson = {
				id: allPeople.length + 1, // todo: write different logic. If person is deleted, the length is not the same as the last id
				name: addPerson,
				profilePic: '',
			};
			setAllPeople(allPeople => [...allPeople, newPerson])
			setAddPerson('');
		}
	}
	const deletePerson = (deleteId) => {
		setAllPeople(allPeople.filter((person)=>(person.id !== deleteId)))
	}

	return (
		<div className='people'>
			{allPeople.map((person)=>(
				<Person key={person.id} person={person} deletePerson={deletePerson} />
			))}
			<div className='add-person'>
				<input 
					type="text" 
					placeholder='Add another team member' 
					value={addPerson} 
					onChange={(e)=>setAddPerson(e.target.value)} 
				/>
				<AddIcon onClick={handleAddPerson} />
			</div>
		</div>
	);
}

export default People;