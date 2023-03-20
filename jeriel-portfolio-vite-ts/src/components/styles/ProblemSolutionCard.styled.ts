import styled from 'styled-components'

export const StyledProblemSolutionCard = styled.div<{ color: string }>`
    height: 200px;
    padding: 1.5rem;
    border-radius: 25px;
    background-color: ${props => props.color};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    & > h2 {
        font-size: 1.7rem;
        font-weight: 600;
        color: #FFFFFF;
    }

    & > p {
        font-size: 1rem;
        font-weight: 400;
        color: #FFFFFF;
    }
`;
