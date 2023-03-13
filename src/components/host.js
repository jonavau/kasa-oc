function Host({ liste }) {
	return (
		<div>
			<p>{liste.host.name}</p>
			<img src={liste.host.picture} alt={liste.host.name}></img>
		</div>
	);
}

export default Host;
