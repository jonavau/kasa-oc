import Host from './Host';
import Ratings from './Ratings';
import Collapse from './Collapse';
import Tags from './Tags';
import '../styles/Accomodation.css';
import Carousel from './Carousel';
import Liste from './List';
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

function AccomodationPage({ liste }) {
	const params = useParams();
	console.log(params.id);
	const idExist = liste.find((element) => element.id === params.id);

	if (idExist === undefined) return <NotFound />;

	for (let i = 0; i < liste.length; i++) {
		let actualAcc = liste[i];
		if (actualAcc.id === params.id) {
			return (
				<div className="accomodation-page">
					<Carousel liste={actualAcc} />
					<div className="accomodation-general-info">
						<div className="accomodation-name-place">
							<h2>{actualAcc.title}</h2>
							<h3>{actualAcc.location}</h3>
							<Tags liste={actualAcc} />
						</div>
						<div className="host-and-ratings">
							<Host liste={actualAcc} />
							<Ratings rating={actualAcc.rating} />
						</div>
					</div>
					<div className="accomodation-details">
						<Collapse
							title={'Description'}
							text={actualAcc.description}
						/>
						<Collapse
							title={'Équipements'}
							text={<Liste liste={actualAcc} />}
						/>
					</div>
				</div>
			);
		}
	}
}

export default AccomodationPage;
