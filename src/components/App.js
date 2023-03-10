import Banner from './Banner';
import Header from './Header';
import Card from './Card';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import AboutUs from './About_us';
import Footer from './Footer';
import logements from '../assets/logements.json';
import AccomodationPage from './AccomodationPage';
/* import NewPages from './ReturnAccPages'; */

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				{/* <NewPages /> */}
				{/* <Route
					path={logements[0].id}
					element={
						<AccomodationPage
							name={logements[0].title}
							location={logements[0].location}
							tags={logements[0].tags}
							description={logements[0].description}
							equipments={logements[0].equipments}
							ratings={logements[0].rating}
						/>
					}
				></Route> */}
				{logements.map((logement) => (
					<Route
						path={logement.id}
						element={
							<AccomodationPage
								name={logement.title}
								location={logement.location}
								tags={logement.tags}
								description={logement.description}
								equipments={logement.equipments}
								ratings={logement.rating}
							/>
						}
					></Route>
				))}
				<Route
					exact
					path="/"
					element={
						<React.Fragment>
							<Banner />
							<Card />
						</React.Fragment>
					}
				/>
				<Route
					path="/about_us"
					element={
						<React.Fragment>
							<Banner />
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
