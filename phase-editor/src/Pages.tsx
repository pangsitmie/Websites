import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, } from "./redux/store";

import { StyledAddButton } from "./components/styles/AddButton.styled";
import { H4 } from "./components/styles/H4.styled";
import { StyledPage } from "./components/styles/Page.styled";
import { RootState } from "./redux/reducers";
import { createPage, createPageAsync, selectPage } from "./redux/pagesSlice";
import { CgHashtag } from 'react-icons/cg';



const PagesWrapper = styled.div`
  border-bottom: 1px solid;
  padding-bottom: 16px;
`;

const Pages = () => {
    const pages = useSelector((state: RootState) => Object.values(state.pages.entities));
    const selectedPageId = useSelector((state: RootState) => state.pages.selectedPageId);

    const dispatch = useDispatch<AppDispatch>();
    const handlePageSelect = (pageId: string) => {
        dispatch(selectPage(pageId));
    };


    const handleCreatePage = () => {
        console.log('handleCreatePage');
        dispatch(createPageAsync());
    };

    // select the page from redux

    return (
        <PagesWrapper>
            <div className="flex gap-4 justify-between mb-4">
                <H4>Pages</H4>
                <StyledAddButton
                    onClick={handleCreatePage}
                >
                    +
                </StyledAddButton>
            </div>

            {pages.map((page) => (
                <StyledPage
                    key={page.id}
                    onClick={() => handlePageSelect(page.id)}
                    onDoubleClick={() => { }}
                    className={page.id === selectedPageId ? 'active' : ''} // if the element is selected, add the active class
                >
                    <div className="flex items-center justify-left">
                        <CgHashtag className="mr-2" />
                        {page.name}
                    </div>
                </StyledPage>
            ))}
        </PagesWrapper >
    )
}

export default Pages