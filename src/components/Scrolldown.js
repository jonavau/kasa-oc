import vector from '../assets/Vector.png';
import '../styles/ScrollDown.css';
import { useState } from 'react';

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
