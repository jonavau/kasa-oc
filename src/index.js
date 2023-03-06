import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import Banner from './components/Banner';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Header />
		<App />
		<Banner />
	</React.StrictMode>
);
