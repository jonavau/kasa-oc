import Host from './host';
import Ratings from './ratings';
import Scrolldown from './Scrolldown';
import Tags from './tags';
import '../styles/Accomodation.css';
import Carousel from './carousel';
import Liste from './liste';

function AccomodationPage({ liste }) {
	return (
		<div className="accomodation-page">
			<Carousel liste={liste} />
			<div className="accomodation-general-info">
				<div className="accomodation-name-place">
					<h2>{liste.title}</h2>
					<h3>{liste.location}</h3>
					<Tags liste={liste} />
				</div>
				<div className="host-and-ratings">
					<Host liste={liste} />
					<Ratings rating={liste.rating} />
				</div>
			</div>
			<div className="accomodation-details">
				<Scrolldown title={'Description'} text={liste.description} />
				<Scrolldown
					title={'Équipements'}
					text={<Liste liste={liste} />}
				/>
			</div>
		</div>
	);
}

/* je dois séparer mes élements en composants et les réintégrer à AccomodationPage ensuite */
/* je dois itérer dans App.js sur ma liste de location avec map() pour générer une AccomodationPage par objet */

export default AccomodationPage;
