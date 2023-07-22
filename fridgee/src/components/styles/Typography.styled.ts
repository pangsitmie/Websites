import styled from 'styled-components'

export const H1 = styled.h1`
    font-size: 3.5rem;
    font-weight: bold;
    line-height: 1.3;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 12vw;
    }
`

export const H2 = styled.h2`
    font-size: 2rem;
    font-weight: 700;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 10vw;
    }
`

export const H3 = styled.h3`
    font-size: 1.3rem;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 6vw;
    }
`

export const H4 = styled.h4`
    font-size: 1.1rem;
    font-weight: 600;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 5vw;
    }
`

export const P = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #9f9f9f;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 4vw;
    }
`