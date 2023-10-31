import styled from "styled-components";

export const Button = styled.button`
    width: 150px;
    height: 40px;
    background: ${({theme}) => theme.colors.blue};
    border-color: ${({theme}) => theme.colors.blue};
    border-style: none;
    box-shadow: ${({theme}) => theme.colors.blackAlpha} 5px 5px 7px;
    color: ${({theme}) => theme.colors.black};
		margin: 0 5px;
		font-size: ${({theme}) => theme.fontSize.m};
		
		&:disabled {
				color: ${({theme}) => theme.colors.grey};
				
        &:active {
            box-shadow: ${({theme}) => theme.colors.blackAlpha} 5px 5px 7px;
        }
		}

    &:active {
        box-shadow: ${({theme}) => theme.colors.black} 0 0 0;
    }
`