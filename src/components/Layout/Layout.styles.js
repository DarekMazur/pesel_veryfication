import styled from "styled-components";

export const StyledLayout = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;

    & > main {
        justify-content: flex-start;
        min-height: 39rem;
    }
`