import React from 'react';
import Navbar from './Navbar';
import ScrollTab from './ScrollTab';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<ScrollTab />
		</>
	);
};

export default Layout;
