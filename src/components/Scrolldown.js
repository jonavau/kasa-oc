import vector from '../assets/Vector.png';
import '../styles/ScrollDown.css';

function Scrolldown({ title, text }) {
	return (
		<article className="ScrollDown_article">
			<h3 className="ScrollDown_title">
				{title}
				<img className="dropdown" src={vector} alt="voir plus" />
			</h3>
			<p className="ScrollDown_text">{text}</p>
		</article>
	);
}

export default Scrolldown;
