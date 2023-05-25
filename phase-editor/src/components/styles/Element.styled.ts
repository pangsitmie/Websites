import styled from "styled-components";

interface StyledElementProps {
    active?: boolean;
}

export const StyledElement = styled.button<StyledElementProps>`
    width: 100%;
    padding: 0.4rem .5rem;
    margin-bottom: 0.5rem;
    text-align: left;
    backgroundColor: transparent;
    border: 1px solid transparent;
    cursor: pointer;


    &:hover {
        border: 1px solid #4597F8;
    }
    
    ${(props) => props.active && `
        outline: 1px solid #4597F8;
    `}

`
