import vector from '../assets/Vector.png';
import '../styles/ScrollDown.css';
import { useState } from 'react';

/*le composant ScrollDown utilise un state fermé par défaut, au clic sur la flèche le
state change et contenu de la div change et affiche le texte en dessous, on peut ensuite
recliquer sur la flèche pour collapse */

function Scrolldown({ title, text }) {
	const [isClosed, setIsClosed] = useState(true);
	return isClosed ? (
		<div className="ScrollDown_article">
			<div className="ScrollDown_title">
				<h2>{title}</h2>
				<img
					className="dropdown"
					onClick={() => setIsClosed(false)}
					src={vector}
					alt="voir plus"
				/>
			</div>
		</div>
	) : (
		<div className="ScrollDown_article">
			<div className="ScrollDown_title">
				<h2>{title}</h2>
				<img
					className="dropdownCollapse"
					onClick={() => setIsClosed(true)}
					src={vector}
					alt="voir plus"
				/>
			</div>
			<div className="ScrollDown_text">{text}</div>
		</div>
	);
}

export default Scrolldown;
