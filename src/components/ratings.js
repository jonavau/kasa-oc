import '../styles/Ratings.css';
import emptyStar from '../assets/emptystar.png';
import fullStar from '../assets/fullstar.png';

function Ratings({ liste }) {
	console.log(liste.rating);
	return liste.rating === '1' ? (
		<div className="ratings">
			<img src={fullStar} alt="fullStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
		</div>
	) : liste.rating === '2' ? (
		<div className="ratings">
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
		</div>
	) : liste.rating === '3' ? (
		<div className="ratings">
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
		</div>
	) : liste.rating === '4' ? (
		<div className="ratings">
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
		</div>
	) : (
		<div className="ratings">
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
		</div>
	);
}
export default Ratings;
