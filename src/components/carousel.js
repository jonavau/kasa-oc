import { useState } from 'react';

function Carousel({ liste }) {
	return (
		<div className="Carousel">
			{liste.pictures.map((pic) => (
				<img className="active" alt={liste.description} src={pic}></img>
			))}
		</div>
	);
}

function Switch() {
	const [pic, updatePic] = useState(0);
}

export default Carousel;
