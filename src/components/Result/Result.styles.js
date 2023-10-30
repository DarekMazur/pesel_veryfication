import styled from "styled-components";

export const Result = styled.p`
	width: 380px;
	font-size: ${({theme}) => theme.fontSize.l};
		
	span {
		font-weight: ${({theme}) => theme.fontWeight.fat};	
    color: ${({isValid, theme}) => isValid ? theme.colors.green : theme.colors.red}
	}
`