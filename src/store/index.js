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
const terminalState = {
    chats:[]
}
const command = {
    user:localStorage.getItem("username"),
    about:"Hi, I'm Nav. Passinate about Full stack developer. I have a passion for creating and developing web applications that are both visually appealing and functional.",
    techstack:"HTML , CSS , Javascript , Jquery , python , C , React.js , Firebase ",
    defaultcommand:"No command found. use /help to know more ",
    help:"Command avaiable\t>user\n>about\n>techstack\n\n>help"
}
const terminalSlice = createSlice({
    name:"terminal",
    initialState:terminalState,
    reducers : {
        commandexecutes (state,action) {
            if (action.payload in command) {
                let newChat = {
                    username:localStorage.getItem("username"),
                    command:action.payload,
                    result:command[action.payload],
                }
                state.chats.push(newChat)
            }
            else {
                let newChat = {
                    username:localStorage.getItem("username"),
                    command:action.payload,
                    result:command["defaultcommand"],
                }
                state.chats.push(newChat)
            }
        }
    },

})

const store = configureStore({
    reducer: {
        userwindow: windowSlice.reducer,
        terminal: terminalSlice.reducer,
    }
})
export const windowaction = windowSlice.actions;
export const terminalactions = terminalSlice.actions;
export default store;