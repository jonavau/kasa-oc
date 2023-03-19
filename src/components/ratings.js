import '../styles/Ratings.css';
import emptyStar from '../assets/emptystar.png';
import fullStar from '../assets/fullstar.png';

/* la fonction prend en props le rating du logement puis en itérant sur une liste entre
1 et 5 avec map qui va comparer le rating avec la valeur du tableau on génère soit une étoile
pleine soit une étoile vide*/

function Ratings({ rating }) {
	const stars = [1, 2, 3, 4, 5].map((index) => {
		const isFullStar = rating >= index;
		return (
			<img
				key={index}
				src={isFullStar ? fullStar : emptyStar}
				alt={isFullStar ? fullStar : emptyStar}
			/>
		);
	});
	return <div className="ratings">{stars}</div>;
}

export default Ratings;
