import styled from "styled-components";

export const StyledCursor = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  padding: 3.5rem;
  border-radius: 50%;
  color: black;
  border: 1px solid #111;
  font-size: 1.2rem;
  font-weight: bold;
  pointer-events: none;
  z-index: 2;
  transform: translate(-50%, -50%);
  transition: all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);



`;
