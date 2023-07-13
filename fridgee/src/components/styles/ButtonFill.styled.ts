import styled from "styled-components";

export const StyledButtonFill = styled.button`
    width: 100%;
    border-radius: 52px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem 2rem;
    background-color: #0070F4;
    color: #fff;
    transition: all 0.3s ease-in-out;

    & a{
        color: #111;
        text-decoration: none;
    }

    &:hover {
        transform: scale(1.01);
        box-shadow: 0 0 10px #cecece;
    }
`
