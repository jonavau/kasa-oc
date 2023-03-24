import LOGO from '../assets/logo/LOGO.png';
import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<div className="header">
			<img src={LOGO} alt="logo de kasa"></img>
			<nav>
				<NavLink
					className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : ''
					}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive, isPending }) =>
						isPending ? 'pending' : isActive ? 'active' : ''
					}
					to="/about_us"
				>
					A Propos
				</NavLink>
			</nav>
		</div>
	);
}

export default Header;
