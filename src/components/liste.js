function Liste({ liste }) {
	return (
		<ul>
			{liste.equipments.map((equipments) => (
				<li key={equipments}>{equipments}</li>
			))}
		</ul>
	);
}
export default Liste;
