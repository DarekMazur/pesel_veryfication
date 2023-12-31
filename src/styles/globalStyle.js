import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
		html {
				box-sizing: border-box;
				font-size: 62.5%;
		}

		body {
				font-family: ${({theme}) => theme.fonts.main};
				margin: 0;
		}

		*, *::after, *::before {
				box-sizing: inherit;
		}
`;
