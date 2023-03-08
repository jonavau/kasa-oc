import LOGO_white from '../assets/logo/LOGO_white.png';
import '../styles/Footer.css';

function Footer() {
	return (
		<div className="footer-container">
			<img
				className="footer_logo"
				src={LOGO_white}
				alt="logo de kasa"
			></img>
			<h2 className="copyright">© 2020 Kasa. All rights reserved</h2>
		</div>
	);
}

export default Footer;
