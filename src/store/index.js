import { configureStore, createSlice } from "@reduxjs/toolkit"

const windowState = {
    windows: [],
    currentWindow: null,
}

const idgenerator = () => {
    let date = new Date()
    let id = String(date.getHours()) + String(date.getMinutes()) + String(date.getSeconds() + String(date.getMilliseconds()))
    return id
}
const windowSlice = createSlice({
    name: "window",
    initialState: windowState,
    reducers: {
        addWindow(state, action) {
            const idgen = idgenerator()
            state.windows.push({ ...action.payload, id: idgen })
            state.currentWindow = idgen
        },
        closeWindow(state, action) {
            state.windows = state.windows.filter((item) => item.id !== action.payload.id)
        },
        maxWindow(state, action) {
            const index = state.windows.findIndex((item) => item.id === action.payload.id);
            const newwindow = { ...state.windows[index], max: true }
            state.windows[index] = newwindow
        },
        minWindow(state, action) {
            const index = state.windows.findIndex((item) => item.id === action.payload.id);
            const newwindow = { ...state.windows[index], max: false };
            state.windows[index] = newwindow;
        },
        setcurrentWindow(state, action) {
            state.currentWindow = action.payload
        }
    },
})

const store = configureStore({
    reducer: {
        userwindow: windowSlice.reducer,
    }
})
export const windowaction = windowSlice.actions;
export default store;