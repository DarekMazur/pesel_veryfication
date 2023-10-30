import styled from "styled-components";

export const Result = styled.p`
	span {
		font-weight: 800;	
    color: ${({isValid}) => isValid ? 'green' : 'red'}
	}
`