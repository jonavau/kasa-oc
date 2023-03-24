import { useNavigate } from 'react-router-dom';

function Card({ logement }) {
	const navigate = useNavigate();
	return (
		<div
			className="card"
			onClick={() => navigate(`/logement/${logement.id}`)}
		>
			<figure>
				<img src={logement.cover} alt={logement.description} />
				<figcaption>{logement.title}</figcaption>
			</figure>
		</div>
	);
}

export default Card;
