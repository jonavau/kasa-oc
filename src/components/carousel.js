import { useState } from 'react';
import leftArrow from '../assets/leftArrow.png';
import rightArrow from '../assets/rightArrow.png';
import '../styles/Carousel.css';

function Carousel({ liste }) {
	const [index, updateIndex] = useState(0);
	console.log(index);
	return (
		<div className="carousel">
			{/* {liste.pictures.map((pic) => (
				<img alt={liste.description} src={pic}></img>
			))} */}
			<img alt={liste.description} src={liste.pictures[index]}></img>
			<img
				onClick={() => updateIndex(index - 1)}
				src={leftArrow}
				alt="flèche gauche"
				className="leftArrow"
			></img>
			<img
				onClick={() => updateIndex(index + 1)}
				src={rightArrow}
				alt="flèche droite"
				className="rightArrow"
			></img>
		</div>
	);
}

export default Carousel;
