import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1, text: "Hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("add todo action : ", action.payload)
            console.log("add todo state.todo : ", state.todos)
            console.log("add todo state : ", state)
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            console.log("add todo : ", todo)
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            console.log("remove todo action : ", action.payload)
            console.log("remove todo state.todo : ", state.todos)
            console.log("remove todo state : ", state)
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            // state.todos = state.todos.map((todo) => (todo.id === action.payload ?  : todo ))
            state.todos = state.todos.map((todo) => todo.id === id ? { ...todo, text }  : todo)
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer