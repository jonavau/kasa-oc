import Banner from '../Banner';
import Header from '../Header';
import Gallery from '../Gallery';
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
							<Gallery />
						</React.Fragment>
					}
				/>
				<Route path="/about_us" element={<AboutUs />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
