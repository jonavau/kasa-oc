import LOGO from '../assets/logo/LOGO.png';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="header">
			<img src={LOGO} alt="logo"></img>
			<nav>
				<Link to="/">Accueil</Link>
				<Link to="/about_us">About us</Link>
			</nav>
		</div>
	);
}

export default Header;
