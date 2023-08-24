import styled from "styled-components";


export const StyledHeroSocials = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 1.5rem;

    &::after {
        content: "";
        width: 2rem;
        height: 1px;
        background-color: rgb(156 163 175);
        cursor: normal;
    }
    & a:hover {
        color: #3C9EFF;
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        display: none;
    }
`