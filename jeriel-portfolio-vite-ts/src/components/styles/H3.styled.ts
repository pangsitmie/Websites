import styled from 'styled-components'

export const H3 = styled.h3`
    font-size: 2.4rem;


    @media(max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
    }
`