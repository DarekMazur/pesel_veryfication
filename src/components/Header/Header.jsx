import React from "react";
import {H1} from "../H1/H1.styles.js";
import {StyledHeader} from "./Header.styles.js";
import {lang} from "../../lang/lang.js";

const Header = ({ userLang }) => {
	return (
		<StyledHeader>
			<H1>{(lang[userLang].home.header)}</H1>
		</StyledHeader>
	);
};

export default Header