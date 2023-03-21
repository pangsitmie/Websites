import styled from 'styled-components'

export const H2 = styled.h2`
    font-size: 3.5rem;


    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
    }
`