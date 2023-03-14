import vector from '../assets/Vector.png';
import '../styles/ScrollDown.css';
import { useState } from 'react';

function Scrolldown({ title, text }) {
	const [isClosed, setIsClosed] = useState(true);
	return isClosed ? (
		<div className="ScrollDown_article">
			<h3 className="ScrollDown_title">
				{title}
				<img
					className="dropdown"
					onClick={() => setIsClosed(false)}
					src={vector}
					alt="voir plus"
				/>
			</h3>
		</div>
	) : (
		<div className="ScrollDown_article">
			<h3 className="ScrollDown_title">
				{title}
				<img
					className="dropdownCollapse"
					onClick={() => setIsClosed(true)}
					src={vector}
					alt="voir plus"
				/>
			</h3>
			<p className="ScrollDown_text">{text}</p>
		</div>
	);
}

export default Scrolldown;
