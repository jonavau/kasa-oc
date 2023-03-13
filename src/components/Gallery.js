import React from 'react';
import '../styles/Gallery.css';
import '../styles/Card.css';
import { getValue } from '@testing-library/user-event/dist/utils';
import Card from './Card';

function Gallery({ logements }) {
	return (
		<div className="gallery">
			{logements.map((logement) => (
				<Card key={logement.id} logement={logement} />
			))}
		</div>
	);
}

export default Gallery;
