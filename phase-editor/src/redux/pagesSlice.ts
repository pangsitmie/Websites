// src/redux/pagesSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Page } from '../interfaces';
import { RootState } from './reducers';

interface PagesState {
  entities: {
    [key: string]: Page;
  };
  selectedPageId: string | null; // add this line
}


const initialState: PagesState = {
  entities: {
    "page1": {
      id: "page1",
      name: "Page 1",
      elements: ["element1", "element2"]
    },
    "page2": {
      id: "page2",
      name: "Page 2",
      elements: ["element3"]
    }
  },
  selectedPageId: null, // add this line
};



const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    selectPage: (state, action: PayloadAction<string>) => {
      state.selectedPageId = action.payload;
    },
    createPage: (state, action: PayloadAction<Page>) => {
      state.entities[action.payload.id] = action.payload;
    },
    updatePage: (state, action: PayloadAction<Page>) => {
      const { id } = action.payload;
      if (state.entities[id]) {
        state.entities[id] = { ...state.entities[id], ...action.payload };
      }
    },
    deletePage: (state, action: PayloadAction<string>) => {
      delete state.entities[action.payload];
    },
    addElementToPage: (state, action: PayloadAction<{ pageId: string; elementId: string }>) => {
      const { pageId, elementId } = action.payload;
      if (state.entities[pageId]) {
        state.entities[pageId].elements = [...state.entities[pageId].elements, elementId];
      }
    },
    removeElementFromPage: (state, action: PayloadAction<{ pageId: string; elementId: string }>) => {
      const { pageId, elementId } = action.payload;
      if (state.entities[pageId]) {
        state.entities[pageId].elements = state.entities[pageId].elements.filter(id => id !== elementId);
      }
    },

    // additional reducers...
  },
});

export const {
  selectPage,
  createPage,
  updatePage,
  deletePage,
  addElementToPage,
  removeElementFromPage,
} = pagesSlice.actions;

export default pagesSlice.reducer;


// Async action to create a page
export const createPageAsync = createAsyncThunk(
  'pages/createPage',
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    const pageIndexes = Object.keys(state.pages.entities).map((id) => parseInt(id.replace('page', '')));
    const maxPageIndex = Math.max(...pageIndexes, 0);
    const newPageIndex = maxPageIndex + 1;
    const newPage: Page = { id: `page${newPageIndex}`, name: `Page ${newPageIndex}`, elements: [] };
    dispatch(createPage(newPage));
  }
);