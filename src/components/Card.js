function Card({ logement }) {
	return (
		<a className="card" href={`./${logement.id}`}>
			<figure>
				<img src={logement.cover} alt={logement.description} />
				<figcaption>{logement.title}</figcaption>
			</figure>
		</a>
	);
}

export default Card;
