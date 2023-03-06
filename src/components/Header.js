import LOGO from '../assets/logo/LOGO.png';

function Header() {
	return (
		<div>
			<img src={LOGO}></img>
			<nav>
				<a href="#">Accueil</a>
				<a href="#">A Propos</a>
			</nav>
		</div>
	);
}

export default Header;
