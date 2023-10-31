import React from 'react';
import PropTypes from "prop-types";
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout

Layout.propTypes = {
	children: PropTypes.element.isRequired
}
