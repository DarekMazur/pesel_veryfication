import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box; 
		    font-size: 62.5%;
    }

    *, *::after, *::before {
        box-sizing: inherit;
    }
`;