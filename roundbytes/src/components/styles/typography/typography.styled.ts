import styled from 'styled-components'

export const H0 = styled.h1`
    font-size: 6rem;
    line-height: 1.25;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 10vw;
    }
`
export const H1 = styled.h1`
    font-size: 5rem;
    line-height: 1.2;
    font-weight: bold;


    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 9vw;
    }
`

export const H2 = styled.h2`
    font-size: 3.5rem;
    line-height: 1.2;
    font-weight: 500;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 7vw;

    }
`

export const H3 = styled.h3`
    font-size: 2.8rem;
    line-height: 1.4;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 6vw;
    }
`

export const H4 = styled.h4`
    font-size: 1.8rem;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.2rem;
    }
`


export const P = styled.p`
    font-size: 1.3rem;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.1rem;
    }
`