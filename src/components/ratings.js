import '../styles/Ratings.css';
import emptyStar from '../assets/emptystar.png';
import fullStar from '../assets/fullstar.png';

/* fonction qui prendrait le rating en props et renvoit la div correspondante */

function Ratings({ rating }) {
	return rating === '1' ? (
		<div className="ratings">
			<img src={fullStar} alt="fullStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
		</div>
	) : rating === '2' ? (
		<div className="ratings">
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
		</div>
	) : rating === '3' ? (
		<div className="ratings">
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
			<img src={fullStar} alt="fullStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
			<img src={emptyStar} alt="emptyStar"></img>
		</div>
	) : rating === '4' ? (
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
