import React from "react";
import PropTypes from "prop-types";
import {Input} from "../Input/Input.styles.js";
import {StyledFormField} from "./FormField.styles.js";
import {Label} from "../Label/Label.styles.js";

const FormField = ({id, onBlur, name, value, onChange, label, type = 'text'}) => {
	return(
		<StyledFormField>
			<Input onBlur={onBlur} id={id} name={name} value={value} onChange={onChange} type={type}/>
			<Label htmlFor={id}>{label}</Label>
		</StyledFormField>
	)
}

export default FormField

FormField.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.string
}