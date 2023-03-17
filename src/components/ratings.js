import '../styles/Ratings.css';
import emptyStar from '../assets/emptystar.png';
import fullStar from '../assets/fullstar.png';

/* changer commm */

function Ratings({ rating }) {
	const stars = [1, 2, 3, 4, 5].map((index) => {
		const isFullStar = rating >= index;
		return (
			<img
				src={isFullStar ? fullStar : emptyStar}
				alt={isFullStar ? fullStar : emptyStar}
			/>
		);
	});
	return <div className="ratings">{stars}</div>;
}

export default Ratings;
