// src/redux/elementsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Element } from '../interfaces';

interface ElementsState {
    entities: {
        [key: string]: Element;
    };
    selectedElementId: string | null;
}

const initialState: ElementsState = {
    entities: {
        "element1": {
            id: "element1",
            name: "Element 1",
            x: 100,
            y: 100,
            opacity: 1,
            color: "#626267",
            children: ["child1"]
        },
        "element2": {
            id: "element2",
            name: "Element 2",
            x: 250,
            y: 100,
            opacity: 1,
            color: "#e16036",
        },
        "element3": {
            id: "element3",
            name: "Element 3",
            x: 300,
            y: 300,
            opacity: 1,
            color: "#ecfeaa",
        },
        "child1": {
            id: "child1",
            name: "Child 1",
            x: 150,
            y: 250,
            opacity: 1,
            color: "#ff785a",
        }
    },
    selectedElementId: null,
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
        renameElement: (state, action: PayloadAction<{ elementId: string; name: string }>) => {
            const { elementId, name } = action.payload;
            if (state.entities[elementId]) {
                state.entities[elementId].name = name;
            }
        },
        updateElement: (state, action: PayloadAction<{ id: string, x: number, y: number }>) => {
            const { id, x, y } = action.payload;
            if (state.entities[id]) {
                state.entities[id].x = x;
                state.entities[id].y = y;
            }
        },
        updateElementX(state, action: PayloadAction<{ elementId: string; x: number }>) {
            const { elementId, x } = action.payload;
            const element = state.entities[elementId];
            if (element) {
                element.x = x;
            }
        },
        updateElementY(state, action: PayloadAction<{ elementId: string; y: number }>) {
            const { elementId, y } = action.payload;
            const element = state.entities[elementId];
            if (element) {
                element.y = y;
            }
        },
        updateElementColor(state, action: PayloadAction<{ elementId: string; color: string }>) {
            const { elementId, color } = action.payload;
            const element = state.entities[elementId];
            if (element) {
                element.color = color;
            }
        },
        updateElementOpacity(state, action: PayloadAction<{ elementId: string; opacity: number }>) {
            const { elementId, opacity } = action.payload;
            const element = state.entities[elementId];
            if (element) {
                element.opacity = opacity;
            }
        },
    },
});

export const {
    selectElement,
    createElement,
    updateElement,
    deleteElement,
    addChildElement,
    removeChildElement,
    renameElement,
    updateElementX,
    updateElementY,
    updateElementColor,
    updateElementOpacity,
} = elementsSlice.actions;
export default elementsSlice.reducer;
