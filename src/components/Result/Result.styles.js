import styled from "styled-components";

export const Result = styled.p`
	width: 380px;
	font-size: 18px;
		
	span {
		font-weight: 800;	
    color: ${({isValid, theme}) => isValid ? theme.colors.green : theme.colors.red}
	}
`