import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { selectElement } from "./redux/elementsSlice";
import { Block } from "./components/styles/Block.styled";



const CanvasWrapper = styled.div`
  position: relative;
  background: #1E1E1E;
  overflow: hidden;
`;


const Canvas = () => {
  const dispatch: AppDispatch = useDispatch();


  const selectedPageId = useSelector((state: RootState) => state.pages.selectedPageId);
  const selectedPage = useSelector((state: RootState) => state.pages.list.find(page => page.id === selectedPageId));

  const selectedElementId = useSelector((state: RootState) => state.elements.selectedElementId) || null;


  // inside the Elements component
  const handleElementSelect = (elementId: string) => {
    dispatch(selectElement(elementId));
  };


  return (
    <CanvasWrapper>
      {selectedPage?.elements.map(element => (
        <Block
          key={element.id}
          x={element.x}
          y={element.y}
          o={element.opacity}
          selected={element.id === selectedElementId}
          color={element.color}
          onClick={() => handleElementSelect(element.id)}
        />
      ))}
    </CanvasWrapper>
  );
};

export default Canvas;
