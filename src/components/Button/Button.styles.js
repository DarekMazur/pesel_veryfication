import styled from "styled-components";

export const Button = styled.button`
    width: 150px;
    height: 40px;
    background: #95B2B8;
    border-color: #95B2B8;
    border-style: none;
    box-shadow: #120309a3 5px 5px 7px;
    color: #120309;
		margin: 0 5px;
		font-size: 16px;
		
		&:disabled {
				color: #6A878DFF;
		}

    &:active {
        box-shadow: #120309 0 0 0;
    }
`