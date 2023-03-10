function AccomodationPage({
	name,
	location,
	tags,
	description,
	equipments,
	hostName,
	hostPicture,
	ratings,
	/* J'utilise la destructuration pour générer mes props */
}) {
	return (
		<div>
			<p>{name}</p>
			<p>{location}</p>
			<p>{tags}</p>
			<p>{description}</p>
			<p>{equipments}</p>
			<div>{ratings}</div>
		</div>
	);
}

/* je dois itérer sur ma liste de location avec map() pour générer une AccomodationPage par objet */
/* sans itérer je pourrais créer les composants un a un en faisant </AccomodationPage name='refer',location='frgr'...*/
/* Je dois itérer pour créer automatiqument chaque page ainsi que son URL ( path='') */

export default AccomodationPage;
