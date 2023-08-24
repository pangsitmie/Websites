import styled from "styled-components";

export const StyledExpertiseCard = styled.div`
    background-color: transparent;
    padding: 2.4rem 3.5rem;
    border-radius: 2rem;
    border: 1px solid #cecece;
    transition: 0.5s ease-in-out;

    &:hover {
        border: 1px solid #3C9EFF;
        cursor: default;
    }

    
    @media(max-width: ${({ theme }) => theme.mobile}) {
        padding: 2rem 1.5rem
    }
`