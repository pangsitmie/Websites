import styled from 'styled-components'

export const StyledWorkHero = styled.div`
    display: flex;
    width: 100%;
    height: 75vh;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    padding: 3rem 6rem 0rem;
    color: #111;

   
    @media(max-width: ${({ theme }) => theme.mobile}) {
        padding: 0rem 5% 0;
    }
        
`