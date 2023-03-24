import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './Banner';
import Header from './Header';
import Gallery from './Gallery';
import NotFound from './NotFound';
import AboutUs from './About_us';
import Footer from './Footer';
import AccomodationPage from './AccomodationPage';

function RouterKasa({ accomodations }) {
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					exact
					path="/logement/:id"
					element={<AccomodationPage liste={accomodations} />}
				/>
				<Route
					exact
					path="/"
					element={
						<React.Fragment>
							<Banner
								onIndex={true}
								bannerText={'Chez vous, partout et ailleurs'}
							/>
							<Gallery logements={accomodations} />
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

export default RouterKasa;
