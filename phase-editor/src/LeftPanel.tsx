import styled from "styled-components";
import Pages from "./Pages";
import Elements from "./Elements";
import { H4 } from "./components/styles/H4.styled";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const LeftPanelWrapper = styled.div`

  padding: 12px;
`;

const LeftPanel = () => {
    const selectedPageId = useSelector((state: RootState) => state.pages.selectedPageId);
    const selectedElementId = useSelector((state: RootState) => state.elements.selectedElementId) || null;

    const selectedPage = useSelector((state: RootState) => state.pages.list.find(page => page.id === selectedPageId));
    const selectedElement = selectedPage?.elements.find(element => element.id === selectedElementId);


    return (
        <LeftPanelWrapper>
            <div className="mb-4">
                <H4 className="my-4 text-[#5b53ff]">PHASE EDITOR</H4>
                <hr />
            </div>

            <Pages />
            <Elements />

            {/* render the selected Page and selected emelemnt in the redux store */}
            <div>
                <br />

                <H4>
                    Selected Page:{selectedPage?.name || "No page selected"}
                </H4>

                <br />

                <H4>
                    Element:{selectedElement?.name || "No element selected"}
                    <br />
                    ID:{selectedElement?.id || "No element selected"}
                    <br />
                    X: {selectedElement?.x}
                    <br />
                    Y: {selectedElement?.y}
                    <br />
                    Color: {selectedElement?.color}
                </H4>
            </div>
        </LeftPanelWrapper>
    )
}

export default LeftPanel