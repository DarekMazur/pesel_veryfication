import React from "react";
import {year} from "../../methods/getYear.js";
import {StyledFooter} from "./Footer.styles.js";

const Footer = () => {
	return (
		<StyledFooter>
			Nerdistry &copy; {year}
		</StyledFooter>
	)
}

export default Footer
