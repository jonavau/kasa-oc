import down_arrow from '../assets/down_arrow.png';
import '../styles/ScrollDown.css';
import { useState } from 'react';

/*le composant ScrollDown utilise un state fermé par défaut, au clic sur la flèche le
state change et contenu de la div change et affiche le texte en dessous, on peut ensuite
recliquer sur la flèche pour collapse */

function Collapse({ title, text }) {
	const [isClosed, setIsClosed] = useState(true);
	return (
		<div className="ScrollDown_article">
			<div className="ScrollDown_title">
				<h2>{title}</h2>
				<img
					className={isClosed ? 'dropdown' : 'dropdownCollapse'}
					onClick={() => setIsClosed(!isClosed)}
					src={down_arrow}
					alt="voir plus"
				/>
			</div>
			{!isClosed && <div className="ScrollDown_text">{text}</div>}
		</div>
	);
}

export default Collapse;
