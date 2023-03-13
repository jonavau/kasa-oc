import Banner from './Banner';
import Header from './Header';
import Gallery from './Gallery';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import AboutUs from './About_us';
import Footer from './Footer';
import logements from '../assets/logements.json';
import AccomodationPage from './AccomodationPage';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				{logements.map((logement) => (
					<Route
						key={logement.id}
						path={logement.id}
						element={<AccomodationPage liste={logement} />}
					></Route>
				))}
				<Route
					exact
					path="/"
					element={
						<React.Fragment>
							<Banner
								onIndex={true}
								bannerText={'Chez vous, partout et ailleurs'}
							/>
							<Gallery logements={logements} />
						</React.Fragment>
					}
				/>
				<Route
					path="/about_us"
					element={
						<React.Fragment>
							<Banner onIndex={false} bannerText={''} />
							<AboutUs />
						</React.Fragment>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
