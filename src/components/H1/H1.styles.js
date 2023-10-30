import styled from "styled-components";

export const H1 = styled.h1`
	font-size: ${({theme}) => theme.fontSize.xl};
	font-weight: ${({theme}) => theme.fontWeight.fat};
		font-family: ${({theme}) => theme.fonts.headers};
`