import React from 'react';
import '../styles/Gallery.css';
import '../styles/Card.css';
import logements from '../assets/logements.json';

const ListOfPlaces = logements;
console.log(ListOfPlaces);

function Gallery() {
	return (
		<div className="gallery">
			{ListOfPlaces.map((logement) => (
				<div key={logement.id} className="card">
					<figure>
						<img src={logement.cover} />
						<figcaption>{logement.title}</figcaption>
					</figure>
				</div>
			))}
		</div>
	);
}

export default Gallery;
