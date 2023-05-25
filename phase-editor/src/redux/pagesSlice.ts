// src/redux/pagesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Page } from '../interfaces';

interface PagesState {
  list: Page[];
  selectedPageId: string | null;
}

const initialState: PagesState = {
  list: [
    {
      id: '1',
      name: 'Page 1',
      elements: [
        { id: '1', name: "Element 1", x: 10, y: 10, opacity: 1, color: '#123123' },
        { id: '2', name: "Element 2", x: 20, y: 20, opacity: 0.5, color: 'blue' },
      ]
    },
    {
      id: '2',
      name: 'Page 2',
      elements: [
        { id: '3', name: "Element 1", x: 30, y: 30, opacity: 1, color: 'green' },
        { id: '4', name: "Element 2", x: 40, y: 40, opacity: 0.8, color: 'yellow' },
        { id: '5', name: "Element 3", x: 50, y: 50, opacity: 1, color: 'purple' },
        { id: '6', name: "Element 4", x: 60, y: 60, opacity: 0.6, color: 'orange' },
      ]
    },
  ],
  selectedPageId: '1',
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setPages: (state, action: PayloadAction<Page[]>) => {
      state.list = action.payload;
    },
    selectPage: (state, action: PayloadAction<string>) => {
      state.selectedPageId = action.payload;
    },
    createPage: (state, action: PayloadAction<string>) => {
      const newPage = {
        id: (state.list.length + 1).toString(),
        name: action.payload,
        elements: [],
      };
      state.list.push(newPage);

      //update the selectedPageId to the newly created page
      state.selectedPageId = newPage.id;
    },
    createElement: (state, action: PayloadAction<{ pageId: string, color: string }>) => {
      const page = state.list.find(page => page.id === action.payload.pageId);
      if (page) {
        const newElement = {
          id: (page.elements.length + 1).toString(),
          name: `Element ${page.elements.length + 1}`,
          x: 100 + page.elements.length * 60,
          y: 100,
          opacity: 1,
          color: action.payload.color,
        };
        page.elements.push(newElement);
      }
    },

    updatePageName: (state, action: PayloadAction<{ id: string, name: string }>) => {
      const page = state.list.find(page => page.id === action.payload.id);
      if (page) {
        page.name = action.payload.name;
      }
    },
    // additional reducers...
  },
});

export const { setPages, selectPage, createPage, createElement, updatePageName } = pagesSlice.actions;
export default pagesSlice.reducer;
