import styled from "styled-components";

export const StyledButtonUnderline = styled.button`

border: none;
background: none;
position: relative;
cursor: pointer;
color: #111111;

&::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: 0;
    background-color: #111;
    transition: width 0.3s ease;
}
&:hover::after {
    width: 100%;
}
`
