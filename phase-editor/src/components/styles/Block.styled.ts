import styled from "styled-components";
import { BlockProps } from "../../interfaces";

export const Block = styled.div<BlockProps>`
  position: absolute;
  width: 100px;
  height: 100px;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  opacity: ${(props) => props.o};
  background: ${(props) => props.color};
  outline: ${(props) => (props.selected ? '2px solid #5b53ff' : 'none')};
`;