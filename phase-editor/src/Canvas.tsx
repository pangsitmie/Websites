import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store";
import { selectElement, updateElement } from "./redux/elementsSlice";
import { Block } from "./components/styles/Block.styled";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import React, { useEffect, useRef, useState } from "react";
import { RootState } from "./redux/reducers";


const CanvasWrapper = styled.div`
  position: relative;
  background: #1E1E1E;
  overflow: hidden;
`;


const Canvas = () => {
  const dispatch: AppDispatch = useDispatch();

  const elementRef = useRef(null);

  const selectedPageId = useSelector((state: RootState) => state.pages.selectedPageId);
  const selectedPage = useSelector((state: RootState) => selectedPageId ? state.pages.entities[selectedPageId] : null);
  const elements = useSelector((state: RootState) => state.elements.entities);
  const selectedElementId = useSelector((state: RootState) => state.elements.selectedElementId);


  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);


  const handleElementSelect = (elementId: string) => {
    dispatch(selectElement(elementId));
  };

  const handleElementDrag = (_: DraggableEvent, ui: DraggableData, elementId: string) => {
    dispatch(updateElement({
      id: elementId,
      x: ui.x,
      y: ui.y
    }));
  };



  const canvasRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [lastDragPosition, setLastDragPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.buttons !== 1) return;

    setIsDragging(true);
    setLastDragPosition({ x: event.clientX, y: event.clientY });
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    canvasRef.current?.style?.setProperty("cursor", "grabbing");
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!isDragging) return;

    const deltaX = event.clientX - lastDragPosition.x;
    const deltaY = event.clientY - lastDragPosition.y;

    canvasRef.current?.scrollBy(-deltaX, -deltaY);
    setLastDragPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
    canvasRef.current?.style.removeProperty("cursor");
  };

  useEffect(() => {
    const handleMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        canvasRef.current?.style.removeProperty("cursor");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging]);

  const renderElement = (elementId: string) => {
    const element = elements[elementId];
    // Check if the element still exists
    if (!element) {
      return null;
    }

    return (
      <React.Fragment key={element.id}>
        <Draggable
          nodeRef={elementRef}
          onDrag={(e, ui) => handleElementDrag(e, ui, element.id)}
          position={{ x: element.x, y: element.y }}
        >
          <Block
            ref={elementRef}
            o={element.opacity}
            selected={element.id === selectedElementId}
            color={element.color}
            onClick={() => handleElementSelect(element.id)}
          >
            {element.name}
          </Block>
        </Draggable>
        {element.children && element.children.map((childId) => renderElement(childId))}
      </React.Fragment>
    );
  };

  return (
    <CanvasWrapper
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {selectedPage && selectedPage.elements.map((elementId) => renderElement(elementId))}
    </CanvasWrapper>
  );
};

export default Canvas;
