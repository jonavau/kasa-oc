import logements from '../assets/logements.json';
import AccomodationPage from './AccomodationPage';
import { Route } from 'react-router-dom';

function NewPages() {
	logements.map((logement) => (
		<Route
			path={logement.id}
			element={
				<AccomodationPage
					name={logement.title}
					location={logement.location}
					tags={logement.tags}
					description={logement.description}
					equipments={logement.equipments}
					ratings={logement.rating}
				/>
			}
		></Route>
	));
}

export default NewPages;
