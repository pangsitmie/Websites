import styled, { keyframes } from "styled-components";

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

export const ScrollAlertContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-align: center;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  left: 0;
  padding: 10px;
  width: 100%;
  font-size: 20px;
  z-index: 1000;
  animation: ${blink} 2s ease-in-out ;
`;