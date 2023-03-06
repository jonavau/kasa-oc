import index_banner from '../assets/banner/index_banner.png';
import about_us_banner from '../assets/banner/about_us_banner.png'; /* bannière pour page à propos */

import '../styles/Banner.css';

function Banner() {
	return (
		<div className="banner">
			<img className="banner_img" src={index_banner}></img>
		</div>
	);
}

export default Banner;
