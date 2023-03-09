import Banner from '../Banner';
import Header from '../Header';
import Card from '../Card';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from '../NotFound';
import AboutUs from '../About_us';
import Footer from '../Footer';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
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
