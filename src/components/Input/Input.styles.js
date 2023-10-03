import styled from "styled-components";
import {Label} from "../Label/Label.styles.js";

export const Input = styled.input`
	height: 28px;
	width: 200px;
	margin: 15px 0;
	padding: 4px;
		
		&:focus + ${Label} {
			background: transparent;
			transform: translateY(-10px);
		}
`