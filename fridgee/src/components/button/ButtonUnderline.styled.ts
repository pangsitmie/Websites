import styled from "styled-components";

export const StyledButtonUnderline = styled.button`
height: 45px;
border: none;
background: none;
position: relative;
padding: 0 .5rem;
cursor: pointer;
margin: 0;

&::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: 0;
    background-color: #0070F4;
    transition: width 0.3s ease;
}

&:hover::after {
    width: 100%;
}
`
