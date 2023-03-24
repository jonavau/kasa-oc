import React from 'react';
import RouterKasa from './RouterKasa';
import logements from '../assets/logements.json';

function App() {
	return (
		<React.Fragment>
			<RouterKasa accomodations={logements} />
		</React.Fragment>
	);
}

export default App;
