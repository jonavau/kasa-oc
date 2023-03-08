import Banner from '../Banner';
import Header from '../Header';
import Gallery from '../Gallery';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NotFound from '../NotFound';
import AboutUs from '../About_us';

function App() {
	return (
		<React.Fragment>
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
					<Route exact path="/404" element={<NotFound />} />
					<Route exact path="/about_us" element={<AboutUs />} />
				</Routes>
			</Router>
		</React.Fragment>
	);
}

export default App;
