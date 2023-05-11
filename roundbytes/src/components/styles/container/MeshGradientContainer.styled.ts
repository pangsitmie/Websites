import styled from "styled-components";

export const StyledMeshGradientContainer = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
position: relative;
align-items: center;
font-weight: bold;
background: linear-gradient(
  to right,
  #4dffb2,
  #a3e1ff 20%,
  #DDF3FF 40%,
  #0FF5DA 60%,
  #a3e1ff 80%,
  #648ff5
);
background-size: 800% 800%;
animation: mesh-gradient-animation 10s ease infinite;
cursor: none;


@keyframes mesh-gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }


    &:hover {
        background-color: transparent;
        border-color: #61F8D4;
        cursor: default;
`