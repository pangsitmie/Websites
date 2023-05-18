import styled from 'styled-components'

export const H1 = styled.h1`
    font-size: 6rem;


    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 14vw;
    }
`