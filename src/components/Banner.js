import IMG from '../assets/banner/IMG.png';
import '../styles/Banner.css';

function Banner() {
	return (
		<div className="banner">
			<img className="banner_img" src={IMG}></img>
		</div>
	);
}

export default Banner;
