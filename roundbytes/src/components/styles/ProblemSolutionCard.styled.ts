import styled from 'styled-components'

export const StyledProblemSolutionCard = styled.div<{ color: string }>`
    height: 100%;
    padding: 1.5rem;
    border-radius: 25px;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    
`
