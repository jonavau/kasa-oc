import index_banner from '../assets/banner/index_banner.png';
import about_us_banner from '../assets/banner/about_us_banner.png'; /* bannière pour page à propos */
import '../styles/Banner.css';

/* composant bannière avec un contenu qui devra changer selon la page ou l'on se trouve */

function Banner() {
	return (
		<figure className="banner">
			<img className="banner_img" src={index_banner}></img>
			<figcaption className="banner_text">
				Chez vous, partout et ailleurs
			</figcaption>
		</figure>
	);
}

export default Banner;
