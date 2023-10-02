import React from "react";
import PropTypes from "prop-types";

const FormField = ({id, name, value, onChange, label, type = 'text'}) => {
	return(
		<>
			<input id={id} name={name} value={value} onChange={onChange} type={type}/>
			<label htmlFor={id}>{label}</label>
		</>
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