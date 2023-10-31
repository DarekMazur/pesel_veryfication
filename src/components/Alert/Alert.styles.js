import styled from "styled-components";

export const Alert = styled.p`
	color: ${({theme}) => theme.colors.red};
    font-size: ${({theme}) => theme.fontSize.m};
		font-weight: ${({theme}) => theme.fontWeight.bold};
`