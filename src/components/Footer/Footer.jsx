import React from "react";
import {year} from "../../methods/getYear.js";

const Footer = () => {
	return (
		<footer>
			Nerdistry &copy; {year}
		</footer>
	)
}

export default Footer