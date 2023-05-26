
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { StyledAddButton } from "./components/styles/AddButton.styled";
import { H4 } from "./components/styles/H4.styled";
import { RootState } from "./redux/reducers";
import { StyledElement } from "./components/styles/Element.styled";
import { TbCircleDashed } from 'react-icons/tb';
import { createElement, renameElement, selectElement } from "./redux/elementsSlice";
import { useState } from "react";
import { StyledInput } from "./components/styles/Input.styled";
import { addElementToPage } from "./redux/pagesSlice";
import { v4 as uuidv4 } from 'uuid';



const ElementsWrapper = styled.div`
    padding-top: 16px;
`;


const Elements = () => {
    const selectedPageId = useSelector((state: RootState) => state.pages.selectedPageId);
    const selectedPage = useSelector((state: RootState) => selectedPageId ? state.pages.entities[selectedPageId] : null);
    const elements = useSelector((state: RootState) => state.elements.entities);

    const selectedElementId = useSelector((state: RootState) => state.elements.selectedElementId);

    const dispatch = useDispatch();
    const handleElementSelect = (elementId: string) => {
        dispatch(selectElement(elementId));
    };

    const [editingElementId, setEditingElementId] = useState<string | null>(null);

    const updateElementName = (e: React.ChangeEvent<HTMLInputElement>, elementId: string) => {
        dispatch(renameElement({ elementId, name: e.target.value }));
    };

    const handleElementRename = (elementId: string) => {
        setEditingElementId(elementId); // Set the element ID as the editing element
    };

    const handleElementNameBlur = () => {
        setEditingElementId(null); // Clear the editing state when blurring the input field
    };



    const handleCreateElement = () => {
        if (selectedPageId) {
            const newElementId = uuidv4();

            const newElement = {
                id: newElementId,
                name: "New Element",
                x: 50,
                y: 50,
                opacity: 1,
                color: "#cecece",
                children: [],
            };

            // Dispatch the createElement action
            dispatch(createElement(newElement));

            // Dispatch the addElementToPage action
            dispatch(addElementToPage({ pageId: selectedPageId, elementId: newElementId }));
        }
    };


    const renderElements = (elementIds: string[], level = 0) => {
        return elementIds.map((id) => {
            const element = elements[id];

            return (
                <div key={element.id} style={{ paddingLeft: `${level}rem` }}>
                    <StyledElement
                        onClick={() => handleElementSelect(element.id)}
                        onDoubleClick={() => handleElementRename(element.id)}
                        className={element.id === selectedElementId ? 'active' : ''}
                    >
                        <div className="flex items-center justify-left">
                            <TbCircleDashed className="mr-2" />
                            {editingElementId === element.id ?
                                (
                                    <StyledInput
                                        type="text"
                                        value={element.name}
                                        autoFocus
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateElementName(e, element.id)}
                                        onBlur={handleElementNameBlur}
                                        onKeyDown={(e: React.KeyboardEvent) => {
                                            if (e.key === 'Enter') {
                                                // Check if the target is an input field and blur it
                                                if (e.currentTarget instanceof HTMLInputElement) {
                                                    e.currentTarget.blur();
                                                }
                                            }
                                        }}
                                    />
                                ) :
                                (
                                    <div>{element.name}</div>
                                )
                            }
                        </div>
                    </StyledElement>
                    {element.children && renderElements(element.children, level + 1)}
                </div>
            );
        });
    };

    return (
        <ElementsWrapper>
            <div className="flex gap-4 justify-between mb-4">
                <H4>Elements</H4>
                <StyledAddButton onClick={handleCreateElement}>
                    +
                </StyledAddButton>
            </div>
            {selectedPage && renderElements(selectedPage.elements)}
        </ElementsWrapper>
    );
};

export default Elements;
