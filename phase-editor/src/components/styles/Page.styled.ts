import styled from "styled-components";

interface StyledElementProps {
    active?: boolean;
}

export const StyledPage = styled.button<StyledElementProps>`
    width: 100%;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    text-align: left;
    background-color: transparent;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 0.5rem;


    &:hover {
        border: 1px solid #5b53ff;
    }
    
    ${(props) => props.active && `
        border: 1px solid #5b53ff;
    `}

`
