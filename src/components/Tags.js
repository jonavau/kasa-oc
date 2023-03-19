import '../styles/Tags.css';

function Tags({ liste }) {
	return (
		<div className="tags">
			{liste.tags.map((tag) => (
				<p key={`${liste.id}${tag}`}> {tag} </p>
			))}
		</div>
	);
}

export default Tags;
