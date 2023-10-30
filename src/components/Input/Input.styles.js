import styled from "styled-components";
import {Label} from "../Label/Label.styles.js";

export const Input = styled.input`
	height: 40px;
	width: 200px;
	padding: 4px 7px;
	font-size: ${({theme}) => theme.fontSize.m};
		
		&:focus + ${Label} {
			background: transparent;
			transform: translateY(-10px);
		}
`