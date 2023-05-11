import styled from "styled-components";

export const StyledButtonFill = styled.button`
    border-radius: 50px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    padding: .8rem 2.5rem;
    background-color: #111;
    color: #FFF;
    transition: all 0.3s ease-in-out;

    & a{
        color: #111;
        text-decoration: none;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 10px #61F8D4;
    }
`
