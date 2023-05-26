
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { StyledAddButton } from "./components/styles/AddButton.styled";
import { H4 } from "./components/styles/H4.styled";
import { RootState } from "./redux/reducers";
import { StyledElement } from "./components/styles/Element.styled";
import { TbCircleDashed } from 'react-icons/tb';
import { selectElement } from "./redux/elementsSlice";



const ElementsWrapper = styled.div`
    padding-top: 16px;
`;


const Elements = () => {
    const selectedPageId = useSelector((state: RootState) => state.pages.selectedPageId);
    const selectedPage = useSelector((state: RootState) => state.pages.entities[selectedPageId]);
    const elements = useSelector((state: RootState) => state.elements.entities);

    const selectedElementId = useSelector((state: RootState) => state.elements.selectedElementId);

    const dispatch = useDispatch();
    const handleElementSelect = (elementId: string) => {
        dispatch(selectElement(elementId));
    };


    const renderElements = (elementIds: string[], level = 0) => {
        return elementIds.map((id) => {
            const element = elements[id];

            return (
                <div key={element.id} style={{ paddingLeft: `${level}rem` }}>
                    <StyledElement
                        onClick={() => handleElementSelect(element.id)}
                        className={element.id === selectedElementId ? 'active' : ''} // if the element is selected, add the active class
                    >
                        <div className="flex items-center justify-left">
                            <TbCircleDashed className="mr-2" />
                            {element.name}
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
                <StyledAddButton onClick={() => { }}>
                    +
                </StyledAddButton>
            </div>
            {selectedPage && renderElements(selectedPage.elements)}
        </ElementsWrapper>
    );
};

export default Elements;
