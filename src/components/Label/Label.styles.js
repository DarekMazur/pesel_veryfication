import styled from "styled-components";

export const Label = styled.label`
	position: absolute;
	top: -6px;
	left: 5px;
	padding: 0 5px;
    font-size: ${({theme}) => theme.fontSize.xs};
	background: ${({theme}) => theme.colors.white};
	transition: transform 0.1s ease-in;
`