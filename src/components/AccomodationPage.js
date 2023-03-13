import Host from './host';
import Ratings from './ratings';
import Scrolldown from './Scrolldown';
import Tags from './tags';

function AccomodationPage({
	liste,
	/* J'utilise la destructuration pour générer mes props */
}) {
	return (
		<div>
			<p>{liste.name}</p>
			<p>{liste.location}</p>
			<Tags liste={liste} />
			<Scrolldown title={'Description'} text={liste.description} />
			<Scrolldown title={'Équipements'} text={liste.equipments} />
			<Host liste={liste} />
			<Ratings liste={liste} />
		</div>
	);
}

/* je dois séparer mes élements en composants et les réintégrer à AccomodationPage ensuite */
/* je dois itérer dans App.js sur ma liste de location avec map() pour générer une AccomodationPage par objet */

export default AccomodationPage;
