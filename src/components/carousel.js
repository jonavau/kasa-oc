import { useState } from 'react';
import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';
import '../styles/Carousel.css';

function Carousel({ liste }) {
	const [index, updateIndex] = useState(0);

	/* réalise un ternaire si on est sur la derniere image on passe a la premiere et vice versa */
	/* sinon incrémente ou décremente simplement */

	return liste.pictures[1] !== undefined ? (
		<div className="carousel">
			<img
				className="carousel-img"
				alt={liste.description}
				src={liste.pictures[index]}
			></img>
			<img
				onClick={
					index === 0
						? () => updateIndex(index + liste.pictures.length - 1)
						: () => updateIndex(index - 1)
				}
				src={leftArrow}
				alt="flèche gauche"
				className="leftArrow"
			></img>
			<img
				onClick={
					liste.pictures[index + 1] !== undefined
						? () => updateIndex(index + 1)
						: () => updateIndex(index - liste.pictures.length + 1)
				}
				src={rightArrow}
				alt="flèche droite"
				className="rightArrow"
			></img>
			<div className="picNum">
				{[index + 1]}/{liste.pictures.length}
			</div>
		</div>
	) : (
		<img alt={liste.description} src={liste.pictures}></img>
	);
}

export default Carousel;
