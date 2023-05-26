// src/redux/elementsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Element } from '../interfaces';

interface ElementsState {
    entities: {
        [key: string]: Element;
    };
    selectedElementId: string | null; // add this line
}

const initialState: ElementsState = {
    entities: {
        "element1": {
            id: "element1",
            name: "Element 1",
            x: 10,
            y: 10,
            opacity: 1,
            color: "#000000",
            children: ["child1"]
        },
        "element2": {
            id: "element2",
            name: "Element 2",
            x: 20,
            y: 20,
            opacity: 1,
            color: "#000000",
        },
        "element3": {
            id: "element3",
            name: "Element 3",
            x: 30,
            y: 30,
            opacity: 1,
            color: "#000000",
        },
        "child1": {
            id: "child1",
            name: "Child 1",
            x: 15,
            y: 15,
            opacity: 1,
            color: "#000000",
        }
    },
    selectedElementId: null, // add this line
};


const elementsSlice = createSlice({
    name: 'elements',
    initialState,
    reducers: {
        selectElement: (state, action: PayloadAction<string>) => {
            state.selectedElementId = action.payload;
        },
        createElement: (state, action: PayloadAction<Element>) => {
            state.entities[action.payload.id] = action.payload;
        },
        updateElement: (state, action: PayloadAction<Element>) => {
            const { id } = action.payload;
            if (state.entities[id]) {
                state.entities[id] = { ...state.entities[id], ...action.payload };
            }
        },
        deleteElement: (state, action: PayloadAction<string>) => {
            delete state.entities[action.payload];
        },
        addChildElement: (state, action: PayloadAction<{ parentId: string; childId: string }>) => {
            const { parentId, childId } = action.payload;
            if (state.entities[parentId]) {
                state.entities[parentId].children = [...(state.entities[parentId].children || []), childId];
            }
        },
        removeChildElement: (state, action: PayloadAction<{ parentId: string; childId: string }>) => {
            const { parentId, childId } = action.payload;
            if (state.entities[parentId]) {
                state.entities[parentId].children = (state.entities[parentId].children || []).filter(id => id !== childId);
            }
        },

        // additional reducers...
    },
});

export const {
    selectElement,
    createElement,
    updateElement,
    deleteElement,
    addChildElement,
    removeChildElement,
} = elementsSlice.actions;
export default elementsSlice.reducer;
