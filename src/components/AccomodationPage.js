import Host from './Host';
import Ratings from './Ratings';
import Collapse from './Collapse';
import Tags from './Tags';
import '../styles/Accomodation.css';
import Carousel from './Carousel';
import Liste from './List';

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
				<Collapse title={'Description'} text={liste.description} />
				<Collapse
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
