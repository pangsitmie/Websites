import styled from 'styled-components'

export const H1 = styled.h1`
    font-size: 6rem;


    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 10vw;
    }
`

export const H2 = styled.h2`
    font-size: 3.5rem;


    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.8rem;
    }
`

export const H3 = styled.h3`
    font-size: 1.5rem;
    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.1rem;
    }
`