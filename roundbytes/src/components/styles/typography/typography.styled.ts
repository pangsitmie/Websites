import styled from 'styled-components'

export const H0 = styled.h1`
    font-size: 8rem;
    line-height: 1.2;
    font-weight: 600;


    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 10vw;
    }
`
export const H1 = styled.h1`
    font-size: 6rem;
    line-height: 1.2;
    font-weight: bold;


    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 9vw;
    }
`

export const H2 = styled.h2`
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 500;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
    }
`

export const H3 = styled.h3`
    font-size: 1.8rem;
    line-height: 1.4;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 5vw;
    }
`

export const H4 = styled.h4`
    font-size: 1.5rem;
    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 4vw;
    }
`


export const P = styled.p`
    font-size: 1.35rem;
    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 3vw;
    }
`