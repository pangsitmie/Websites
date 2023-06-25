import styled from 'styled-components'

export const StyledWorkHero = styled.div`
    width: 100%;
    height: 85vh;
    align-items: center;
    background: #FFFFFF;
    padding: 14rem 5% 0;
    color: #111;

   
    @media(max-width: ${({ theme }) => theme.mobile}) {
        padding: 12rem 1rem 0;
    }
        
`