import styled from "styled-components";
import ColorPicker from "./ColorPicker";
import { AppDispatch, RootState } from "./redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateElementColor, updateElementX, updateElementY } from "./redux/elementsSlice";
import { useEffect, useState } from "react";

const RightPanelWrapper = styled.div`
  padding: 8px;
`;

const Label = styled.label`
  display: grid;
  margin-bottom: 8px;
  grid-template-columns: 16px auto minmax(0, 1fr);
  grid-gap: 8px;
`;

const RightPanel = () => {
    const dispatch: AppDispatch = useDispatch();

    const selectedElementId = useSelector((state: RootState) => state.elements.selectedElementId);
    const selectedPageId = useSelector((state: RootState) => state.pages.selectedPageId);

    const selectedPage = useSelector((state: RootState) => state.pages.list.find(page => page.id === selectedPageId));
    const selectedElement = selectedPage?.elements.find(element => element.id === selectedElementId);


    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        if (selectedElement) {
            setX(selectedElement.x);
            setY(selectedElement.y);
        }
    }, [selectedElement]);

    const handleXChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newX = Number(e.target.value);
        setX(newX);  // Update local state

        if (selectedElement) {
            dispatch(updateElementX({ id: selectedElement.id, x: newX }));
        }
    };

    const handleYChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newY = Number(e.target.value);
        setY(newY);  // Update local state

        if (selectedElement) {
            dispatch(updateElementY({ id: selectedElement.id, y: newY }));
        }
    };

    const handleColorChange = (color: string) => {
        if (selectedElement) {
            dispatch(updateElementColor({ id: selectedElement.id, color }));
        }
    };

    if (!selectedElement) {
        return <RightPanelWrapper>Select an element...</RightPanelWrapper>
    }

    return (
        <RightPanelWrapper>
            <Label>
                X <input type="number" min={0} max={999} value={x} onChange={handleXChange} className="bg-black" />
            </Label>
            <Label>
                Y <input type="number" min={0} max={999} value={y} onChange={handleYChange} className="bg-black" />
            </Label>
            <Label>
                Color <ColorPicker color={selectedElement.color} onColorChange={handleColorChange} />
            </Label>
            <Label>
                O <input type="number" min={0} max={100} value={100} className='bg-black' />
                <input type="range" min={0} max={100} value={100} className='bg-black' />
            </Label>
            {/* <Label>
                B <ColorPicker /> #00FF00
            </Label> */}
        </RightPanelWrapper>
    );
};

export default RightPanel;
