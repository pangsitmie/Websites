import styled from 'styled-components'

export const H1 = styled.h1`
    font-size: 4rem;
    line-height: 1.2;


    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 9vw;
    }
`

export const H2 = styled.h2`
    font-size: 2rem;


    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
    }
`

export const H3 = styled.h3`
    font-size: 1.2rem;
    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 5vw;
    }
`