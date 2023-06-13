import styled from 'styled-components'

export const H2 = styled.h2`
    font-size: 3.5rem;
    line-height: 1.2;


    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.8rem;
    }
`