import index_banner from '../assets/banner/index_banner.png';
import about_us_banner from '../assets/banner/about_us_banner.png'; /* bannière pour page à propos */
import '../styles/Banner.css';

/* composant bannière avec un contenu qui change selon la page ou l'on se trouve */

function Banner({ onIndex, bannerText }) {
	return (
		<figure className="banner">
			<img
				className={onIndex ? 'banner_img' : 'banner_img banner_tall'}
				src={onIndex ? index_banner : about_us_banner}
				alt="paysage"
			></img>
			<figcaption className="banner_text">{bannerText}</figcaption>
		</figure>
	);
}

export default Banner;
