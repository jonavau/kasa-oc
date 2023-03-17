import LOGO from '../assets/logo/LOGO.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="header">
			<img src={LOGO} alt="logo de kasa"></img>
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/about_us">A Propos</Link>
			</nav>
		</div>
	);
}

export default Header;
