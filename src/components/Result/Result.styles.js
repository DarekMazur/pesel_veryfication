import styled from "styled-components";

export const Result = styled.p`
	width: 380px;
	font-size: 18px;
		
	span {
		font-weight: 800;	
    color: ${({isValid}) => isValid ? 'green' : 'red'}
	}
`