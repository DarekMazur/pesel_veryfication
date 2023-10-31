import { getPeselData } from './methods/getPeselData';
import { getBirthDay } from './methods/getBirthday.js';
import { getSex } from './methods/getSex.js';
import { useState } from 'react';
import { Wrapper } from './components/Wrapper/Wrapper.styles.js';
import FormField from './components/FormField/FormField.jsx';
import { Form } from './components/Form/Form.styles.js';
import { Button } from './components/Button/Button.styles.js';
import { Result } from './components/Result/Result.styles.js';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/themes/theme.js';
import { GlobalStyle } from './styles/globalStyle.js';
import Layout from './components/Layout/Layout.jsx';
import { Alert } from './components/Alert/Alert.styles.js';

const App = () => {
	const initialState = {
		pesel: '',
		validationStatus: null,
		birthday: null,
		sex: null,
	};

	const [pesel, setPesel] = useState('');
	const [input, setInput] = useState('');
	const [validation, setValidation] = useState(true);
	const [alert, setAlert] = useState(false);

	const handleInputChange = (e) => {
		setPesel(e.target.value);
		if (isNaN(e.target.value) || e.target.value.length < 11) {
			setValidation(true);
		} else {
			setValidation(false);
		}
	};

	const handleBlur = () => {
		if (validation) {
			setAlert(true);
		} else {
			setAlert(false);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setInput(pesel);
		setPesel(initialState.pesel);
		setValidation(true);
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Layout>
				<Wrapper>
					<Form onSubmit={handleSubmit}>
						<FormField
							onChange={handleInputChange}
							name="pesel"
							id="pesel"
							label="PESEL number"
							value={pesel}
							onBlur={handleBlur}
						/>
						<Button type="submit" disabled={validation}>
							Check
						</Button>
					</Form>
					{alert ? <Alert>PESEL should contain 11 numbers</Alert> : null}

					<Wrapper>
						<Result isValid={getPeselData(input) === true}>
							{input ? (
								<>
									{input}:{' '}
									<span>
										{getPeselData(input) === true
											? 'PESEL is valid'
											: getPeselData(input)}
									</span>
								</>
							) : (
								initialState.validationStatus
							)}
						</Result>
						<Result>
							{input && getPeselData(input) === true
								? `Day of birth: ${getBirthDay(
										input.split('').slice(0, 6).join('')
								  )}`
								: initialState.birthday}
						</Result>
						<Result>
							{input && getPeselData(input) === true
								? `Gender: ${getSex(
										input.split('')[input.split('').length - 2]
								  )}`
								: initialState.sex}
						</Result>
					</Wrapper>
				</Wrapper>
			</Layout>
		</ThemeProvider>
	);
};

export default App;
