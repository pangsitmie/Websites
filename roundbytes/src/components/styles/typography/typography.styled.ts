import styled from 'styled-components'

export const H1 = styled.h1`
    font-size: 4rem;
    line-height: 1.2;


    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 9vw;
    }
`

export const H2 = styled.h2`
    font-size: 2.2rem;
    line-height: 1.2;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
    }
`

export const H3 = styled.h3`
    font-size: 1.8rem;
    line-height: 1.2;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 5vw;
    }
`

export const H4 = styled.h4`
    font-size: 1.4rem;
    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 4vw;
    }
`
export const P = styled.p`
    font-size: 1.1rem;
    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 3vw;
    }
`