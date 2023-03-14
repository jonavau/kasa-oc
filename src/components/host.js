import '../styles/Host.css';

function Host({ liste }) {
	return (
		<div className="host">
			<p>{liste.host.name}</p>
			<img
				className="host-pic"
				src={liste.host.picture}
				alt={liste.host.name}
			></img>
		</div>
	);
}

export default Host;
