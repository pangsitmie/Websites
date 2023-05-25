import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, RootState, createElementAndSelect } from "./redux/store";
import { selectElement } from "./redux/elementsSlice";
import { StyledElement } from "./components/styles/Element.styled";
import { StyledAddButton } from "./components/styles/AddButton.styled";
import { H4 } from "./components/styles/H4.styled";

const ElementsWrapper = styled.div`
    padding-top: 16px;
`;


const Elements = () => {
    const dispatch: AppDispatch = useDispatch();

    const selectedPageId = useSelector((state: RootState) => state.pages.selectedPageId);
    const pages = useSelector((state: RootState) => state.pages.list);

    // Get the currently selected page
    const selectedPage = pages.find(page => page.id === selectedPageId);

    // If there's no selected page, render a message
    if (!selectedPage) {
        return <ElementsWrapper>Please select a page to view its elements.</ElementsWrapper>
    }

    const handleCreateElement = () => {
        if (selectedPage) {
            dispatch(createElementAndSelect(selectedPage.id));
        }
    };

    //select the element
    const handleElementSelect = (elementId: string) => {
        dispatch(selectElement(elementId));
    };

    const selectedElementId = useSelector((state: RootState) => state.elements.selectedElementId) || null;
    console.log(selectedElementId);

    return (
        <ElementsWrapper>
            <div className="flex gap-4 justify-between mb-4">
                <H4>Elements</H4>
                <StyledAddButton
                    onClick={handleCreateElement}
                >
                    +
                </StyledAddButton>
            </div>

            {selectedPage.elements.map(element => (
                <StyledElement
                    key={element.id}
                    active={element.id === selectedElementId}
                    onClick={() => handleElementSelect(element.id)}
                // className={element.id === selectedElementId ? 'border border-[#123123]' : ''}
                >
                    {element.id === '' ? <strong>{element.name}</strong> : element.name}
                </StyledElement>
            ))}
        </ElementsWrapper>
    );
};

export default Elements;
