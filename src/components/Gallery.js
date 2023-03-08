import React from 'react';
import '../styles/Gallery.css';
import '../styles/Card.css';
import logements from '../assets/logements.json';

const ListOfPlaces = logements;

/* la fonction Gallery itère sur le JSON avec map() pour générer des cartes de logements */

function Gallery() {
	return (
		<div className="gallery">
			{ListOfPlaces.map((logement) => (
				<div key={logement.id} className="card">
					<figure>
						<img src={logement.cover} alt={logement.description} />
						<figcaption>{logement.title}</figcaption>
					</figure>
				</div>
			))}
		</div>
	);
}

export default Gallery;
