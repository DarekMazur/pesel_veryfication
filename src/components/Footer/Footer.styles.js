import styled from "styled-components";

export const StyledFooter = styled.footer`
		display: flex;
		justify-content: center;
		align-items: center;
    min-height: 5rem;
		font-size: ${({theme}) => theme.fontSize.s};
		font-weight: ${({theme}) => theme.fontWeight.bold};
`