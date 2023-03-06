import LOGO from '../assets/logo/LOGO.png';
import '../styles/Header.css';

function Header() {
	return (
		<div className="header">
			<img src={LOGO}></img>
			<nav>
				<a href="#">Accueil</a>
				<a href="#">A Propos</a>
			</nav>
		</div>
	);
}

export default Header;
