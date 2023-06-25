import styled from 'styled-components'

export const H1 = styled.h1`
    font-size: 5.5rem;
    line-height: 1.2;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 12vw;
    }
`