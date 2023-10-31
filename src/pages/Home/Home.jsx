import { useState } from 'react';
import { getPeselData } from '../../methods/getPeselData';
import { getBirthDay } from '../../methods/getBirthday.js';
import { getSex } from '../../methods/getSex.js';
import { Wrapper } from '../../components/Wrapper/Wrapper.styles.js';
import FormField from '../../components/FormField/FormField.jsx';
import { Form } from '../../components/Form/Form.styles.js';
import { Button } from '../../components/Button/Button.styles.js';
import { Result } from '../../components/Result/Result.styles.js';
import { Alert } from '../../components/Alert/Alert.styles.js';
import {lang} from "../../lang/lang.js";

const Home = ({userLang}) => {
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
		<Wrapper>
			<Form onSubmit={handleSubmit}>
				<FormField
					onChange={handleInputChange}
					name="pesel"
					id="pesel"
					label={lang[userLang].home.input}
					value={pesel}
					onBlur={handleBlur}
				/>
				<Button type="submit" disabled={validation}>
					{lang[userLang].home.button}
				</Button>
			</Form>
			{alert ? <Alert>{lang[userLang].home.alert}</Alert> : null}

			<Wrapper>
				<Result $valid={getPeselData(input) === true}>
					{input ? (
						<>
							{input}:{' '}
							<span>
								{getPeselData(input) === true
									? lang[userLang].home.verification.correct
									: getPeselData(input)}
							</span>
						</>
					) : (
						initialState.validationStatus
					)}
				</Result>
				<Result>
					{input && getPeselData(input) === true
						? `${lang[userLang].home.dayOfBirth}: ${getBirthDay(
								input.split('').slice(0, 6).join('')
						  )}`
						: initialState.birthday}
				</Result>
				<Result>
					{input && getPeselData(input) === true
						? `${lang[userLang].home.gender.gender}: ${getSex(input.split('')[input.split('').length - 2])}`
						: initialState.sex}
				</Result>
			</Wrapper>
		</Wrapper>
	);
};

export default Home;
