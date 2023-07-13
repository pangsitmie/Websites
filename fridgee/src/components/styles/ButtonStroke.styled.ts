import styled from "styled-components";

export const StyledButtonStroke = styled.button`
    border-radius: 52px;
    border: 1px solid #cecece;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem 2rem;
    background-color: transparent;
    color: ${({ color }) => color || "#111"};
    transition: all 0.3s ease-in-out;

    & a{
        color: #fff;
        text-decoration: none;
    }

    &:hover {
        transform: scale(1.01);
        border-color: #454545;
    }
`
