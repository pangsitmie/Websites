// src/redux/elementsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Element } from '../interfaces';

interface ElementsState {
    list: Element[];
    selectedElementId?: string | null;
}

const initialState: ElementsState = {
    list: [],
    selectedElementId: null,
};

const elementsSlice = createSlice({
    name: 'elements',
    initialState,
    reducers: {
        setElements: (state, action: PayloadAction<Element[]>) => {
            state.list = action.payload;
        },
        selectElement: (state, action: PayloadAction<string | null>) => {
            state.selectedElementId = action.payload;
        },
        updateElement: (state, action: PayloadAction<Element>) => {
            const index = state.list.findIndex((el) => el.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
            }
        },
        updateElementX: (state, action: PayloadAction<{ id: string, x: number }>) => {
            const element = state.list.find(element => element.id === action.payload.id);
            if (element) {
                element.x = action.payload.x;
            }
        },
        updateElementY: (state, action: PayloadAction<{ id: string, y: number }>) => {
            const element = state.list.find(element => element.id === action.payload.id);
            if (element) {
                element.y = action.payload.y;
            }
        },
        updateElementColor: (state, action: PayloadAction<{ id: string, color: string }>) => {
            const element = state.list.find(element => element.id === action.payload.id);
            if (element) {
                element.color = action.payload.color;
            }
        },
        // additional reducers...
    },
});

export const { setElements, selectElement, updateElement, updateElementX, updateElementY, updateElementColor } = elementsSlice.actions;
export default elementsSlice.reducer;
