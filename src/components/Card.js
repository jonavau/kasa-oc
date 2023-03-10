import React from 'react';
import '../styles/Gallery.css';
import '../styles/Card.css';
import logements from '../assets/logements.json';

/* la fonction itère sur la liste des logements avec map() pour générer des cartes de logements */

function Card() {
	return (
		<div className="gallery">
			{logements.map((logement) => (
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

export default Card;
