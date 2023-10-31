import React from 'react';
import PropTypes from "prop-types";
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import {StyledLayout} from "./Layout.styles.js";

const Layout = ({ children, userLang }) => {
	return (
		<StyledLayout>
			<Header userLang={userLang} />
			<main>{children}</main>
			<Footer />
		</StyledLayout>
	);
};

export default Layout

Layout.propTypes = {
	children: PropTypes.element.isRequired
}
