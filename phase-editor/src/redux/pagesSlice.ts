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
        { id: '1', name: "Element 1", x: 100, y: 100, opacity: 1, color: '#ccd5ae' },
        { id: '2', name: "Element 2", x: 200, y: 200, opacity: 0.5, color: '#fefae0' },
      ]
    },
    {
      id: '2',
      name: 'Page 2',
      elements: [
        { id: '3', name: "Element 1", x: 100, y: 30, opacity: 1, color: 'green' },
        { id: '4', name: "Element 2", x: 150, y: 200, opacity: 0.8, color: 'yellow' },
        { id: '5', name: "Element 3", x: 450, y: 50, opacity: 1, color: 'purple' },
        { id: '6', name: "Element 4", x: 90, y: 250, opacity: 0.6, color: 'orange' },
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
      const pageIndex = state.list.findIndex(page => page.id === action.payload.pageId);
      if (pageIndex !== -1) {
        const newElement = {
          id: (state.list[pageIndex].elements.length + 1).toString(),
          name: `Element ${state.list[pageIndex].elements.length + 1}`,
          x: 100 + state.list[pageIndex].elements.length * 60,
          y: 100,
          opacity: 1,
          color: action.payload.color,
        };
        state.list[pageIndex].elements = [...state.list[pageIndex].elements, newElement];
      }
    },
    updatePageName: (state, action: PayloadAction<{ id: string, name: string }>) => {
      const page = state.list.find(page => page.id === action.payload.id);
      if (page) {
        page.name = action.payload.name;
      }
    },
    updateElementX: (state, action: PayloadAction<{ pageId: string, elementId: string, x: number }>) => {
      const page = state.list.find(page => page.id === action.payload.pageId);
      if (page) {
        const element = page.elements.find(element => element.id === action.payload.elementId);
        if (element) {
          element.x = action.payload.x;
        }
      }
    },
    updateElementY: (state, action: PayloadAction<{ pageId: string, elementId: string, y: number }>) => {
      const page = state.list.find(page => page.id === action.payload.pageId);
      if (page) {
        const element = page.elements.find(element => element.id === action.payload.elementId);
        if (element) {
          element.y = action.payload.y;
        }
      }
    },
    updateElementColor: (state, action: PayloadAction<{ pageId: string, elementId: string, color: string }>) => {
      const page = state.list.find(page => page.id === action.payload.pageId);
      if (page) {
        const element = page.elements.find(element => element.id === action.payload.elementId);
        if (element) {
          element.color = action.payload.color;
        }
      }
    },
    updateElementOpacity: (state, action: PayloadAction<{ pageId: string, elementId: string, opacity: number }>) => {
      const page = state.list.find(page => page.id === action.payload.pageId);
      if (page) {
        const element = page.elements.find(element => element.id === action.payload.elementId);
        if (element) {
          element.opacity = action.payload.opacity;
        }
      }
    },


    // additional reducers...
  },
});

export const {
  setPages,
  selectPage,
  createPage,
  createElement,
  updatePageName,
  updateElementX,
  updateElementY,
  updateElementColor,
  updateElementOpacity
} = pagesSlice.actions;
export default pagesSlice.reducer;
