import styled from "styled-components";


export const StyledHeroSocials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: absolute;
    left: 0;
    bottom: 5.5rem;
    font-size: 1.5rem;
    color: #111111;

    &::after {
        content: "";
        width: 1px;
        height: 2rem;
        background-color: #111;
        cursor: normal;
    }
    & a:hover {
        color: #FFF;
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`