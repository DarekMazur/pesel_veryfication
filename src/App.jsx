import { ThemeProvider } from 'styled-components';
import { theme } from './utils/themes/theme.js';
import { GlobalStyle } from './styles/globalStyle.js';
import Layout from './components/Layout/Layout.jsx';
import Home from "./pages/Home/Home.jsx";

const App = () => {
	const lang = 'pl'
	
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Layout userLang={lang}>
				<Home userLang={lang} />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
